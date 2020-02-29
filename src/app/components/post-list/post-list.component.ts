import { Component, OnInit } from '@angular/core';
import { ListService } from "../../servicios/list.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(public _listaService:ListService, private router:Router) { }

  ngOnInit() {
  }



}
