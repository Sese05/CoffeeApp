import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Button  } from 'ionic-angular';

/**
 * Generated class for the OrderingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ordering',
  templateUrl: 'ordering.html',
 

})
export class OrderingPage {

  username:string;
 NumberOfOrders=0;
 coffee=10;
 Cappuccino="false";
  Latte="false";
 Coldbrew="false";
 Expresso="false";
 TotalPrice=0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.username=navParams.get('data');
  }

  
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderingPage');
  }
 Increase(value:number):void{
    this.NumberOfOrders +=value;
      }
      
 Order():Number{
  
   if (this.Cappuccino && this.Latte && this.Coldbrew && this.Expresso){
      this.TotalPrice=(this.coffee +25+20+23+24)*this.NumberOfOrders
    }
   else if(this.Cappuccino && this.Latte && this.Coldbrew){
      this.TotalPrice=(this.coffee+25+20+23)*this.NumberOfOrders
   }
   else if(this.Cappuccino && this.Latte && this.Expresso){
      this.TotalPrice=(this.coffee+25+20+24)*this.NumberOfOrders
   }
   else if(this.Latte && this.Coldbrew&& this.Expresso){
      this.TotalPrice=(this.coffee+20+23+24)*this.NumberOfOrders
   }
   else if(this.Cappuccino && this.Coldbrew && this.Expresso){
      this.TotalPrice=(this.coffee+25+23+24)*this.NumberOfOrders
   }

   else if(this.Cappuccino && this.Latte){
      this.TotalPrice=(this.coffee+25+20)*this.NumberOfOrders
   }
   else if(this.Cappuccino && this.Coldbrew){
      this.TotalPrice=(this.coffee+25+23)*this.NumberOfOrders
   }
   else if(this.Cappuccino && this.Expresso){
      this.TotalPrice=(this.coffee+25+24)*this.NumberOfOrders
   }
   else if(this.Latte && this.Coldbrew){
     this.TotalPrice=(this.coffee+20+23)*this.NumberOfOrders
   }
   else if(this.Latte && this.Expresso){
     this.TotalPrice=(this.coffee+20+24)*this.NumberOfOrders
   }
   else if(this.Coldbrew && this.Expresso){
     this.TotalPrice=(this.coffee+23+24)*this.NumberOfOrders
   }
   else if(this.Cappuccino){
     this.TotalPrice=(this.coffee+25)*this.NumberOfOrders 
   }
   else if(this.Latte){
    this.TotalPrice=(this.coffee+20)*this.NumberOfOrders 
  }
  else if(this.Coldbrew){
    this.TotalPrice=(this.coffee+23)*this.NumberOfOrders 
  }
  else if(this.Expresso){
    this.TotalPrice=(this.coffee+24)*this.NumberOfOrders 
  }

else if(this.NumberOfOrders){
this.TotalPrice=this.coffee*this.NumberOfOrders
}
return this.TotalPrice
  } 
  
}

