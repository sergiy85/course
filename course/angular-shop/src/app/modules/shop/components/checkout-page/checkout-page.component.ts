import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  public formGroup: any;
  public formSubmitted: boolean;

  constructor(private router: Router) { 
    this.formSubmitted = false;
  }
  
  ngOnInit() {

    this.formGroup = new FormGroup({
      'name': new FormControl("", [
        Validators.required
      ]),
      'surname': new FormControl("", [
        Validators.required
      ]),
      'email': new FormControl("", [
        Validators.required, 
        Validators.email
      ]),
      'tel': new FormControl("", [
        Validators.required,
        Validators.pattern(new RegExp("[0-9 ]{12}"))
      ])
    })
  }

  onSubmit(form: FormGroup, isValid:boolean){
    this.formSubmitted = true;

    if(isValid){
      this.formSubmitted = false;
      this.router.navigate(['/shop/thanks']);
    } 
  }

}
