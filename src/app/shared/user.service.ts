import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private users: User[] = [
    new User(1, "王二牛", "http://image.g-cores.com/61b5a12e-72fa-4ddc-9355-22fe84ed5fd3.jpg?x-oss-process=style/user_normal", "15188965371", "123456"),
    new User(2, "王三牛", "http://image.g-cores.com/61b5a12e-72fa-4ddc-9355-22fe84ed5fd3.jpg?x-oss-process=style/user_normal", "15156965371", "123456"),
    new User(3, "王四牛", "http://image.g-cores.com/61b5a12e-72fa-4ddc-9355-22fe84ed5fd3.jpg?x-oss-process=style/user_normal", "15189665371", "123456"),
    new User(4, "王五牛", "http://image.g-cores.com/61b5a12e-72fa-4ddc-9355-22fe84ed5fd3.jpg?x-oss-process=style/user_normal", "15188943371", "123456"),
    new User(5, "王六牛", "http://image.g-cores.com/61b5a12e-72fa-4ddc-9355-22fe84ed5fd3.jpg?x-oss-process=style/user_normal", "15188112071", "123456"),
    new User(6, "王水牛", "http://image.g-cores.com/61b5a12e-72fa-4ddc-9355-22fe84ed5fd3.jpg?x-oss-process=style/user_normal", "15152065371", "123456"),
  ];

  constructor() { }

  getUser(id: number): User{
    return this.users.find((user: User) => user.userId == id);
  }

}

export class User{
  constructor(
    public userId: number,
    public userName: string,
    public userImg: string,
    public phoneNumber: string,
    public password: string
  ){}
}
