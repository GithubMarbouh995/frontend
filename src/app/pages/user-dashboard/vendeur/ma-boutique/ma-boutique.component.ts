import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageprocessingService } from 'src/app/services/imageprocessing.service';
import { Boutique } from 'src/lvt-api/src/models/boutique';
import { BoutiqueService } from 'src/app/services/boutique.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { map } from 'rxjs';
import { FileHandle } from 'src/app/models/FileHandle';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-ma-boutique',
  templateUrl: './ma-boutique.component.html',
  styleUrls: ['./ma-boutique.component.css']
})
export class MaBoutiqueComponent implements OnInit {

  constructor(private boutiqueService: BoutiqueService, private activatedRoute: ActivatedRoute, private imageService: ImageprocessingService, private authService: AuthenticationService,private sanitizer: DomSanitizer) { };
  boutique: Boutique = {
    id: null,
    nom: "",
    adresse: "",
    telephone: "",
    email: "",
    siteweb: "",
    horaire: "",
    vendeur: {},
    images: [],
  };
  clientId: number = 0;
  ngOnInit() {
    this.getIdClient();
  }

  getIdClient() {
    const email= localStorage.getItem('auth') || '';
    this.authService.getId(email).subscribe(
      data => {
        this.clientId = data;
        this.getBoutique();
      }
    );
  }

  // getBoutique(){
  //   this.boutiqueService.getBoutiqueByVendeur(this.clientId).subscribe(
  //     (data: Boutique) => {
  //       this.boutique= data;
  //       this.boutique = this.imageService.createImagesBoutique(this.boutique);
  //       console.log(data);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }  
  getBoutique() {
    this.boutiqueService.getBoutiqueByVendeur(this.clientId).pipe(
      map((boutique: Boutique) => this.imageService.createImagesBoutique(boutique))
    ).subscribe(data => {
      this.boutique = data;
      console.log("Boutique");
      console.log(this.boutique);
    });
  }


confirmer(){
  console.log(this.boutique);
  const formData = this.prepareFormDataForBoutique(this.boutique);
  this.boutiqueService.update(formData).subscribe(
    (data) => {
      console.log(data);
      alert("Boutique modifiée avec succès")
    },
    (error) => {
      console.log(error);
    }
  );
}

onFileSelected(event: any) {
  if (event.target.files) {
    const file = event.target.files[0];
    const fileHandle: FileHandle = {
      file: file,
      url: this.sanitizer.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      ),
    };
    this.boutique.images[0] = fileHandle;
    console.log(this.boutique.images[0]);
  }
}

prepareFormDataForBoutique(boutique: Boutique): FormData {
  const uploadImageData = new FormData();
  uploadImageData.append(
    "boutique",
    new Blob([JSON.stringify(boutique)], { type: "application/json" })
  );

  for (var i = 0; i < this.boutique.images.length; i++) {
    uploadImageData.append(
      "image_boutique",
      this.boutique.images[i].file,
      this.boutique.images[i].file.name
    );
  }
  return uploadImageData;
}

}
