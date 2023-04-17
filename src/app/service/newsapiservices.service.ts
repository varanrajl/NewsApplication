import { Injectable, OnInit } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService implements OnInit {

  constructor(private http:HttpClient) { }
  newsapiurl="https://newsapi.org/v2/top-headlines?country=in&apiKey=5f892ea5459c4446af5f7ca3ef3e0739";
  technewsapi="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=5f892ea5459c4446af5f7ca3ef3e0739";
  businesnewsapi="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5f892ea5459c4446af5f7ca3ef3e0739";
  sportsnewsapi="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=5f892ea5459c4446af5f7ca3ef3e0739";
  topheading():Observable<any>
    {
      return this.http.get(this.newsapiurl);
    }
   technews():Observable<any>{
    return this.http.get(this.technewsapi);
   }
   businesnews():Observable<any>{
     return this.http.get(this.businesnewsapi);
   }
   sportsnews():Observable<any>{
return this.http.get(this.sportsnewsapi);
   }
  ngOnInit(): void {


  }
}
