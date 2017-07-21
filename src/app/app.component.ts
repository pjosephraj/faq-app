import { Component } from '@angular/core';
import { FaqsService } from './services/faqs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public faqsData: FaqsService) {
  }

  addFaq(faq) {
    this.faqsData.addFaq(faq);
  }
}
