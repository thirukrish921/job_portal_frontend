import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {JobService} from '../../../../services/job/job.service';
@Component({
  selector: 'app-seeker-jobs',
  templateUrl: './seeker-jobs.component.html',
  styleUrls: ['./seeker-jobs.component.css']
})
export class SeekerJobsComponent implements OnInit {
  @ViewChild('processStatus', {static: true}) pStatus: ElementRef;

  @ViewChild('modalForm', {static: true}) mForm: ElementRef;
  @ViewChild('modelProfileId', {static: true}) mProfileId: ElementRef;
  @ViewChild('modalUname', {static: true}) mUname: ElementRef;
  @ViewChild('modalEmail', {static: true}) mEmail: ElementRef;
  @ViewChild('modalResponse', {static: true}) mResp: ElementRef;
  @ViewChild('modalSubmit', {static: true}) mSub: ElementRef;
  @ViewChild('modalReset', {static: true}) mReset: ElementRef;
  @ViewChild('modalClose', {static: true}) mClose: ElementRef;

  dataArray = [];

  constructor(public jobServices: JobService) { 


    this.jobServices.readAll().subscribe((res: any) => {
      if(res.status === 404) {
        this.pStatus.nativeElement.innerText = "No Jobs Found";
      } else if(res.status === 200) {
        this.pStatus.nativeElement.innerText = "";

        this.dataArray = res.jobs;
      
      } else {
        this.pStatus.nativeElement.innerText = "Oops! Problem Occured, Please Try Again Later.";
      }
      // console.log(res);
    },  (error) => {
      this.pStatus.nativeElement.innerText = "Oops! Problem Occured, Please Try Again Later.";
      // console.log(error);
    } 
    );

  }


  ngOnInit(): void {
   
  }

  
  editdata(data)  {
   // console.log("here");
    this.mProfileId.nativeElement.value = data._id;
    this.mUname.nativeElement.value = data.username;
    this.mEmail.nativeElement.value = data.email;

  }

  deletedata(data) {
    if(confirm("Are you sure you want to Delete?")){
      let datae = {
        profileId: data._id
      }

      this.jobServices.delete(datae).subscribe(
        (res: any) => {
          if(res.status === 200) {
            location.href = "/owner-home";
          } else {
            alert("Not Removed");
          }
          // console.log(res);

        }, (error) => {
          alert("Oops! Problem Occured, Please Try Again Later.");
          // console.log(error)
        }
      );
    }
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
