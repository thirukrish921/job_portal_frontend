import { Component, OnInit ,ElementRef, ViewChild, Inject } from '@angular/core';
import { JobService } from '../../../../services/job/job.service';
@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
  @ViewChild('jobtitle', {static: true}) jobtitle: ElementRef;
  @ViewChild('jobtype', {static: true}) jobtype: ElementRef;
  @ViewChild('jobdesc', {static: true}) jobdesc: ElementRef;
  @ViewChild('experience', {static: true}) experience: ElementRef;
  @ViewChild('salary',{static:true}) salary:ElementRef;
  @ViewChild('location', {static: true}) location: ElementRef;
  @ViewChild('industry', {static: true}) industry: ElementRef;
  @ViewChild('function', {static: true}) func: ElementRef;
  @ViewChild('applylink', {static: true}) applylink: ElementRef;
@ViewChild('status',{static:true}) status:ElementRef;
  @ViewChild('registerResponse', {static: true}) regResp: ElementRef;
  @ViewChild('registerSubmit', {static: true}) regSubmit: ElementRef;
  @ViewChild('registerForm', {static: true}) regForm: ElementRef;

  constructor(public profileservice : JobService) {
   }

  ngOnInit(): void {

    this.regForm.nativeElement.addEventListener("submit", (event) => {

      event.preventDefault();

      this.regResp.nativeElement.innerText = "Processing...";
      
      let data = {
        jobtitle: this.jobtitle.nativeElement.value,
        jobtype : this.jobtype.nativeElement.value,
        jobdesc: this.jobdesc.nativeElement.value,
        experience:this.experience.nativeElement.value,
        salary:this.salary.nativeElement.value,
        email:sessionStorage.getItem('email'),
        location:this.location.nativeElement.value,
        industry:this.industry.nativeElement.value,
        func: this.func.nativeElement.value,
        applylink:this.applylink.nativeElement.value,
        status:this.status.nativeElement.value
        
   
      };
      
    this.profileservice.create(data).subscribe(
        (res: any) => {
          if(res.status === 200) {
           

         

            this.regResp.nativeElement.innerText = "Added Succesfully";
            

            setTimeout(() => {
              this.regResp.nativeElement.innerText = "";
              this.jobtitle.nativeElement.value="";
            }, 1000);

          } else if(res.status === 201) {
            this.regResp.nativeElement.innerText = " Already Registered.";
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


