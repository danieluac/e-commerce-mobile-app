import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { NavController } from '@ionic/angular';
import { environment as env } from './../../environments/environment';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
 
  public categorias: any = [];
  constructor(private http: HttpClient, private navCtrl: NavController){}
  ngOnInit() {

    this.http.get(env.API_URL+"categorias")
    .subscribe( (response) => this.categorias = response)
  }
 
openCategory(categoria){
  this.navCtrl.navigateRoot("page/produto-by-categoria/"+categoria)
}
  
}
