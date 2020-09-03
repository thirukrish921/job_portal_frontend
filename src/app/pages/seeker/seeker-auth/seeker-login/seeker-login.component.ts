import { Component, OnInit,ElementRef, ViewChild, } from '@angular/core';
import { SeekerService } from '../../../../services/seeker/seeker.service';
@Component({
  selector: 'app-seeker-login',
  templateUrl: './seeker-login.component.html',
  styleUrls: ['./seeker-login.component.css']
})
export class SeekerLoginComponent implements OnInit {
  @ViewChild('loginEmailId', {static: true}) logEmail: ElementRef;
  @ViewChild('loginPassword', {static: true}) logPass: ElementRef;
  @ViewChild('loginForm', {static: true}) logForm: ElementRef;
  @ViewChild('loginResponse', {static: true}) logResp: ElementRef;
  constructor(public profileServices: SeekerService) { }

  ngOnInit(): void {
    this.logForm.nativeElement.addEventListener("submit", (event) => {

      event.preventDefault();

      this.logResp.nativeElement.innerText = "Processing...";

      let data = {
        emailId: this.logEmail.nativeElement.value,
        password: this.logPass.nativeElement.value,
      };

      this.profileServices.read(data).subscribe(
        (res: any) => {
          if(res.status === 200) {
            

              sessionStorage.setItem('token', res.profile.token);
              sessionStorage.setItem('name', res.profile.profiles.username);
              sessionStorage.setItem('email', res.profile.profiles.emailId);
              console.log(res.profile.token);
              this.logResp.nativeElement.innerText = "Login Succesfull";
              
            setTimeout(() => {
              this.logResp.nativeElement.innerText = "";
              location.href = "/seeker-home";
            }, 1000);
          } else if(res.status === 404) {
            this.logResp.nativeElement.innerText = "Invalid E-Mail ID and Password.";
          } else {
            this.logResp.nativeElement.innerText = "Oops! Problem Occured, Please Try Again Later.";
          }
         
        }, (error) => {
            this.logResp.nativeElement.innerText = "Oops! Problem Occured, Please Try Again Later.";
            // console.log(error);
          }
          );
    
        });
    
      }
    
    }
    