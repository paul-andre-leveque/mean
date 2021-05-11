import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ArticleWiki } from '../models/articleWiki.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient, private messageService: MessageService) { }

  private articleUser = 'api/articleUser';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private handleError<ArticleWiki>(operation = 'operation', result?: ArticleWiki) {
    return (error: any): Observable<ArticleWiki> => {
      console.error(error);
      return of(result as ArticleWiki);
    };
  }

  // récupération des article par title sur searchBar
  searchArticles(term: string): Observable<ArticleWiki[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<ArticleWiki[]>(`${this.articleUser}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<ArticleWiki[]>('searchArticles', []))
    );
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  // récupération article USER par ID
  getArticleUserId(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get('/api/articleUser/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  // getArticleUserId(id: number): Observable<ArticleWiki> {
  //   const url = `${this.articleUser}/${id}`;
  //   return this.http.get<ArticleWiki>(url).pipe(
  //     tap(_ => this.log(`fetched hero id=${id}`)),
  //     catchError(this.handleError<ArticleWiki>(`getArticleUserId id=${id}`))
  //   );
  // }
}
