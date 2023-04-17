import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private service:NewsapiservicesService){

  }
  businessnewsdisplay:any=[];

  ngOnInit(): void {
  this.service.businesnews().subscribe((result)=>{
    this.businessnewsdisplay=result.articles;
  })
  }
}
