import { Component, OnInit,ElementRef, ViewChild, Inject} from '@angular/core';
import { SeekerService } from '../../../../services/seeker/seeker.service';
@Component({
  selector: 'app-seeker-reg',
  templateUrl: './seeker-reg.component.html',
  styleUrls: ['./seeker-reg.component.css']
})
export class SeekerRegComponent implements OnInit {

  @ViewChild('username', {static: true}) uname: ElementRef;
  @ViewChild('email', {static: true}) eId: ElementRef;
  @ViewChild('phone', {static: true}) mobile: ElementRef;
  @ViewChild('password', {static: true}) pass: ElementRef;
  @ViewChild('confirmpassword', {static: true}) cPass: ElementRef;
  @ViewChild('registerResponse', {static: true}) regResp: ElementRef;
  @ViewChild('registerSubmit', {static: true}) regSubmit: ElementRef;
  @ViewChild('registerForm', {static: true}) regForm: ElementRef;

  constructor(public profileservice : SeekerService) {
   }

  ngOnInit(): void {

    this.regForm.nativeElement.addEventListener("submit", (event) => {

      event.preventDefault();

      this.regResp.nativeElement.innerText = "Processing...";
      
      let data = {
        username: this.uname.nativeElement.value,
        emailId: this.eId.nativeElement.value,
       phone :this.mobile.nativeElement.value,
        password: this.pass.nativeElement.value,
        
   
      };
      
    this.profileservice.create(data).subscribe(
        (res: any) => {
          if(res.status === 200) {
           

         

            this.regResp.nativeElement.innerText = "Registered Succesfully";
            

            setTimeout(() => {
              this.regResp.nativeElement.innerText = "";
              
          
            }, 1000);

          } else if(res.status === 201) {
            this.regResp.nativeElement.innerText = "E-Mail is Already Registered.";
          } else {
            this.regResp.nativeElement.innerText = "Error! Please Try Again Later.";
          }
          // console.log(res);
  
        }, (error) => {
          this.regResp.nativeElement.innerText = "Oops! Problem Occured, Please Try Again Later.";
           console.log(error);
        }
      );

    });

  }

  checkPasswordMatch() {
    let password = this.pass.nativeElement.value;
    let confirmPassword = this.cPass.nativeElement.value;

    if(password === confirmPassword) {
      this.regResp.nativeElement.innerText = "";
      return 1;
    } else {
      this.regResp.nativeElement.innerText = "Password Did Not Match";
      this.regSubmit.nativeElement.setAttribute("disabled", true);
    }
  }

 

  passwordHandler() {
    let passRes = this.checkPasswordMatch();

    

    
        this.regSubmit.nativeElement.removeAttribute("disabled");
      
    }
  }


