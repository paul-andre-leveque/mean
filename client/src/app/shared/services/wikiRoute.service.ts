import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
// import { tap, switchMap } from 'rxjs/operators';

import { ArticleWiki } from '../models/articleWiki.model';



@Injectable()
export class WikiRouteService {
    public listeArticle: BehaviorSubject<ArticleWiki> = new BehaviorSubject(null);

    constructor(private http: HttpClient) { }

    public articleWiki(articleWiki: ArticleWiki): Observable<ArticleWiki> {
        return this.http.post<ArticleWiki>('/api/admin/articlePost', articleWiki);
    }

    // public articleWikiUpdate(id: string, articleWiki: ArticleWiki): Observable<ArticleWiki> {
    //     return this.http.put<ArticleWiki>('/api/admin/' + id, articleWiki);
    // }




    // getStuff() {
    //     this.http.get('/api/articles').subscribe(
    //         (stuff: ArticleWiki[]) => {
    //             if (stuff) {
    //                 this.stuff = stuff;
    //                 this.emitStuff();
    //             }
    //         },
    //         (error) => {
    //             console.log(error);
    //         }
    //     );
    // }
    // emitStuff() {
    //     this.stuff$.next(this.stuff);
    // }








    // public getListeArticle(): Observable<ArticleWiki> {
    //     if (this.listeArticle.value) {
    //         return this.listeArticle;
    //     } else {
    //         return this.http.get<ArticleWiki>('/api/auth/articles').pipe(
    //             tap((articleWiki: ArticleWiki) => {
    //                 this.listeArticle.next(articleWiki);
    //             }),
    //             switchMap(() => {
    //                 return this.listeArticle;
    //             })
    //         );
    //     }
    // }

    // getArticleWikiId(id: string) {
    //     return new Promise((resolve, reject) => {
    //         this.http.get('http://localhost:3000/api/stuff/' + id).subscribe(
    //             (response) => {
    //                 resolve(response);
    //             },
    //             (error) => {
    //                 reject(error);
    //             }
    //         );
    //     });
    // }

}


