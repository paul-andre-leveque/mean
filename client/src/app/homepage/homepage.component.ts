import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ArticleWiki } from '../shared/models/articleWiki.model';
import { SearchService } from '../shared/services/search.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  articleWiki$: Observable<ArticleWiki[]>;
  private searchTerms = new Subject<string>();

  constructor(private searchService: SearchService, private router: Router) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {

    this.articleWiki$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchService.searchArticles(term)),
    );
  }
  // articleClicked(id: string) {
  //   this.router.navigate(['/articleUser/' + id]);
  // }
}
