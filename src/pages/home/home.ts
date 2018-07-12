import { OrderingPage } from './../ordering/ordering';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
user:string;
  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {

  }
  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Login',
    inputs: [
      {
        name: 'username',
        placeholder: 'Username'
      },
      {
        name: 'password',
        placeholder: 'Password',
        type: 'password'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
        console.log('Cancel clicked');
        }
      },
      {
        text: 'Login',
        role: 'Login',
        handler: data => {
      this.goto(data.username)
          

         
        }
      },
    ]
    
  
    });
    alert.present();
  }
goto(username):void{
  this.user=username;
  this.navCtrl.push(OrderingPage,{
    data:this.user

  });
}


}
