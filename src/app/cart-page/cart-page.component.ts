import { Component } from '@angular/core';
import { cartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  itemsOnCart: any[] = [];
  discountPriceForCard =0;
  cdp=0;
  totalPrice=0;
  showAvailable=false;
  constructor(private cartService:cartService,private router:Router){

  }
  cards = [
    {bank: 'HDFC', discountPercent: 10},
    {bank: 'ICICI', discountPercent: 5},
    {bank: 'Jupiter', discountPercent: 2},
  ];
  cardUsed!:String;
  ngOnInit() {
   this.itemsOnCart=this.cartService.getCartItems();
   this.totalPrice=this.cartService.getTotalPrice();
   console.log(this.itemsOnCart)
  }
  backfromCart(){
        this.router.navigate([''])
  }
  onChange(event: any,BasePrice: any){
    this.cardUsed=event.value;
    switch(event.value){
      case 'HDFC':this.discountPriceForCard=this.totalPrice*(10/100);
      this.totalPrice=this.totalPrice - this.discountPriceForCard;
        break;
      case 'Jupiter':this.discountPriceForCard=this.totalPrice*(5/100);
      this.totalPrice=this.totalPrice - this.discountPriceForCard;
        break;
      case 'ICICI':this.discountPriceForCard=this.totalPrice*(2/100);
      this.totalPrice=this.totalPrice - this.discountPriceForCard;
        break;
    }
}
onDownClick(){
  this.showAvailable=!this.showAvailable
}

}
