import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OwnerServiceService {

  constructor(public httpClient: HttpClient) { 

  }
  create(data) {
    let url = "https://job-portal-921.herokuapp.com/owner/create";
    return this.httpClient.post(url, data);
  }
  read(data) {
    let url = "https://job-portal-921.herokuapp.com/owner/read";
    return this.httpClient.post(url, data);
  }

  readAll() {
    let url = "https://job-portal-921.herokuapp.com/owner/read";
    return this.httpClient.get(url);
  }


  delete(data) {
    let url = "https://job-portal-921.herokuapp.com/owner/delete";
    return this.httpClient.post(url, data);
  }
}
