import { Component, OnInit } from '@angular/core';
import { CouponService } from '../services/coupon.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  amount = "";
  coupon_check;
  error_check;
  error_msg;
  discount;
  total;
  constructor(
    private couponService: CouponService,
  ) { }

  ngOnInit(): void {
  }

  applyCode(code, amount) {
    console.log(code.toUpperCase());
    console.log(amount);
    let coupon_code = code.toUpperCase()

    this.couponService.applyCode(coupon_code, amount)
      .subscribe( response => {
        console.log(response);
        this.coupon_check = true;
        this.discount = response['discount']
        this.total = response['total']
      }, (error) => {
        this.error_check = true;
        console.log(error["error"]["msg"]);
        this.error_msg = error["error"]["msg"];
      })
    
  }

}
