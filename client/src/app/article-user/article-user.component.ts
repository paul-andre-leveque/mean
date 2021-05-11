import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from '../shared/services/search.service';
import { ArticleWiki } from '../shared/models/articleWiki.model';
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({
  selector: 'app-article-user',
  templateUrl: './article-user.component.html',
  styleUrls: ['./article-user.component.scss']
})
export class ArticleUserComponent implements OnInit {

  public articleWiki: ArticleWiki;
  public loading: boolean;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private searchService: SearchService,
  ) { }

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe(
      (params: Params) => {
        this.searchService.getArticleUserId(params.id).then(
          (articleWiki: ArticleWiki) => {
            // this.loading = false;
            this.articleWiki = articleWiki;
          }
        );
      }
    );
  }

  Back() {
    this.router.navigate(['/']);
  }
}
