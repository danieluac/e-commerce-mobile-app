
import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage'
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cartItem : any[] = [];
  total : any;
  constructor(private storage : Storage, private modalCtrl: ModalController) {
    this.total = 0.0;
    this.storage.ready().then(()=>{
      this.storage.get("cart").then((data)=>{
        this.cartItem = data;
        if(this.cartItem.length > 0){
          this.cartItem.forEach((item)=>{
            this.total = this.total + (parseFloat(item.produto.price) * parseFloat(item.quantidade));
          })
        }
      });
    });
   }

   closeModal(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
   }
   checkOut(){

   }
   removeFromCart(item : any , i){

    let price = parseFloat(item.produto.price);
    let qty = item.quantidade;
    this.cartItem.splice(i,1);

    this.storage.set("cart",this.cartItem).then( ()=>{

      this.total = this.total - (price * qty);
    })

   }
  ngOnInit() {
  }

}
