import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seeker-home',
  templateUrl: './seeker-home.component.html',
  styleUrls: ['./seeker-home.component.css']
})
export class SeekerHomeComponent implements OnInit {

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

  location.href="/seeker-home";
}
}
