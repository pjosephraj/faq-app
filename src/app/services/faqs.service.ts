import { Injectable } from '@angular/core';
import {Faq} from '../models/faq';

@Injectable()
export class FaqsService {
  faqs: Faq[];
  constructor() {
    this.faqs = [
      {question: 'What is your name?', answer: 'My name is Brad'},
      {question: 'What is your favorite color?', answer: 'My favorite color is red'},
      {question: 'What is your favorite language?', answer: 'My favorite language is JavaScript'}
    ];
  }

}
