import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ArticleWiki } from '../models/articleWiki.model';
import { catchError, switchMap, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class StuffService {
  constructor(private http: HttpClient) { }

  private listeArticle = 'api/admin';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private handleError<ArticleWiki>(operation = 'operation', result?: ArticleWiki) {
    return (error: any): Observable<ArticleWiki> => {
      console.error(error);
      return of(result as ArticleWiki);
    };
  }


  getArticleWiki(): Observable<ArticleWiki[]> {
    return this.http.get<ArticleWiki[]>(this.listeArticle)
      .pipe(
        catchError(this.handleError<ArticleWiki[]>('getArticleWiki', []))
      );
  }


  getArticleWikiById(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get('/api/admin/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  modifyArticle(id: string, articleWiki: ArticleWiki) {
    return new Promise((resolve, reject) => {
      this.http.put('/api/admin/' + id, articleWiki).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  deleteArticleWiki(id: string) {
    return new Promise((resolve, reject) => {
      this.http.delete('/api/admin/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
