import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CommentsService } from "../../servicios/comments.service";



@Component({
  selector: 'app-commments',
  templateUrl: './commments.component.html',
  styleUrls: ['./commments.component.css']
})
export class CommmentsComponent implements OnInit {

  @Input() id:string;
  @Output() fechaEnviada = new EventEmitter<Date>();

 
  comentarios:any=[];
  cons:string;
  
  myDate = new Date();
  
  constructor(private activateRouter:ActivatedRoute,
              public _commentsService:CommentsService
    ) {
      
 

     }

  ngOnInit() {
    
    this.activateRouter.params.subscribe(
      params => {
        console.log(params['id']);
        this.cons = params['id'] ;
        this._commentsService.getComment(this.cons).subscribe(data =>{
          console.log(data );
          this.comentarios = data;
          
      });
        console.log(this.comentarios);
  
      })
  }

  getComment(id){
    
  }

  EnviarFecha(){
    this.myDate;
    this.fechaEnviada.emit(this.myDate);
    console.log(this.myDate);
  }

}
