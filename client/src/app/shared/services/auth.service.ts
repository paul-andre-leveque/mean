import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, of,  Subscription  } from 'rxjs';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { JwtToken } from '../models/JwtToken.model';
import { switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public subscription: Subscription;

  public jwtToken: BehaviorSubject<JwtToken> = new BehaviorSubject({
    isAuthenticated: null,
    token: null,
  });

  constructor(
    private http: HttpClient, 
    private router: Router,
    ) {
    this.initToken();
    this.subscription = this.initTimer();
  }

public initTimer() {
 return timer(2000, 5000).pipe(
   switchMap(() => {
     if (localStorage.getItem('jwt')) {
       return this.http.get<string>('/api/auth/refresh-token').pipe(
         tap((token: string) => {
           this.jwtToken.next({
             isAuthenticated: true,
             token: token
           });
           localStorage.setItem('jwt', token);
         })
       );
     } else {
       this.subscription.unsubscribe();
       return of(null);
     }
   })
 ).subscribe(() => {}, err => {
   this.jwtToken.next({
     isAuthenticated: false,
     token: null
   });
   localStorage.removeItem('jwt');
   this.subscription.unsubscribe();
 });
}

  private initToken(): void {
    const token = localStorage.getItem('jwt');
    if (token) {
      this.jwtToken.next({
        isAuthenticated: true,
        token: token,
      });
    } else {
      this.jwtToken.next({
        isAuthenticated: false,
        token: null,
      });
    }
    console.log(this.jwtToken.value);
  }

  /// inscriptions
  public signup(user: User): Observable<User> {
    return this.http.post<User>('/api/auth/signup', user);
  }

  public signin(credentials: {
    email: string;
    password: string;
  }): Observable<string> {
    return this.http.post<string>('/api/auth/signin', credentials).pipe(
      tap((token: string) => {
        this.jwtToken.next({
          isAuthenticated: true,
          token: token,
        });
        localStorage.setItem('jwt', token);
        this.subscription = this.initTimer();
      })
    );
  }

  public logout(): void {
    this.jwtToken.next({
      isAuthenticated: false,
      token: null,
    });
    localStorage.removeItem('jwt');
    this.router.navigate(['signin']);
  }
}
