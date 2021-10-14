import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../services/quotes/quotes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  quotesList: any;

  constructor(private quotesService: QuotesService) {}

  ngOnInit(): void {
    this.getAllQuotes();
  }
  getAllQuotes() {
    this.quotesService.getAllQuotes().subscribe((data: any) => {
      this.quotesList = data.result;
    });
  }

  viewQuote(id: any) {
    this.quotesService.getQuote(id).subscribe((data: any) => {});
  }

  deleteQuote(id: any) {
    this.quotesService.deleteQuote(id).subscribe((data: any) => {
      alert(data.result);
      this.getAllQuotes();
    });
  }
}
