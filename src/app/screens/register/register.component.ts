import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form = this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.email,Validators.required]],
    password:['',[Validators.required]]
  });

  isSubmit = false;
  constructor(
    private fb: UntypedFormBuilder){}

  onSubmit() {
    this.isSubmit = true;
    if(this.form.valid) {
      return
    }

    console.log(this.form.value);

  }  

  //getter functions  
  get name():FormControl {
    return this.form.get('name')  as FormControl;;
  }

  get password():FormControl {
    return this.form.get('password')  as FormControl;;
  }

  get email():FormControl {
    return this.form.get('email')  as FormControl;;
  }

}
