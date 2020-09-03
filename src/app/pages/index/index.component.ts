import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

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
