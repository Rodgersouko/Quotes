import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, "If an opportunity doesn't knock, build a door and knock it yourself and keep going", "John Wick", new Date(2020, 3, 14)),
    new Quote(2, "Be yourself everybody else is taken by themselves ,always love yourself", "Oscar Wilde", new Date(2020, 3, 14)),
    new Quote(3, "So many books, so little time", "Frank Zappa", new Date(2020, 3, 14) ),
    new Quote(4, "Be the change you wish to see in the world ,you only see positive change when you are the change", "Mahatma Gandhi", new Date(2020, 3, 14)),
    new Quote(5, "Brain without knowledge is like body without a soul ,the body is dead", "Oscar Wilde", new Date(2020, 3, 14)),
    new Quote(6, "So many books, so little time", "Frank Zappa", new Date(2020, 3, 14)),
    // new Quote(7, "Be the change you wish to see in the world", "Mahatma Gandhi", new Date(2020, 3, 14)),
  ];

  completeQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (isComplete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  toggleAuthor(index) {
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.unshift(quote)
  } 

  constructor() { }

  ngOnInit(): void {
  }

}
