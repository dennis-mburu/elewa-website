import { Component, OnInit, Input } from '@angular/core';
import { NewsItem } from '@elewa-website/models/schema/ui/cards';
import { __highlightedNews } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss'],
})
export class NewsSectionComponent implements OnInit {
  @Input() newsData!: NewsItem[];

  ngOnInit(): void {
    this.newsData = __highlightedNews;
  }
}
