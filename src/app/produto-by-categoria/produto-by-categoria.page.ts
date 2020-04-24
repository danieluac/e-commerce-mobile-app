import { ServicePageService } from './../service-page.service';
import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment as env } from './../../environments/environment';

@Component({
  selector: 'app-produto-by-categoria',
  templateUrl: './produto-by-categoria.page.html',
  styleUrls: ['./produto-by-categoria.page.scss'],
})
export class ProdutoByCategoriaPage implements OnInit {

  producto : any;
  categoria : any;
  page: number;
  limitPage: number = 10;
  moreProdutos: any = [];

  constructor(private http: HttpClient,public actRoute: ActivatedRoute, public service : ServicePageService) { 
  
   this.actRoute.params.subscribe( (data)=> {
     if(typeof data.categoria != "undefined")
        this.categoria = data.categoria;
        else this.categoria = "";
        
   })
  
  }
  ngOnInit() {
   
    this.loadMoreProduct (null);
  }
  loadMoreProduct (event){
    if(event == null){
      this.page = 1
    }else{
      this.page = this.page+1;
    }
    setTimeout(()=>{
      this.http.get(env.API_URL+"produtos?_page="+this.page+"&_limit="+this.limitPage+"&categoria="+this.categoria)
      .subscribe( (res)=>{ this.moreProdutos = this.moreProdutos.concat(res); })  
      if(event != null)
        event.target.complete();
    },2000);   
  }
  goBack(){
    window.history.back();
  }

}
