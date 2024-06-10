import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Boutique } from 'src/app/models/Boutique';
import { FileHandle } from 'src/app/models/FileHandle';
import { ImageprocessingService } from 'src/app/services/imageprocessing.service';
import { ProduitService } from 'src/app/services/produit.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { Produit } from 'src/lvt-api/src/models';

@Component({
  selector: 'app-modal-update-produit',
  templateUrl: './modal-update-produit.component.html',
  styleUrls: ['./modal-update-produit.component.css']
})
export class ModalUpdateProduitComponent implements OnInit {
  @Input() produit: Produit ={
    id:0,
    images:[],
  };
  constructor(private imageService: ImageprocessingService,private sanitizer: DomSanitizer, private sharedService: SharedServiceService, private produitService: ProduitService) { }

  ngOnInit(): void {
   console.log(this.produit)
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
      this.produit.images[0] = fileHandle;
      console.log(this.produit.images[0]);
    }
  }
  
  prepareFormDataForProduit(produit: Produit): FormData {
    const uploadImageData = new FormData();
    uploadImageData.append(
      "produit",
      new Blob([JSON.stringify(produit)], { type: "application/json" })
    );

    for (var i = 0; i < this.produit.images.length; i++) {
      uploadImageData.append(
        "image_produit",
        this.produit.images[i].file,
        this.produit.images[i].file.name
      );
    }
    return uploadImageData;
  }
  cancel() {
    this.sharedService.emitCancelEvent();
  }
  

confirmer(){
  console.log(this.produit);
  const formData = this.prepareFormDataForProduit(this.produit);
  this.produitService.updateProduit(formData).subscribe(
    (data) => {
      console.log(data);
      alert("Produit modifiée avec succès")
    },
    (error) => {
      console.log(error);
    }
  );
}

}
