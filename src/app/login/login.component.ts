import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = this.fb.group({
    email:['',[Validators.email,Validators.required]],
    password:['',[Validators.required]]
});
isSubmit = false;
  constructor(
    private fb: UntypedFormBuilder){}

  onSubmit() {
    this.isSubmit = true;
    if(this.form.invalid) {
      return
    }

    console.log(this.form.value);

  }  

  //getter functions  
  get email():FormControl {
    return this.form.get('email')  as FormControl;;
  }
  get password():FormControl {
    return this.form.get('password')  as FormControl;;
  }
}
