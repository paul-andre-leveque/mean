import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleWiki } from '../../shared/models/articleWiki.model';
import { WikiRouteService } from '../../shared/services/wikiRoute.service';


@Component({
  selector: 'app-article-post',
  templateUrl: './article-post.component.html',
  styleUrls: ['./article-post.component.scss']
})
export class ArticlePostComponent implements OnInit {
  public articleWikiForm: FormGroup;
  public userId: string;
  public errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private wikiRouteService: WikiRouteService,
    private router: Router
  ) { }

  ngOnInit() {
    this.articleWikiForm = this.fb.group({
      title: [''],
      resume: [''],
      synopsie: [''],
      gameplay: [''],
      developpement: [''],
      accueil: [''],
      dev: [''],
      editeur: [''],
      directeur: [''],
      compositeur: [''],
      date: [''],
      genre: [''],
      plateforme: [''],
      mod: [''],
      langue: [''],
      imageUrl1: [''],
      imageUrl2: [''],
      imageUrl3: [''],
      imageUrl4: [''],
      imageUrl5: [''],
    });
  }
  public wikiPost(): void {
    const articleWiki = new ArticleWiki();
    articleWiki._id = new Date().getTime().toString();
    articleWiki.userId = this.userId;
    this.wikiRouteService.articleWiki(this.articleWikiForm.value).subscribe(
      (articleWiki: ArticleWiki) => {
        this.router.navigate(['/listeArticles']);
      },
      (err) => {
        this.errorMessage = err;
      }
    );
  }

}
