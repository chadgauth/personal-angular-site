import { Component, OnInit, Input } from '@angular/core';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  @Input() experience: Experience;

  constructor() { }

  ngOnInit() {
    this.experience = {
      companyName: 'Progressive Insurance',
      positions: [{ name: 'test', startDate: new Date(), endDate: new Date(), highlights: ['test', 'other test'] }],
    };
  }

}
