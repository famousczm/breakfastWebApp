import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {mobileValidator} from "../validator/validators";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required]],
      mobile: ['', mobileValidator],
      code: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }

  onSubmit(){
    if(this.formModel.valid){
      console.log(this.formModel.value);
    }
  }

}
