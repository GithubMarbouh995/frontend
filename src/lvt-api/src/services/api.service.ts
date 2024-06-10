/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Catalogue } from '../models/catalogue';
import { CreneauDisponibilite } from '../models/creneau-disponibilite';
import { Produit } from '../models/produit';
import { AuthenticationResponse } from '../models/authentication-response';
import { AuthenticationRequest } from '../models/authentication-request';
import { RegisterRequest } from '../models/register-request';
import { CreneauEssayage } from '../models/creneau-essayage';
import { Reservation } from '../models/reservation';
@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly ajouterCataloguePath = '/ajouterCatalogue';
  static readonly ajouterCreneauPath = '/ajouterCreneau';
  static readonly ajouterCreneauProduitPath = '/ajouterCreneauProduit/{id_produit}/{id_creneau}';
  static readonly ajouterProduitPath = '/ajouterProduit';
  static readonly ajouterProduitToCataloguePath = '/ajouterProduitToCatalogue{id_catalogue}/{id_produit}';
  static readonly authenticatePath = '/api/v1/auth/authenticate';
  static readonly refreshTokenPath = '/api/v1/auth/refresh-token';
  static readonly registerPath = '/api/v1/auth/register';
  static readonly addCreneauPath = '/api/v1/creneau-essayage/add';
  static readonly deleteCreneauPath = '/api/v1/creneau-essayage/delete/{id}';
  static readonly findCreneauPath = '/api/v1/creneau-essayage/find/{id}';
  static readonly findAllCreneauPath = '/api/v1/creneau-essayage/findAll';
  static readonly updateCreneauPath = '/api/v1/creneau-essayage/update';
  static readonly addReservationPath = '/api/v1/reservation/add';
  static readonly getAllReservationsPath = '/api/v1/reservation/all-reservations';
  static readonly deleteAllReservationsPath = '/api/v1/reservation/delete-all';
  static readonly deleteReservationPath = '/api/v1/reservation/delete/{idReservation}';
  static readonly rejectReservationPath = '/api/v1/reservation/reject/{idUtilisateur}/{idArticle}';
  static readonly updateReservationPath = '/api/v1/reservation/update';
  static readonly validateAllReservationsPath = '/api/v1/reservation/validate-all';
  static readonly validateReservationPath = '/api/v1/reservation/validate/{idUtilisateur}/{idArticle}';
  static readonly withdrawAllReservationsPath = '/api/v1/reservation/withdraw-all/{id}';
  static readonly withdrawReservationPath = '/api/v1/reservation/withdraw/{idUtilisateur}/{idArticle}';
  static readonly getAllCataloguesPath = '/getAllCatalogues';
  static readonly getAllProduitsPath = '/getAllProduits';
  static readonly getAllProduitsFromCataloguePath = '/getAllProduitsFromCatalogue{id_catalogue}';
  static readonly getCreneauxPourProduitPath = '/getCreneauxPourProduit/{id_produit}';
  static readonly getProduitsDispoPourCreneauPath = '/getProduitsDispoPourCreneau/{id_creneau}';
  static readonly supprimerProduitPath = '/supprimerProduit/{ProduitId}';
  static readonly updateProduitPath = '/updateProduit/{ProduitId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  ajouterCatalogueResponse(body?: Catalogue): __Observable<__StrictHttpResponse<Catalogue>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/ajouterCatalogue`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Catalogue>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  ajouterCatalogue(body?: Catalogue): __Observable<Catalogue> {
    return this.ajouterCatalogueResponse(body).pipe(
      __map(_r => _r.body as Catalogue)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  ajouterCreneauResponse(body?: CreneauDisponibilite): __Observable<__StrictHttpResponse<CreneauDisponibilite>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/ajouterCreneau`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CreneauDisponibilite>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  ajouterCreneau(body?: CreneauDisponibilite): __Observable<CreneauDisponibilite> {
    return this.ajouterCreneauResponse(body).pipe(
      __map(_r => _r.body as CreneauDisponibilite)
    );
  }

  /**
   * @param params The `ApiService.AjouterCreneauProduitParams` containing the following parameters:
   *
   * - `id_produit`:
   *
   * - `id_creneau`:
   *
   * @return successful operation
   */
  ajouterCreneauProduitResponse(params: ApiService.AjouterCreneauProduitParams): __Observable<__StrictHttpResponse<CreneauDisponibilite>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/ajouterCreneauProduit/${encodeURIComponent(params.idProduit)}/${encodeURIComponent(params.idCreneau)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CreneauDisponibilite>;
      })
    );
  }
  /**
   * @param params The `ApiService.AjouterCreneauProduitParams` containing the following parameters:
   *
   * - `id_produit`:
   *
   * - `id_creneau`:
   *
   * @return successful operation
   */
  ajouterCreneauProduit(params: ApiService.AjouterCreneauProduitParams): __Observable<CreneauDisponibilite> {
    return this.ajouterCreneauProduitResponse(params).pipe(
      __map(_r => _r.body as CreneauDisponibilite)
    );
  }

  /**
   * @param params The `ApiService.AjouterProduitParams` containing the following parameters:
   *
   * - `produit`:
   *
   * - `image_produit`:
   *
   * @return successful operation
   */
  ajouterProduitResponse(params: ApiService.AjouterProduitParams): __Observable<__StrictHttpResponse<Produit>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.produit != null) { __formData.append('produit', JSON.stringify(params.produit));}
    (params.imageProduit || []).forEach(val => {if (val != null) __formData.append('image_produit', val as string | Blob)});
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/ajouterProduit`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Produit>;
      })
    );
  }
  /**
   * @param params The `ApiService.AjouterProduitParams` containing the following parameters:
   *
   * - `produit`:
   *
   * - `image_produit`:
   *
   * @return successful operation
   */
  ajouterProduit(params: ApiService.AjouterProduitParams): __Observable<Produit> {
    return this.ajouterProduitResponse(params).pipe(
      __map(_r => _r.body as Produit)
    );
  }

  /**
   * @param params The `ApiService.AjouterProduitToCatalogueParams` containing the following parameters:
   *
   * - `id_produit`:
   *
   * - `id_catalogue`:
   */
  ajouterProduitToCatalogueResponse(params: ApiService.AjouterProduitToCatalogueParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/ajouterProduitToCatalogue${encodeURIComponent(params.idCatalogue)}/${encodeURIComponent(params.idProduit)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `ApiService.AjouterProduitToCatalogueParams` containing the following parameters:
   *
   * - `id_produit`:
   *
   * - `id_catalogue`:
   */
  ajouterProduitToCatalogue(params: ApiService.AjouterProduitToCatalogueParams): __Observable<null> {
    return this.ajouterProduitToCatalogueResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  authenticateResponse(body?: AuthenticationRequest): __Observable<__StrictHttpResponse<AuthenticationResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/auth/authenticate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthenticationResponse>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  authenticate(body?: AuthenticationRequest): __Observable<AuthenticationResponse> {
    return this.authenticateResponse(body).pipe(
      __map(_r => _r.body as AuthenticationResponse)
    );
  }
  refreshTokenResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/auth/refresh-token`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  refreshToken(): __Observable<null> {
    return this.refreshTokenResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  registerResponse(body?: RegisterRequest): __Observable<__StrictHttpResponse<AuthenticationResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/auth/register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthenticationResponse>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  register(body?: RegisterRequest): __Observable<AuthenticationResponse> {
    return this.registerResponse(body).pipe(
      __map(_r => _r.body as AuthenticationResponse)
    );
  }

  /**
   * @param body undefined
   */
  addCreneauResponse(body?: CreneauEssayage): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/creneau-essayage/add`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param body undefined
   */
  addCreneau(body?: CreneauEssayage): __Observable<null> {
    return this.addCreneauResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  deleteCreneauResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/creneau-essayage/delete/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  deleteCreneau(id: number): __Observable<null> {
    return this.deleteCreneauResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findCreneauResponse(id: number): __Observable<__StrictHttpResponse<CreneauEssayage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/creneau-essayage/find/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CreneauEssayage>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findCreneau(id: number): __Observable<CreneauEssayage> {
    return this.findCreneauResponse(id).pipe(
      __map(_r => _r.body as CreneauEssayage)
    );
  }

  /**
   * @return successful operation
   */
  findAllCreneauResponse(): __Observable<__StrictHttpResponse<Array<CreneauEssayage>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/creneau-essayage/findAll`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CreneauEssayage>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllCreneau(): __Observable<Array<CreneauEssayage>> {
    return this.findAllCreneauResponse().pipe(
      __map(_r => _r.body as Array<CreneauEssayage>)
    );
  }

  /**
   * @param body undefined
   */
  updateCreneauResponse(body?: CreneauEssayage): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/v1/creneau-essayage/update`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param body undefined
   */
  updateCreneau(body?: CreneauEssayage): __Observable<null> {
    return this.updateCreneauResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body undefined
   */
  addReservationResponse(body?: Reservation): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/reservation/add`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param body undefined
   */
  addReservation(body?: Reservation): __Observable<null> {
    return this.addReservationResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return successful operation
   */
  getAllReservationsResponse(): __Observable<__StrictHttpResponse<Array<Reservation>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/reservation/all-reservations`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Reservation>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getAllReservations(): __Observable<Array<Reservation>> {
    return this.getAllReservationsResponse().pipe(
      __map(_r => _r.body as Array<Reservation>)
    );
  }
  deleteAllReservationsResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/reservation/delete-all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  deleteAllReservations(): __Observable<null> {
    return this.deleteAllReservationsResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idReservation undefined
   */
  deleteReservationResponse(idReservation: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/reservation/delete/${encodeURIComponent(idReservation)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param idReservation undefined
   */
  deleteReservation(idReservation: number): __Observable<null> {
    return this.deleteReservationResponse(idReservation).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ApiService.RejectReservationParams` containing the following parameters:
   *
   * - `idUtilisateur`:
   *
   * - `idArticle`:
   */
  rejectReservationResponse(params: ApiService.RejectReservationParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/v1/reservation/reject/${encodeURIComponent(params.idUtilisateur)}/${encodeURIComponent(params.idArticle)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `ApiService.RejectReservationParams` containing the following parameters:
   *
   * - `idUtilisateur`:
   *
   * - `idArticle`:
   */
  rejectReservation(params: ApiService.RejectReservationParams): __Observable<null> {
    return this.rejectReservationResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body undefined
   */
  updateReservationResponse(body?: Reservation): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/v1/reservation/update`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param body undefined
   */
  updateReservation(body?: Reservation): __Observable<null> {
    return this.updateReservationResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }
  validateAllReservationsResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/v1/reservation/validate-all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  validateAllReservations(): __Observable<null> {
    return this.validateAllReservationsResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ApiService.ValidateReservationParams` containing the following parameters:
   *
   * - `idUtilisateur`:
   *
   * - `idArticle`:
   */
  validateReservationResponse(params: ApiService.ValidateReservationParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/v1/reservation/validate/${encodeURIComponent(params.idUtilisateur)}/${encodeURIComponent(params.idArticle)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `ApiService.ValidateReservationParams` containing the following parameters:
   *
   * - `idUtilisateur`:
   *
   * - `idArticle`:
   */
  validateReservation(params: ApiService.ValidateReservationParams): __Observable<null> {
    return this.validateReservationResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  withdrawAllReservationsResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/v1/reservation/withdraw-all/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  withdrawAllReservations(id: number): __Observable<null> {
    return this.withdrawAllReservationsResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ApiService.WithdrawReservationParams` containing the following parameters:
   *
   * - `idUtilisateur`:
   *
   * - `idArticle`:
   */
  withdrawReservationResponse(params: ApiService.WithdrawReservationParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/v1/reservation/withdraw/${encodeURIComponent(params.idUtilisateur)}/${encodeURIComponent(params.idArticle)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `ApiService.WithdrawReservationParams` containing the following parameters:
   *
   * - `idUtilisateur`:
   *
   * - `idArticle`:
   */
  withdrawReservation(params: ApiService.WithdrawReservationParams): __Observable<null> {
    return this.withdrawReservationResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return successful operation
   */
  getAllCataloguesResponse(): __Observable<__StrictHttpResponse<Catalogue>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/getAllCatalogues`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Catalogue>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getAllCatalogues(): __Observable<Catalogue> {
    return this.getAllCataloguesResponse().pipe(
      __map(_r => _r.body as Catalogue)
    );
  }

  /**
   * @return successful operation
   */
  getAllProduitsResponse(): __Observable<__StrictHttpResponse<Array<Produit>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/getAllProduits`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Produit>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getAllProduits(): __Observable<Array<Produit>> {
    return this.getAllProduitsResponse().pipe(
      __map(_r => _r.body as Array<Produit>)
    );
  }

  /**
   * @param id_catalogue undefined
   * @return successful operation
   */
  getAllProduitsFromCatalogueResponse(idCatalogue: number): __Observable<__StrictHttpResponse<Array<{}>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/getAllProduitsFromCatalogue${encodeURIComponent(idCatalogue)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<{}>>;
      })
    );
  }
  /**
   * @param id_catalogue undefined
   * @return successful operation
   */
  getAllProduitsFromCatalogue(idCatalogue: number): __Observable<Array<{}>> {
    return this.getAllProduitsFromCatalogueResponse(idCatalogue).pipe(
      __map(_r => _r.body as Array<{}>)
    );
  }

  /**
   * @param id_produit undefined
   * @return successful operation
   */
  getCreneauxPourProduitResponse(idProduit: number): __Observable<__StrictHttpResponse<Array<CreneauDisponibilite>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/getCreneauxPourProduit/${encodeURIComponent(idProduit)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CreneauDisponibilite>>;
      })
    );
  }
  /**
   * @param id_produit undefined
   * @return successful operation
   */
  getCreneauxPourProduit(idProduit: number): __Observable<Array<CreneauDisponibilite>> {
    return this.getCreneauxPourProduitResponse(idProduit).pipe(
      __map(_r => _r.body as Array<CreneauDisponibilite>)
    );
  }

  /**
   * @param id_creneau undefined
   * @return successful operation
   */
  getProduitsDispoPourCreneauResponse(idCreneau: number): __Observable<__StrictHttpResponse<Array<Produit>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/getProduitsDispoPourCreneau/${encodeURIComponent(idCreneau)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Produit>>;
      })
    );
  }
  /**
   * @param id_creneau undefined
   * @return successful operation
   */
  getProduitsDispoPourCreneau(idCreneau: number): __Observable<Array<Produit>> {
    return this.getProduitsDispoPourCreneauResponse(idCreneau).pipe(
      __map(_r => _r.body as Array<Produit>)
    );
  }

  /**
   * @param ProduitId undefined
   */
  supprimerProduitResponse(ProduitId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/supprimerProduit/${encodeURIComponent(ProduitId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param ProduitId undefined
   */
  supprimerProduit(ProduitId: number): __Observable<null> {
    return this.supprimerProduitResponse(ProduitId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ApiService.UpdateProduitParams` containing the following parameters:
   *
   * - `ProduitId`:
   *
   * - `body`:
   *
   * @return successful operation
   */
  updateProduitResponse(params: ApiService.UpdateProduitParams): __Observable<__StrictHttpResponse<Produit>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/updateProduit/${encodeURIComponent(params.ProduitId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Produit>;
      })
    );
  }
  /**
   * @param params The `ApiService.UpdateProduitParams` containing the following parameters:
   *
   * - `ProduitId`:
   *
   * - `body`:
   *
   * @return successful operation
   */
  updateProduit(params: ApiService.UpdateProduitParams): __Observable<Produit> {
    return this.updateProduitResponse(params).pipe(
      __map(_r => _r.body as Produit)
    );
  }
}

module ApiService {

  /**
   * Parameters for ajouterCreneauProduit
   */
  export interface AjouterCreneauProduitParams {
    idProduit: number;
    idCreneau: number;
  }

  /**
   * Parameters for ajouterProduit
   */
  export interface AjouterProduitParams {
    produit: any;
    imageProduit: Array<Blob>;
  }

  /**
   * Parameters for ajouterProduitToCatalogue
   */
  export interface AjouterProduitToCatalogueParams {
    idProduit: number;
    idCatalogue: number;
  }

  /**
   * Parameters for rejectReservation
   */
  export interface RejectReservationParams {
    idUtilisateur: number;
    idArticle: number;
  }

  /**
   * Parameters for validateReservation
   */
  export interface ValidateReservationParams {
    idUtilisateur: number;
    idArticle: number;
  }

  /**
   * Parameters for withdrawReservation
   */
  export interface WithdrawReservationParams {
    idUtilisateur: number;
    idArticle: number;
  }

  /**
   * Parameters for updateProduit
   */
  export interface UpdateProduitParams {
    ProduitId: number;
    body?: Produit;
  }
}

export { ApiService }
