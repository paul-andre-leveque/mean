import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ArticleWiki } from '../models/articleWiki.model';
import { catchError, switchMap, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class StuffService {

  private listeArticle = 'api/admin';
  private handleError<ArticleWiki>(operation = 'operation', result?: ArticleWiki) {
    return (error: any): Observable<ArticleWiki> => {
      console.error(error);
      return of(result as ArticleWiki);
    };
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }


  getArticleWiki(): Observable<ArticleWiki[]> {
    return this.http.get<ArticleWiki[]>(this.listeArticle)
      .pipe(
        catchError(this.handleError<ArticleWiki[]>('getArticleWiki', []))
      );
  }









  // private liste: ArticleWiki[] = [];


  // public liste$ = new Subject<ArticleWiki[]>();

  // getArticleWiki() {
  //   this.http.get('/api/admin/?results=2').subscribe(
  //     (liste: ArticleWiki[]) => {
  //       if (liste) {
  //         this.liste = liste;
  //         this.emitStuff();
  //       }
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  // emitStuff() {
  //   this.liste$.next(this.liste);
  // }

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



  // public stuff$ = new Subject<ArticleWiki[]>();

  // getStuff() {
  //   this.http.get('/api/articles',).subscribe(
  //     (stuff: ArticleWiki[]) => {
  //       if (stuff) {
  //         this.stuff = stuff;
  //         this.emitStuff();
  //       }
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  // emitStuff() {
  //   this.stuff$.next(this.stuff);
  // }

  // getThingById(id: string) {
  //   return new Promise((resolve, reject) => {
  //     this.http.get('/api/articles' + id).subscribe(
  //       (response) => {
  //         resolve(response);
  //       },
  //       (error) => {
  //         reject(error);
  //       }
  //     );
  //   });
  // }

  // createNewThing(thing: Thing) {
  //   return new Promise((resolve, reject) => {
  //     this.http.post('/api/stuff', thing).subscribe(
  //       (response) => {
  //         resolve(response);
  //       },
  //       (error) => {
  //         reject(error);
  //       }
  //     );
  //   });
  // }

  // modifyThing(id: string, thing: Thing) {
  //   return new Promise((resolve, reject) => {
  //     this.http.put('/api/stuff/' + id, thing).subscribe(
  //       (response) => {
  //         resolve(response);
  //       },
  //       (error) => {
  //         reject(error);
  //       }
  //     );
  //   });
  // }

  // modifyThingWithFile(id: string, thing: Thing, image: File | string) {
  //   return new Promise((resolve, reject) => {
  //     let thingData: Thing | FormData;
  //     if (typeof image === 'string') {
  //       thing.imageUrl = image;
  //       thingData = thing;
  //     } else {
  //       thingData = new FormData();
  //       thingData.append('thing', JSON.stringify(thing));
  //       thingData.append('image', image, thing.title);
  //     }
  //     this.http.put('/api/stuff/' + id, thingData).subscribe(
  //       (response) => {
  //         resolve(response);
  //       },
  //       (error) => {
  //         reject(error);
  //       }
  //     );
  //   });
  // }

  // deleteThing(id: string) {
  //   return new Promise((resolve, reject) => {
  //     this.http.delete('/api/stuff/' + id).subscribe(
  //       (response) => {
  //         resolve(response);
  //       },
  //       (error) => {
  //         reject(error);
  //       }
  //     );
  //   });
  // }
}
