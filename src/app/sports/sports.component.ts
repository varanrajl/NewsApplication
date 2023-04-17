import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {


  constructor(private service:NewsapiservicesService){

  }
  sportsnewsdisplay:any=[];

  ngOnInit(): void {
  this.service.sportsnews().subscribe((result)=>{
    this.sportsnewsdisplay=result.articles;
  })
  }
}
