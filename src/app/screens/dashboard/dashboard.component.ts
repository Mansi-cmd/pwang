import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  form = this.fb.group({
    name:['',[Validators.required, Validators.pattern('[A-Za-z]*$')]],
    experience:['',[Validators.email,Validators.required]],
    education:['',[Validators.required,Validators.pattern('[A-Za-z]*$')]]
  });

  submit = false;
  constructor(
    private fb: UntypedFormBuilder){}

  onSubmit() {
    this.submit = true;
    if(this.form.invalid) {
      return
    }

    console.log(this.form.value);

  }  

  //getter functions  
  get name():FormControl {
    return this.form.get('name')  as FormControl;
  }

  get password():FormControl {
    return this.form.get('experience')  as FormControl;
  }

  get email():FormControl {
    return this.form.get('education')  as FormControl;
  }
}
