import { Injectable } from '@angular/core';
import { Faq } from '../models/Faq';

@Injectable()
export class FaqsService {
  faqs: Faq[];
  constructor() {
    this.faqs = [
      {question: 'What is your name?', answer: 'My name is Brad', show: false },
      {question: 'What is your favorite color?', answer: 'My favorite color is red', show: false },
      {question: 'What is your favorite language?', answer: 'My favorite language is JavaScript', show: false }
    ];
  }

  setActive(ques) {
    this.faqs = this.faqs.map((faq) => {
      if (faq.question === ques.question) {
        return Object.assign({}, faq, {show: true});
      }else {
        return Object.assign({}, faq, {show: false});
      }
    });
  }

  addFaq(faq) {
    console.log(faq);
    this.faqs.unshift(faq);
  }
}
