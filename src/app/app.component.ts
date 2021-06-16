import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchText;
  articles;

  p: number = 1;

  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.getNews().subscribe((data)=>{
      this.articles = data;
    });
  }
}