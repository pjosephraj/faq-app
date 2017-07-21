import { Injectable } from '@angular/core';
import { Faq } from '../models/Faq';

@Injectable()
export class FaqsService {
  faqs: Faq[];
  constructor() {
    if (localStorage.faqs) {
      this.faqs = JSON.parse(localStorage.faqs);
    }else {
      this.faqs = [];
      localStorage.faqs = JSON.stringify(this.faqs);
    }
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
    this.faqs.unshift(faq);
    if (localStorage.faqs) {
      localStorage.faqs = JSON.stringify(this.faqs);
    }
  }

  removeFaq(rFaq) {
    this.faqs = this.faqs.filter((faq) => faq.question !== rFaq.question);
    localStorage.faqs = JSON.stringify(this.faqs);
  }
}
