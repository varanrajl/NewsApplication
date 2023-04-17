import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit{

  constructor(private service:NewsapiservicesService){

  }

  technewsdisplay:any=[];
  ngOnInit(): void {
 this.service.technews().subscribe((result)=>{
  this.technewsdisplay=result.articles;
 });
  }
}
