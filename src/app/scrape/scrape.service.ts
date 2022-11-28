import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrapeService {

  constructor(private http: HttpClient) { }

  scrape(scrapeUrl: string) {
    return this.http.post('/api/products/scrape', scrapeUrl);
  }
}
