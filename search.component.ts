import { Component, ElementRef, Input, ViewChild } from '@angular/core'
import { SearchService } from './search.service';
import { stringify } from 'querystring';

@Component({
    selector: 'search',
    template: `
    <input value="">
    <ul>
        <li *ngFor="let job of data"> 
            {{job.name}}
        </li>
    </ul>
    `

})

export class SearchComponent {
    text = ''

    data: Array<{name: string, salary: string, companyName: string, adress: string, description: string}>;
    constructor(){
        let service = new SearchService();
        this.data = service.filterJobs(this.text);
    }
}