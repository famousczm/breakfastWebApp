import { Component, OnInit } from '@angular/core';
import {BusinessService, Business, Comment} from "../shared/business.service";
import {UserService, User} from "../shared/user.service";

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  private businesses: Business[];

  constructor(private businessService: BusinessService,
               private userService: UserService) { }

  ngOnInit() {
    this.businesses = this.businessService.getBusinesses();
  }

  changeComment(groupId: number, comments: Comment[]){
    let i: number = 1;
    console.log(i);
    if(groupId == i){
      return false;
    }else{
      return true;
    }
  }

  getComments(storeId: number): Comment{
    return this.businessService.getCommentsForStoreId(storeId)[0];
  }

  getUser(userId: number): User{
    return this.userService.getUser(userId);
  }

}



