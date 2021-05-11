import { Route } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ListeArticlesComponent } from './admin/liste-articles/liste-articles.component';
import { ArticleComponent } from './admin/article/article.component';
import { ArticlePostComponent } from './admin/article-post/article-post.component';
import { ArticleDeleteComponent } from './admin/article-delete/article-delete.component';
import { ArticleUpdateComponent } from './admin/article-update/article-update.component';
import { ArticleUserComponent } from './article-user/article-user.component';


export const APP_ROUTING: Route[] = [
  { path: '', component: HomepageComponent },
  { path: 'articleUser/:id', component: ArticleUserComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'articlePost', canActivate: [AuthGuard], component: ArticlePostComponent },
  { path: 'listeArticles', canActivate: [AuthGuard], component: ListeArticlesComponent },
  { path: 'article/:id', canActivate: [AuthGuard], component: ArticleComponent },
  { path: 'articleDelete/:id', canActivate: [AuthGuard], component: ArticleDeleteComponent },
  { path: 'articleUpdate/:id', canActivate: [AuthGuard], component: ArticleUpdateComponent },
];
