import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

   constructor(private service:NewsapiservicesService){

   }

   topheadingdisplay:any=[];
 ngOnInit() {
  this.service.topheading().subscribe((result)=>{
console.log(result);
this.topheadingdisplay=result.articles;
  })
 }
}
