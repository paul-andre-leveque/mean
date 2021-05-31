import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleWiki } from '../../shared/models/articleWiki.model';
import { StuffService } from '../../shared/services/stuff.service';


@Component({
  selector: 'app-article-update',
  templateUrl: './article-update.component.html',
  styleUrls: ['./article-update.component.scss']
})
export class ArticleUpdateComponent implements OnInit {

  articleWiki: ArticleWiki;
  articleWikiForm: FormGroup;
  userId: string;
  loading = false;
  errorMessage: string;


  constructor(
    private fb: FormBuilder,
    private stuffService: StuffService,
    private router: Router,
    private route: ActivatedRoute,
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
    this.route.params.subscribe(
      (params) => {
        this.stuffService.getArticleWikiById(params.id).then(
          (articleWiki: ArticleWiki) => {
            this.articleWiki = articleWiki;
            this.articleWikiForm.get('title').setValue(this.articleWiki.title);
            this.articleWikiForm.get('resume').setValue(this.articleWiki.resume);
            this.articleWikiForm.get('synopsie').setValue(this.articleWiki.synopsie);
            this.articleWikiForm.get('gameplay').setValue(this.articleWiki.gameplay);
            this.articleWikiForm.get('developpement').setValue(this.articleWiki.developpement);
            this.articleWikiForm.get('accueil').setValue(this.articleWiki.accueil);
            this.articleWikiForm.get('dev').setValue(this.articleWiki.dev);
            this.articleWikiForm.get('editeur').setValue(this.articleWiki.editeur);
            this.articleWikiForm.get('directeur').setValue(this.articleWiki.directeur);
            this.articleWikiForm.get('compositeur').setValue(this.articleWiki.compositeur);
            this.articleWikiForm.get('date').setValue(this.articleWiki.date);
            this.articleWikiForm.get('genre').setValue(this.articleWiki.genre);
            this.articleWikiForm.get('plateforme').setValue(this.articleWiki.plateforme);
            this.articleWikiForm.get('mod').setValue(this.articleWiki.mod);
            this.articleWikiForm.get('langue').setValue(this.articleWiki.langue);
            this.articleWikiForm.get('imageUrl1').setValue(this.articleWiki.imageUrl1);
            this.articleWikiForm.get('imageUrl2').setValue(this.articleWiki.imageUrl2);
            this.articleWikiForm.get('imageUrl3').setValue(this.articleWiki.imageUrl3);
            this.articleWikiForm.get('imageUrl4').setValue(this.articleWiki.imageUrl4);
            this.articleWikiForm.get('imageUrl5').setValue(this.articleWiki.imageUrl5);
            this.loading = false;
          }
        );
      }
    );
  }

  wikiPost() {
    this.loading = true;
    const articleWiki = new ArticleWiki();
    articleWiki.title = this.articleWikiForm.get('title').value;
    articleWiki.resume = this.articleWikiForm.get('resume').value;
    articleWiki.synopsie = this.articleWikiForm.get('synopsie').value;
    articleWiki.gameplay = this.articleWikiForm.get('gameplay').value;
    articleWiki.developpement = this.articleWikiForm.get('developpement').value;
    articleWiki.accueil = this.articleWikiForm.get('accueil').value;
    articleWiki.dev = this.articleWikiForm.get('dev').value;
    articleWiki.editeur = this.articleWikiForm.get('editeur').value;
    articleWiki.directeur = this.articleWikiForm.get('directeur').value;
    articleWiki.compositeur = this.articleWikiForm.get('compositeur').value;
    articleWiki.date = this.articleWikiForm.get('date').value;
    articleWiki.genre = this.articleWikiForm.get('genre').value;
    articleWiki.plateforme = this.articleWikiForm.get('plateforme').value;
    articleWiki.mod = this.articleWikiForm.get('mod').value;
    articleWiki.langue = this.articleWikiForm.get('langue').value;
    articleWiki.imageUrl1 = this.articleWikiForm.get('imageUrl1').value;
    articleWiki.imageUrl2 = this.articleWikiForm.get('imageUrl2').value;
    articleWiki.imageUrl3 = this.articleWikiForm.get('imageUrl3').value;
    articleWiki.imageUrl4 = this.articleWikiForm.get('imageUrl4').value;
    articleWiki.imageUrl5 = this.articleWikiForm.get('imageUrl5').value;
    articleWiki._id = new Date().getTime().toString();
    articleWiki.userId = this.articleWiki.userId;
    this.stuffService.modifyArticle(this.articleWiki._id, articleWiki).then(
      () => {
        this.loading = false;
        this.router.navigate(['/listeArticles']);
      },
      (error) => {
        this.loading = false;
        this.errorMessage = error.message;
      }
    );
  }





















  //   public wikiPost(): void {
  //     const articleWiki = new ArticleWiki();
  //     articleWiki._id = new Date().getTime().toString();
  //     articleWiki.title = this.articleWikiForm.get('title').value;
  //     articleWiki.resume = this.articleWikiForm.get('resume').value;
  //     articleWiki.synopsie = this.articleWikiForm.get('synopsie').value;
  //     articleWiki.developpement = this.articleWikiForm.get('developpement').value;
  //     articleWiki.accueil = this.articleWikiForm.get('accueil').value;
  //     articleWiki.imageUrl = this.articleWikiForm.get('imageUrl').value;
  //     articleWiki.userId = this.userId;
  //     this.wikiRouteService.articleWikiUpdate(this.articleWikiForm.value, articleWiki).subscribe(
  //       (articleWiki: ArticleWiki) => {
  //         this.router.navigate(['/admin']);
  //       },
  //       (err) => {
  //         this.errorMessage = err;
  //       }
  //     );
  //   }

}
