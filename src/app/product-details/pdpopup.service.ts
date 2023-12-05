import { Injectable } from '@angular/core';
import { ProductDetailsComponent } from './product-details.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class PdpopupService {
  item: any[]=[];

  constructor(private dialog: MatDialog) {}

  openPopup(item: any) {
    // console.log(item)
    this.item=item;
    this.dialog.open(ProductDetailsComponent);
  }
  closePopup(){
    this.dialog.closeAll();
  }
  getDetails(){
    return this.item;
  }
}
