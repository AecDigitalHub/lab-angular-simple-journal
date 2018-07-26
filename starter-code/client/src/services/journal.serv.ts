import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment'

@Injectable()
export class JournalService {
  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${environment.BASE_URL}/api/journal-entries`)
      .map((res) => {
        return res.json()
      });
  }

  get(id) {
    return this.http.get(`${environment.BASE_URL}/api/journal-entries/${id}`)
    .map((res) =>
         res.json());
    }
  }
      
  
  // .map((res) => res.value.id);
  

  

  // edit(phone) {
  //   return this.http.put(`${environment.BASE_URL}/api/phones/${phone.id}`, phone)
  //     .map((res) => res.json());
  // }

  // remove(id) {
  //   return this.http.delete(`${environment.BASE_URL}/api/phones/${id}`)
  //     .map((res) => res.json());
  // }
