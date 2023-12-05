import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class cartService{
    cartItems: any[] = [];
    totalPrice=0;

    addToCart(item: any) {
      if(!this.cartItems.includes(item)){
        this.cartItems.push(item);
      }
        console.log(this.cartItems)
        this.totalPrice+=item.DiscountPrice;
      }
    getCartItems(){
      return this.cartItems;
    }
    getTotalPrice(){
      return this.totalPrice;
    }

    removeFromCart(item:any) {
        var index=this.cartItems.findIndex(a => a.Name === item.Name) //find the index of the element in the cart
        if(item.qty == 0){
          this.cartItems.splice(index,1)
        }
        // this.cartItems.splice(index,1) //remove the item using index
        console.log(this.cartItems)
      }
}