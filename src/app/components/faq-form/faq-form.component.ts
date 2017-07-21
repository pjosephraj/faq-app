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
    if (faq.question.length && faq.answer.length) {
      this.addFaq.emit(faq);
      this.faq = { question: '', answer: '', show: false };
    }else {
      if (!faq.question.length && !faq.answer.length) {
        alert('Please enter question and answer...');
      }else if (!faq.answer.length) {
        alert('Please enter answer...');
      }else {
        alert('Please enter question...');
      }
    }
  }

}
