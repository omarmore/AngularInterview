import { Injectable, OnInit, ɵConsole } from '@angular/core';
import { HttpClient  } from "@angular/common/http";



@Injectable({
  providedIn: "root"
})
export class CommentsService implements OnInit {

    comments:any = [];
    cargada:boolean = false;
    
    url: string = "https://jsonplaceholder.typicode.com/comments?postId=";

 constructor(public http:HttpClient){
     
/*    this.http.get("https://jsonplaceholder.typicode.com/comments?postId=1")
    .subscribe(data =>{
      console.log(data );
      this.cargada = true;
      this.comments = data;
      
    })*/
  }


  ngOnInit(){

  }

  getComment(id:string){
    return this.http.get(this.url + id);
  }


  getComments(idx:number){
    return this.comments[idx];
  }


}

