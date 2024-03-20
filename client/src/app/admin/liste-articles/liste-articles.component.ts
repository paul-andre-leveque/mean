import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleWiki } from '../../shared/models/articleWiki.model';
import { StuffService } from '../../shared/services/stuff.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.scss']
})
export class ListeArticlesComponent implements OnInit {
  public dataSource: MatTableDataSource<ArticleWiki> = new MatTableDataSource();
  public displayedColumns = ['title', 'dev', 'editeur', 'genre'];
  @ViewChild(MatPaginator) paginateur: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;
  public liste: ArticleWiki[];

  constructor(private stuffService: StuffService,
    private router: Router) { }

  ngOnInit() {
    this.stuffService.getArticleWiki().subscribe((articleWiki: ArticleWiki[]) => {
      this.dataSource.data = articleWiki;
      this.dataSource.paginator = this.paginateur;
      this.dataSource.sort = this.sort;

    });
  }

  updateFilter(filter: string): void {
    const finalFilter = filter.trim().toLowerCase();
    this.dataSource.filter = finalFilter;
  }

  articleClicked(id: string) {
    this.router.navigate(['/article/' + id]);
  }

  getArticleWiki(): void {
    this.stuffService.getArticleWiki()
      .subscribe(liste => this.liste = liste);
  }
}













  // public liste: ArticleWiki[] = [];
  // public part: number;
  // public loading: boolean;

  // private stuffSub: Subscription;
  // private partSub: Subscription;

  // constructor(private state: StateService,
  //   private stuffService: StuffService,
  //   private router: Router) { }

  // ngOnInit() {

  //   this.loading = true;
  //   this.stuffSub = this.stuffService.liste$.subscribe(
  //     (liste) => {
  //       this.liste = liste;
  //       this.loading = false;
  //     }
  //   );
  //   this.partSub = this.state.part$.subscribe(
  //     (part) => {
  //       this.part = part;
  //     }
  //   );
  //   this.stuffService.getArticleWiki();
  // }

  // articleClicked(id: string) {
  //   this.router.navigate(['/article/' + id]);
  // }

  // ngOnDestroy() {
  //   this.stuffSub.unsubscribe();
  //   this.partSub.unsubscribe();
  // }




































//   public stuff: ArticleWiki[] = [];
//   public part: number;
//   public loading: boolean;

//   private stuffSub: Subscription;
//   private partSub: Subscription;

//   constructor(private state: StateService,
//     private stuffService: StuffService,
//     private router: Router) { }

//   ngOnInit() {
//     this.loading = true;
//     this.state.mode$.next('list');
//     this.stuffSub = this.stuffService.stuff$.subscribe(
//       (stuff) => {
//         this.stuff = stuff;
//         this.loading = false;
//       }
//     );
//     this.partSub = this.state.part$.subscribe(
//       (part) => {
//         this.part = part;
//       }
//     );
//     this.stuffService.getStuff();
//   }

//   onArticle(id: string) {
//     this.router.navigate(['/article/' + id]);
//   }

//   ngOnDestroy() {
//     this.stuffSub.unsubscribe();
//     this.partSub.unsubscribe();
//   }

// }
