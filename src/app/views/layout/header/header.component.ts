import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { NgForm, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { DataService } from 'src/app/services/dataStore/data.service';
import { TranslationService } from 'src/app/services/translation/translation.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import Swal from 'sweetalert2';
import { SpinerComponent } from 'src/app/services/spiner/spiner.component';
import { SpinerService } from 'src/app/services/spiner/spiner.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logError = [];
  regError = [];

  registerForm: FormGroup;
  loginForm: FormGroup;

  regSubmitted = false;
  logSubmitted = false;

  regSpin =new this.spin.spin("regSpin")

  serviceTypes = []
  states = []
  loginSpin = new this.spin.spin("loginSP")

  lang = "ar"
  constructor(private api: ApiService, private dataStore: DataService, private tran: TranslationService, private fb: FormBuilder, public auth: AuthService, private spin: SpinerService
  ) {
    this.serviceTypes = this.dataStore.getServiceTypes()
    this.states = this.dataStore.getStates()
    this.lang = this.tran.getlocalLang()
    //this.loginSpin.hide();
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],
      check: ['', []],
      city: ['', []],

      password_confirmation: ['', [Validators.required]],
    },
      {
        validator: this.passwordConfirming,
      }
    );
    this.registerForm.controls['city'].setValue(1, {onlySelf: true});

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    }
    );
  }

  get regf() {
    return this.registerForm.controls;
  }

  get logf() {
    return this.loginForm.controls;
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('password_confirmation').value) {
      return { invalid: true };
    }
  }

  regOnSubmit() {
    this.regSubmitted = true;
    this.regSpin.show()
    this.regError = [];
    if (this.registerForm.invalid) {
      this.regError = ['Invalid Data'];
      this.regSpin.hide()

      return;
    }

    this.api.post('register', this.registerForm.value).subscribe(res => {
      this.regSpin.hide()
      $("#signup").modal("hide");
      Swal.fire('success', 'registarion has successed chek you email for validation.', 'success')

    },
      err => {
        if (err.status == 422) {
          var er = [];
          Object.keys(err.error.errors).forEach(kye => {
            err.error.errors[kye].forEach(msg => {
              er.push(msg);
            });
          });
          this.regError = er;
          this.regSpin.hide()
        }

      }
    )
  }

  setlang(lang) {
    this.tran.setlocalLang(lang);
  }


  loginOnSubmit() {
    this.logSubmitted = true;
    this.loginSpin.show();
    this.logError = [];
    if (this.loginForm.invalid) {
      this.loginSpin.hide();
      return;
    }
    var log = this.api.post("login", this.loginForm.value).subscribe(
      res => {
        this.auth.setUser(res);
        this.loginSpin.hide();
        $("#signin").modal("hide");
    },
      err => {
        if (err.status == 422) {
          var er = [];
          Object.keys(err.error.errors).forEach(kye => {
            err.error.errors[kye].forEach(msg => {
              er.push(msg);
            });
          });
          this.logError = er
          this.loginSpin.hide();
        }
        if (err.status == 401) {
          this.logError = ["chech your cerdintial"]
          this.loginSpin.hide();
        }
      }
    )
  }

  spinHide() {
    console.log("clicked")
    this.loginSpin.hide()

  }
}
