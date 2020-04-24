import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicePageService } from './../service-page.service';
import { Storage } from '@ionic/storage'
import { ModalController } from '@ionic/angular';
import { CartPage } from './../cart/cart.page';

@Component({
  selector: 'app-produto-details',
  templateUrl: './produto-details.page.html',
  styleUrls: ['./produto-details.page.scss'],
})
export class ProdutoDetailsPage implements OnInit {

  produto : any = [];
  constructor(private modalCtrl: ModalController,private actRoute: ActivatedRoute, public service : ServicePageService, private storage: Storage) {
    this.actRoute.params.subscribe( (param) => {
       this.produto = JSON.parse(this.service.decodeString(param.produto));
    })
   }
  ngOnInit() {
  }
  addToCard(produto){
    this.storage.get("cart").then( (data) => {
      if(data == null || data.length == 0){
        data = [];
        data.push({
          "produto" : produto,
          "quantidade" : 1,
          "total" : parseFloat(produto.price)
        })
      }else{
        let added = 0;
        for(let i=0;i < data.length; i++){
          if(produto.id == data[i].produto.id){
            console.log("produto ja existe...");
            let qty = data[i].quantidade;
            data[i].quantidade = qty+1;
            data[i].total = parseFloat(data[i].total) + parseFloat(data[i].produto.price);
            added = 1;
          }          
        }
        if(added == 0){
          data.push({
            "produto" : produto,
            "quantidade" : 1,
            "total" : parseFloat(produto.price)
          });
        }
      }
      this.storage.set("cart",data);
    })
  }
  async openCart(){
    const modal = await this.modalCtrl.create({
      component: CartPage
    })
      return await modal.present();
  }
}
