import { Component, EventEmitter, Input, Output } from '@angular/core';
import { cartService } from '../cart.service';
import { Router } from '@angular/router';
import { PdpopupService } from '../product-details/pdpopup.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  
  @Output() cartCount= 0;
  itemDetails:any[]=[];
  viewMoreDetails=false;
  productDetails=false;
  productList=true;
  constructor(private cartService:cartService, private router:Router,private PdpopupService:PdpopupService){

  }
  // cartCount=0;
  cardUsed!:String;
  itemsOnCart: any[] = [];
  selectedCard!: string;
  discountPriceForCard =0;
  totalPrice=0;
  products=[
    {Name:'Denims',Image:'/assets/denims1.jfif',BasePrice:1500,DiscountPrice:1000,CompanyDiscount:true,CardTypeDiscount:true,qty:0,startDate:"22/12/2023",endDate:"31/12/2023",cdp:50},
    {Name:'Men Kurta',Image:'/assets/outfit.jfif',BasePrice:800,DiscountPrice:700,CompanyDiscount:true,CardTypeDiscount:true,qty:0,startDate:"01/01/2024",endDate:"22/01/2024",cdp:30},
    {Name:'Salwars',Image:'/assets/salwar.jfif',BasePrice:2000,DiscountPrice:1800,CompanyDiscount:false,CardTypeDiscount:true,qty:0},
    {Name:'Hand Bags',Image:'/assets/handbag.jfif',BasePrice:3000,DiscountPrice:1500,CompanyDiscount:true,CardTypeDiscount:false,qty:0,startDate:"22/11/2023",endDate:"22/11/2023",cdp:40},
    {Name:'Shoes',Image:'/assets/shoes.jfif',BasePrice:1800,DiscountPrice:1400,CompanyDiscount:false,CardTypeDiscount:true,qty:0},
    {Name:'Iphone',Image:'/assets/iphone.jfif',BasePrice:150000,DiscountPrice:120000,CompanyDiscount:false,CardTypeDiscount:false,qty:0}
  ]
  cards = [
    {bank: 'HDFC', discountPercent: 10},
    {bank: 'ICICI', discountPercent: 5},
    {bank: 'Jupiter', discountPercent: 2},
  ];
  details(){

  }
  addToCart(item:any){
    item.qty=item.qty+1;
    this.cartService.addToCart(item);
    this.cartCount++;
    this.totalPrice+=item.DiscountPrice;
    console.log(this.totalPrice)
    
  }

  removeFromCart(item:any){
    if(this.cartCount){
      item.qty=item.qty-1;
      this.cartService.removeFromCart(item);
      // this.cartCount.emit(value)
      this.cartCount--;
    }
  }
  goToCart(){
    // this.itemDetails.pop();
    // this.cartDetails=true;
    // this.productDetails=false;
    // this.productList=false;

    // this.itemsOnCart=this.cartService.getCartItems();
    // console.log(this.itemsOnCart)
    this.router.navigate(['/cartDetails'])
  }

  gotoDetails(item: any){
    this.PdpopupService.openPopup(item);
    // this.router.navigate(['/productDetails'])
    // this.productDetails=true;
    // this.productList=false;
    // this.itemDetails=item;
    // console.log(this.itemDetails)
    
  }
 
  backFromProductDetails(){
    this.productDetails=false;
    this.productList=true;
    // this.router.navigate(['/productList'])

  }
}
