import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleWiki } from '../shared/models/articleWiki.model';
import { AuthService } from '../shared/services/auth.service';
// import { ArticleService } from '../shared/services/article.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  public articleWikiForm: FormGroup;
  public articleWiki: ArticleWiki;
  public errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.articleWikiForm = this.fb.group({
      title: [''],
      resume: [''],
      synopsie: [''],
      developpement: [''],
      accueil: [''],
      imageUrl: [''],
    });
  }
  public onSubmit(): void {
    this.authService.articleWiki(this.articleWikiForm.value).subscribe(
      (articleWiki: ArticleWiki) => {
        this.router.navigate(['/admin']);
      },
      (err) => {
        this.errorMessage = err;
      }
    );
  }

}
