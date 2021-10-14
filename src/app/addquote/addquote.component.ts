import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../services/quotes/quotes.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addquote',
  templateUrl: './addquote.component.html',
  styleUrls: ['./addquote.component.css'],
})
export class AddquoteComponent implements OnInit {
  addQuote: FormGroup;

  constructor(private quotesService: QuotesService, private fb: FormBuilder,private router:Router) {
    this.addQuote = this.fb.group({
      title: '',
      text: '',
    });
  }

  ngOnInit(): void {
  }

  addQuotes(){
    const body = this.addQuote.value
    console.log(body)
    this.quotesService.addQuote(this.addQuote.value).subscribe((data:any)=>{
      this.router.navigateByUrl('/')
    })
  }
}
