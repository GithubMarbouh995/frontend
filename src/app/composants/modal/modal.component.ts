import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ReservationService } from 'src/app/services/reservation.service';
import { CreneauEssayageService } from 'src/app/services/creneauessayage.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  model ?: NgbDateStruct;
  date ?: Date;
  time ?: String;
  dateTime ?: Date;
  disabledDates: {year: number, month: number, day: number}[];


  constructor(private calendar: NgbCalendar, private ReservationService: ReservationService, private creneauEssayage : CreneauEssayageService ,private route: ActivatedRoute) {
    this.disabledDates = [
      {year: 2023, month: 12, day: 26},
      {year: 2023, month: 11, day: 12},
      {year: 2023, month: 11, day: 13}
    ];
  }

  isDisabled(date: NgbDateStruct) {
    return this.disabledDates.find(x => x.year === date.year && x.month === date.month && x.day === date.day) ? true : false;
  }

  concatenateDateTime() {
    if (this.date && this.time) {
      const timeParts = this.time.split(':');
      this.dateTime = new Date(this.date);
      this.dateTime.setHours(Number(timeParts[0]));
      this.dateTime.setMinutes(Number(timeParts[1]));
    }
  }

  confirm() {
    const creneauEssayage = {
      dateDebut: this.date,
      dateFin: this.time
    };
   

    this.creneauEssayage.save(creneauEssayage).subscribe(data => {
      console.log(data);
    });

    const reservation = {
      dateReservation: this.dateTime,
      idArticle: Number(this.route.snapshot.paramMap.get('id'))
    };

    
    
  }
}
