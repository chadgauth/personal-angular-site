import { Component } from '@angular/core'

@Component ({
    selector: 'app-root',
    template: `
        <h1>{{name}} site</h1>
        <h2>{{subHeader}}</h2>
        <ul>
            <li *ngFor="let speaker of speakers">{{speaker}}</li>
        </ul>
    `
})

export class AppComponent {
    name = 'Chad\'s 2019';
    subHeader = 'mother mary comforts me';
    speakers = ['Chad Gauthier', 'Manuel Simmons'];
}