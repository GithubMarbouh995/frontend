import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { FileHandle } from 'src/app/models/FileHandle';
import { Boutique } from 'src/lvt-api/src/models/boutique';
import { BoutiqueService } from 'src/app/services/boutique.service';
import { AuthenticationService } from "src/app/services/authentication.service";
import { Utilisateur } from "src/lvt-api/src/models";
import { SharedServiceService } from "src/app/services/shared-service.service";

@Component({
  selector: "app-modal-create-boutique",
  templateUrl: "./modal-create-boutique.component.html",
  styleUrls: ["./modal-create-boutique.component.css"],
})
export class ModalCreateBoutiqueComponent implements OnInit {
  form: FormGroup;
  clientId: number = 0;
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

  constructor(
    private boutiqueService: BoutiqueService,
    private sanitizer: DomSanitizer,
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private sharedService: SharedServiceService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.getIdClient();
  }

  create() {
    const formData = this.prepareFormDataForBoutique(this.boutique);
    this.boutiqueService.saveOrUpdate(formData).subscribe(
      (response: Boutique) => {
        this.form.reset();
        this.boutique.images = [];
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
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

      uploadImageData.append(
        "vendeur",
        new Blob([JSON.stringify(boutique.vendeur)], { type: "application/json" })
      );
    }
    return uploadImageData;
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
      this.boutique.images.push(fileHandle);
    }
  }

  removeImages(i: number) {
    this.boutique.images.splice(i, 1);
  }

  fileDropped(fileHandle: FileHandle) {
    this.boutique.images.push(fileHandle);
  }

  getIdClient() {
    const email= localStorage.getItem('auth') || '';
    this.authService.getId(email).subscribe(
      data => {
        this.clientId = data;
        this.getUtilisateur();
      }
    );
  }
  getUtilisateur(){
    this.authService.finbyId(this.clientId).subscribe(
      (data: Utilisateur) => {
        this.boutique.vendeur = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancel() {
    this.sharedService.emitCancelEvent();
  }



}