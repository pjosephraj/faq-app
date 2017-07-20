import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FaqFormComponent } from './components/faq-form/faq-form.component';
import { FaqListComponent } from './components/faq-list/faq-list.component';
import { FaqComponent } from './components/faq/faq.component';

import { FaqsService } from './services/faqs.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FaqFormComponent,
    FaqListComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    FaqsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
