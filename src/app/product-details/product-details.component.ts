import { Component } from '@angular/core';
import { PdpopupService } from './pdpopup.service';
import { Router } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  
})
export class ProductDetailsComponent {
  item={};
  panelOpenState=false;
  name="";
  constructor(private router:Router, private PdpopupService:PdpopupService){

  }
  ngOnInit(){
    this.item = this.PdpopupService.getDetails();
    // this.name =this.item;
    console.log(this.item)
  }
  closeDialog(){
    this.PdpopupService.closePopup();
  }

}
