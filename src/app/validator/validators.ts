import {FormControl} from "@angular/forms";
/**
 * Created by 柱铭 on 2017/8/23.
 */
export function mobileValidator(control: FormControl): any{
  var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  let valid = myreg.test(control.value);
  return valid ? null : {mobile: true};
}
