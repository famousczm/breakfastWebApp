import { Injectable } from '@angular/core';

@Injectable()
export class BusinessService {

  private businesses: Business[] = [
    new Business(1, "阿七早茶", "百年早餐店，专注于地道传统的早点制作", "../../assets/images/businessImg/business01.jpg", 61),
    new Business(2, "阿八早茶", "百年早餐店，专注于地道传统的早点制作", "../../assets/images/businessImg/business02.jpg", 125),
    new Business(3, "阿九早茶", "百年早餐店，专注于地道传统的早点制作", "../../assets/images/businessImg/business03.jpeg", 30),
    new Business(4, "阿十早茶", "百年早餐店，专注于地道传统的早点制作", "../../assets/images/businessImg/business04.jpg", 2),
    new Business(5, "麦当劳", "每天特价早餐，给你精神的一天", "../../assets/images/businessImg/business05.jpg", 45),
  ];

  private comment: Comment[] = [
    new Comment(1, 1, 1, "2017-07-24", "从小吃到大，赞。每次回家必须来这吃一次早茶", 5),
    new Comment(2, 2, 2, "2017-07-25", "从小吃到大，赞。每次回家必须来这吃一次早茶", 4),
    new Comment(3, 3, 3, "2017-07-26", "从小吃到大，赞。每次回家必须来这吃一次早茶", 3),
    new Comment(4, 4, 4, "2017-07-27", "从小吃到大，赞。每次回家必须来这吃一次早茶", 4),
    new Comment(5, 5, 5, "2017-07-28", "从小吃到大，赞。每次回家必须来这吃一次早茶", 2),
    new Comment(6, 6, 1, "2017-07-25", "从小吃到大，赞。每次回家必须来这吃一次早茶", 5)
  ];

  private product: Product[] = [
    new Product(1, 1, "猪肝廋肉粥", 15, "../../assets/images/business_details_img/business01/1_1.jpg", 50),
    new Product(2, 1, "韭黄牛肉拉肠粉", 10, "../../assets/images/business_details_img/business01/1_2.jpg", 25),
    new Product(3, 1, "水晶虾饺", 15, "../../assets/images/business_details_img/business01/1_3.png", 36),
    new Product(4, 1, "豉油王炒面", 16, "../../assets/images/business_details_img/business01/1_4.jpg", 40),
    new Product(5, 1, "鲍鱼蒸饭", 45, "../../assets/images/business_details_img/business01/1_5.jpg", 150),
    new Product(6, 1, "香茜牛肉球", 20, "../../assets/images/business_details_img/business01/1_6.jpg", 77),
  ];

  constructor() { }

  getBusinesses(): Business[]{
    return this.businesses;
  }

  getBusiness(id: number): Business{
    return this.businesses.find((product) => product.id == id);
  }

  getCommentsForStoreId(id: number): Comment[]{
    return this.comment.filter((comment: Comment) => comment.storeId == id);
  }

  getProductsForStoreId(id: number): Product[]{
    return this.product.filter((product: Product) => product.storeId == id);
  }

}

export class Business{
  constructor(
    public id: number,
    public name: string,
    public desc: string,
    public imgUrl: string,
    public eatingNum: number
  ){}
}

export class Comment{
  constructor(
    public id: number,
    public userId: number,
    public storeId: number,
    public timestamp: string,
    public commentBody: string,
    public rating: number
  ){}
}

export class Product{
  constructor(
    public productId: number,
    public storeId: number,
    public productName: string,
    public productPrice: number,
    public productImg: string,
    public eatingNum: number
  ){}
}
