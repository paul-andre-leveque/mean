import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StateService } from '../../shared/services/state.service';
import { StuffService } from '../../shared/services/stuff.service';
import { ArticleWiki } from '../../shared/models/articleWiki.model';
import { Params, Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public articleWiki: ArticleWiki;
  public loading: boolean;
  public userId: string;
  public part: number;

  private partSub: Subscription;

  constructor(private state: StateService,
    private router: Router,
    private route: ActivatedRoute,
    private stuffService: StuffService,
    // private auth: AuthService,
  ) { }

  ngOnInit() {
    this.loading = true;
    this.state.mode$.next('single-thing');
    // this.userId = this.auth.userId ? this.auth.userId : 'userID40282382';
    this.route.params.subscribe(
      (params: Params) => {
        this.stuffService.getArticleWikiById(params.id).then(
          (articleWiki: ArticleWiki) => {
            this.loading = false;
            this.articleWiki = articleWiki;
          }
        );
      }
    );
    this.partSub = this.state.part$.subscribe(
      (part) => {
        this.part = part;
        if (part >= 3) {
        }
      }
    );
  }

  Back() {
    this.router.navigate(['/listeArticles']);
  }

  Modify() {
    this.router.navigate(['/articleUpdate/' + this.articleWiki._id]);
  }


  Delete() {
    this.loading = true;
    this.stuffService.deleteArticleWiki(this.articleWiki._id).then(
      () => {
        this.loading = false;
        this.router.navigate(['/listeArticles']);
      }
    );
  }

  ngOnDestroy() {
    this.partSub.unsubscribe();
  }
}






























// public articleWiki: ArticleWiki;
// public loading: boolean;
// public userId: string;
// public part: number;

// private partSub: Subscription;

// constructor(private state: StateService,
//   private router: Router,
//   private route: ActivatedRoute,
//   private stuffService: StuffService) { }

// ngOnInit() {
//   this.loading = true;

//   // this.userId = this.auth.userId ? this.auth.userId : 'userID40282382';
//   this.route.params.subscribe(
//     (params: Params) => {
//       this.stuffService.getThingById(params.id).then(
//         (articleWiki: ArticleWiki) => {
//           this.loading = false;
//           this.articleWiki = articleWiki;
//         }
//       );
//     }
//   );
//   this.partSub = this.state.part$.subscribe(
//     (part) => {
//       this.part = part;
//       if (part >= 3) {

//       }
//     }
//   );
// }

// onGoBack() {
//   if (this.part === 1) {
//     this.router.navigate(['/part-one/all-stuff']);
//   } else if (this.part === 3) {
//     this.router.navigate(['/part-three/all-stuff']);
//   } else if (this.part === 4) {
//     this.router.navigate(['/part-four/all-stuff']);
//   }
// }

// onModify() {
//   switch (this.part) {
//     case 1:
//     case 2:
//       this.router.navigate(['/part-one/modify-thing/' + this.articleWiki._id]);
//       break;
//     case 3:
//       this.router.navigate(['/part-three/modify-thing/' + this.articleWiki._id]);
//       break;
//     case 4:
//       this.router.navigate(['/part-four/modify-thing/' + this.articleWiki._id]);
//       break;
//   }
// }

// onDelete() {
//   this.loading = true;
//   this.stuffService.deleteThing(this.articleWiki._id).then(
//     () => {
//       this.loading = false;
//       switch (this.part) {
//         case 1:
//         case 2:
//           this.router.navigate(['/part-one/all-stuff']);
//           break;
//         case 3:
//           this.router.navigate(['/part-three/all-stuff']);
//           break;
//         case 4:
//           this.router.navigate(['/part-four/all-stuff']);
//           break;
//       }
//     }
//   );
// }

// ngOnDestroy() {
//   this.partSub.unsubscribe();
// }
// }
