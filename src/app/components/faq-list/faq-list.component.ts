import { Component, OnInit } from '@angular/core';
import { FaqsService } from '../../services/faqs.service';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.css']
})
export class FaqListComponent implements OnInit {

  constructor(public faqsData: FaqsService) { }

  ngOnInit() {
  }

  removeFaq(faq) {
    this.faqsData.removeFaq(faq);
  }

}
