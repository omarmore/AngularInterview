import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


//Rutas
import { APP_ROUTING } from "./app.router";

//Servicios
import { ListService } from "./servicios/list.service";

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostErrorComponent } from './components/post-error/post-error.component';
import { HomeComponent } from './components/home/home.component';
import { CommmentsComponent } from './components/commments/commments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    PostDetailComponent,
    PostErrorComponent,
    HomeComponent,
    CommmentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
