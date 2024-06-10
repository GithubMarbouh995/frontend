import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-devenir-vendeur',
  templateUrl: './devenir-vendeur.component.html',
  styleUrls: ['./devenir-vendeur.component.css']
})
export class DevenirVendeurComponent implements OnInit {
  showNewBoutiqueForm: boolean = false;

  private cancelEventSubscription: Subscription;
  constructor(private sharedService: SharedServiceService) {
    this.cancelEventSubscription = this.sharedService.cancelEvent$.subscribe(() => {
      this.showNewBoutiqueForm = false;
    });
  }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.cancelEventSubscription.unsubscribe();
  }

}
