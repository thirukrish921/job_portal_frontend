import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seeker-auth',
  templateUrl: './seeker-auth.component.html',
  styleUrls: ['./seeker-auth.component.css']
})
export class SeekerAuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  seek(){
    location.href="/seeker-auth";
  }
  owner(){
  
    location.href="/owner-auth";
  }
  
}
