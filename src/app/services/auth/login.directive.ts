import { Directive, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Directive({
  selector: '[appLogin]'
})
export class LoginDirective {
  constructor(private router: Router, private auht: AuthService, public el: ElementRef) { }

  @HostListener('click',  ['$event'])
  click(e) {
    if (! this.auht.loggedIn()) {
        e.preventDefault();
        e.stopPropagation();

        // @ts-ignore
        $('#LoginModal').modal('show');
    }
  }
}
