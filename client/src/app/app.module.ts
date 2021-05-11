// module natifs
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


// modules
import { LayoutModule } from './shared/layout/layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './shared/modules/material/material.module';


// components
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { TopbarComponent } from './shared/components/topbar/topbar.component';
import { ArticleComponent } from './admin/article/article.component';
import { ListeArticlesComponent } from './admin/liste-articles/liste-articles.component';
import { ArticlePostComponent } from './admin/article-post/article-post.component';
import { ArticleDeleteComponent } from './admin/article-delete/article-delete.component';
import { ArticleUpdateComponent } from './admin/article-update/article-update.component';

// services
// import { UserService } from './shared/services/user.service';
import { AuthService } from './shared/services/auth.service';
import { WikiRouteService } from './shared/services/wikiRoute.service';
import { StateService } from './shared/services/state.service';
import { StuffService } from './shared/services/stuff.service';
import { SearchService } from './shared/services/search.service';
import { MessageService } from './shared/services/message.service';

// guards
import { AuthGuard } from './shared/guards/auth.guard';

// interceptor requete token
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';

////// Routing
import { APP_ROUTING } from './app.routing';
import { ArticleUserComponent } from './article-user/article-user.component';









@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SignupComponent,
    SigninComponent,
    TopbarComponent,
    ArticleComponent,
    ListeArticlesComponent,
    ArticlePostComponent,
    ArticleDeleteComponent,
    ArticleUpdateComponent,
    ArticleUserComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forRoot(APP_ROUTING),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthService,
    AuthGuard,
    // UserService,
    WikiRouteService,
    StateService,
    StuffService,
    SearchService,
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
