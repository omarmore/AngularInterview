import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ListService } from "../../servicios/list.service";
//import { CommentsService } from "../../servicios/comments.service";


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {

  detalles:any=[];
  cons:number;
  fechaCommen:any;

  constructor( private activateRouter:ActivatedRoute,
               public _listaService:ListService
               //public _commentsService:CommentsService
  ) { 

    this.activateRouter.params.subscribe(
    params => {
      console.log(params['id']);
      this.cons = params['id'] -1 ;
      this.detalles= _listaService.getDetail(this.cons);
      console.log(this.detalles);

    })
}





}
