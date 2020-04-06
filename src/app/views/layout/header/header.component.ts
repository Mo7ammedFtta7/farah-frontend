import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { NgForm, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { DataService } from 'src/app/services/dataStore/data.service';
import { TranslationService } from 'src/app/services/translation/translation.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  registerForm: FormGroup;
  regSubmitted = false;

  serviceTypes = []
  lang = "ar"
  constructor(private api: ApiService, private dataStore: DataService, private tran: TranslationService, private fb: FormBuilder,private auth :AuthService,
  ) {
    this.serviceTypes = this.dataStore.getServiceTypes()

    this.lang = this.tran.getlocalLang()
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],
      check: ['', []],
      confirmPassword: ['', [Validators.required]],
    },
      {
        validator: this.passwordConfirming,
      }
    );
  }


  get regf() {
    return this.registerForm.controls;
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
      console.log('asdasdca aadasd');
      return { invalid: true };
    }
  }














  //ngOnInit() {
  //   var x=  this.dataStor.getServices().then(res=>{
  // console.log(res);
  //   });
  // console.log(this.dataStor.services);

  // this.services=this.dataStor.services
  //}


  regOnSubmit() {
    this.regSubmitted = true;
      ;    // stop here if form is invalid
    if (this.registerForm.invalid) {
      alert('vaild!! :-)\n\n' + JSON.stringify(this.registerForm.value))

      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }

  // onSubmit(f: NgForm) {
  //   this.login(f.value)
  // }


  setlang(lang) {
    this.tran.setlocalLang(lang);
  }


  login(data) {
    var log = this.api.post("login", data).subscribe(res => {
      console.log(res);
    }
    )
  }
}
