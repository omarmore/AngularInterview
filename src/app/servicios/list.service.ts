import { Injectable, OnInit, ɵConsole } from '@angular/core';
import { HttpClient  } from "@angular/common/http";



@Injectable({
  providedIn: "root"
})
export class ListService implements OnInit {

    info:any = [];
    cargada:boolean = false;

 constructor(public http:HttpClient){
     
    this.http.get("https://jsonplaceholder.typicode.com/todos/")
    .subscribe(data =>{
      console.log(data );
      this.cargada = true;
      this.info = data;
      
    })
  }

 

  ngOnInit(){

  }

  getDetail(idx:number){
    return this.info[idx];
    console.log('Aqui estoy')
    //console.log(this.info[idx]);
  }


}

