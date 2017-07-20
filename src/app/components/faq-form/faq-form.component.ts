import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Faq } from '../../models/Faq';

@Component({
  selector: 'app-faq-form',
  templateUrl: './faq-form.component.html',
  styleUrls: ['./faq-form.component.css']
})
export class FaqFormComponent implements OnInit {
  faq: Faq;
  @Output() addFaq= new EventEmitter();
  constructor() {
    this.faq = {
      question: '',
      answer: '',
      show: false
    };
  }

  ngOnInit() {
  }

  submitFaq(faq) {
    console.log(faq);
    this.addFaq.emit(faq);
  }

}
