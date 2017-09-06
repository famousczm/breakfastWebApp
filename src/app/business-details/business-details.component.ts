import { Component, OnInit } from '@angular/core';
import {BusinessService, Product, Business, Comment} from "../shared/business.service";
import {ActivatedRoute} from "@angular/router";
import {UserService, User} from "../shared/user.service";

@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.css']
})
export class BusinessDetailsComponent implements OnInit {

  products: Product[];

  business: Business;

  comments: Comment[];

  commentsLength: number;

  constructor(private businessService: BusinessService,
              private userService: UserService,
              private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    let productId: number = this.routeInfo.snapshot.params["productId"];
    this.products = this.businessService.getProductsForStoreId(productId);
    this.business = this.businessService.getBusiness(productId);
    this.comments = this.businessService.getCommentsForStoreId(productId);
    this.commentsLength = this.comments.length;
  }

  getUser(id: number){
    return this.userService.getUser(id);
  }

}
