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

}


