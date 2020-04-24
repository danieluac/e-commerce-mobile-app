import { NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicePageService {

  constructor(private navCtrl : NavController) { }

  openProduto(produto : object){
    this.navCtrl.navigateRoot("page/produto-details/"+this.encodeString(JSON.stringify(produto)));
  }
  encodeString(str: string) {
    return btoa(str).replace("/","-").replace("+","_");
}
decodeString(str : string) {
    return atob(str.replace("_","+").replace("-","/"));
}
}
