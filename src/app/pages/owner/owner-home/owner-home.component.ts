import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-home',
  templateUrl: './owner-home.component.html',
  styleUrls: ['./owner-home.component.css']
})
export class OwnerHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  signOut() {
    sessionStorage.clear();
    location.href = "/authentication";
  

}
addjob(){

  location.href="/add-job";
}
homeloc(){

  location.href="/owner-home";
}
}
