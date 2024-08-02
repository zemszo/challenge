import { Component } from '@angular/core';
import { AbsenceService } from '../absence.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { filter, toArray } from 'rxjs';

@Component({
  selector: 'app-absence',
  standalone: true,
  imports: [FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe],
  templateUrl: './absence.component.html',
  styleUrl: './absence.component.css'
})
export class AbsenceComponent {
  absences: any;

  constructor(private absenceService: AbsenceService) {
  }

  getAbsences() {
    this.absences = this.absenceService.getAbsences().pipe()
      .subscribe((absences) => {
        console.log(absences);
        this.absences = absences.filter((absence: any) => absence.Timestamp = new Date("2022-03-17"));
      });
  }
}
