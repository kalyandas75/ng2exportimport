import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ScrapeService } from './scrape.service';

@Component({
  selector: 'app-scrape',
  templateUrl: './scrape.component.html',
  styleUrls: ['./scrape.component.css']
})
export class ScrapeComponent implements OnInit {

  data: any;
  loading = false;

  scrapeUrlForm: FormGroup = new FormGroup({
    scrapeUrl: new FormControl('')
  });

  constructor(private scrapeService: ScrapeService) {

  }

  ngOnInit() {
  }

  onSubmit(form: FormGroup) {
    this.loading = true;
    this.scrapeService.scrape(form.value.scrapeUrl)
    .subscribe({
      next: (d) => {
        this.data = d;
        this.loading = false;
      },
      error: (e) => {
        console.error(e);
        this.loading = false;
      }
    });

    // this.scrapeService.scrape(form.value.scrapeUrl)
    // .subscribe(d => {
    //     this.data = d;
    //     this.loading = false;
    // }, e => {
    //   console.error(e);
    //     this.loading = false;
    // });
  }

}