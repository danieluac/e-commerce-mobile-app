import { ServicePageService } from './../service-page.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IonSlides } from '@ionic/angular';
import { environment as env } from './../../environments/environment';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 2000,
  };
  produtos : any = [];
  moreProdutos : any = [];
  page = 1;
  limitPage = 2;

@ViewChild("produtoSlide",{static: true}) produtoSlides : IonSlides
  
  constructor(private http: HttpClient,public service: ServicePageService) {
    
  }
  ngOnInit(): void {
    this.http.get(env.API_URL+"produtos?_limit=4")
    .subscribe( (res)=>{ this.produtos = res; })
   
   this.produtoSlides.options = { speed : 500};
   this.produtoSlides.pager = true;
   this.produtoSlides.startAutoplay();
   this.loadMoreProduct(null);  
  }
  loadMoreProduct (event){
    if(event == null){
      this.page = 1
    }else{
      this.page = this.page+1;
    }
    setTimeout(()=>{
      this.http.get(env.API_URL+"produtos?_page="+this.page+"&_limit="+this.limitPage)
      .subscribe( (res)=>{ this.moreProdutos = this.moreProdutos.concat(res); })  
      if(event != null)
        event.target.complete();
    },2000);   
  }
}
