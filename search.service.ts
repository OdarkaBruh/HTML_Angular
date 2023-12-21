import { Component } from '@angular/core'
import jobsData from '../assets/jobs.json';

export class SearchService {
    data: Array<{name: string, salary: string, companyName: string, adress: string, description: string}> = jobsData

    filterJobs(text: string){
        if (text == "") {
            return this.data;
          }
        else {
            return this.data.filter(item => item?.name.toLowerCase().includes(text.toLowerCase()))
        }
    }
}