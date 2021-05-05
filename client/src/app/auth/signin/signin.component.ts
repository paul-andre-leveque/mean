import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  public signinForm: FormGroup;
  public error: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }
  public trySignin() {
    this.authService.signin(this.signinForm.value).subscribe(
      () => {
        this.router.navigate(['/listeArticles']);
      },
      (err) => {
        this.error = err.error;
      }
    );
  }
}
