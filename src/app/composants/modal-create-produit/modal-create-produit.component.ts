import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { FileHandle } from 'src/app/models/FileHandle';
import { Produit } from 'src/lvt-api/src/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: "app-modal-create-produit",
  templateUrl: "./modal-create-produit.component.html",
  styleUrls: ["./modal-create-produit.component.css"],
})
export class ModalCreateProduitComponent implements OnInit {
  form: FormGroup;
  produit: Produit = {
    id: null,
    nom: "",
    categorie: "",
    description:"",
    id_boutique: Number(localStorage.getItem('boutiqueId') || ''),
    prixLocation: "",
    images: [],
  };

  constructor(
    private produitService: ProduitService,
    private sanitizer: DomSanitizer,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      categorie: ['', Validators.required],
      prixLocation: ['', Validators.required],
      images: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  create() {
    const formData = this.prepareFormDataForProduit(this.produit);
    this.produitService.ajouterProduit(formData).subscribe(
      (response: Produit) => {
        this.form.reset();
        this.produit.images = [];
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
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

  onFileSelected(event: any) {
    if (event.target.files) {
      const file = event.target.files[0];
      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        ),
      };
      this.produit.images.push(fileHandle);
    }
  }

  removeImages(i: number) {
    this.produit.images.splice(i, 1);
  }

  fileDropped(fileHandle: FileHandle) {
    this.produit.images.push(fileHandle);
  }
}