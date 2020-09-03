import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-auth',
  templateUrl: './owner-auth.component.html',
  styleUrls: ['./owner-auth.component.css']
})
export class OwnerAuthComponent implements OnInit {

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
