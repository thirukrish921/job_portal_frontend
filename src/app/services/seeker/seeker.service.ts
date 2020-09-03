import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SeekerService {

 

  constructor(public httpClient: HttpClient) { }

  create(data) {
    let url = "https://job-portal-921.herokuapp.com/seeker/create";
    return this.httpClient.post(url, data);
  }
  read(data) {
    let url = "https://job-portal-921.herokuapp.com/seeker/read";
    return this.httpClient.post(url, data);
  }

  readAll() {
    let url = "https://job-portal-921.herokuapp.com/seeker/read";
    return this.httpClient.get(url);
  }
  update(data) {
    let url = "https://job-portal-921.herokuapp.com/seeker/update";
    return this.httpClient.post(url, data);
  }

  delete(data) {
    let url = "https://job-portal-921.herokuapp.com/seeker/delete";
    return this.httpClient.post(url, data);
  }

}
