import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  @Input() faq;
  @Output() removeFaq = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteFaq(evt, faq) {
    evt.stopPropagation();
    if (confirm('Are you Sure ?')) {
      this.removeFaq.emit(faq);
    }
  }

}
