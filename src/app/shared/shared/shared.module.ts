import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../components/navbar/navbar';
import { Footer } from '../components/footer/footer';
import { MaterialModule } from './material.module';
import { WhyChooseMe } from '../components/why-choose-me/why-choose-me';
import { QuoteBox } from '../components/quote-box/quote-box';



@NgModule({
  declarations: [
    Navbar,
    Footer,
    WhyChooseMe,
    QuoteBox
  ],
  imports: [
    CommonModule,
    MaterialModule,

  ],
  exports: [
    Navbar,
    Footer,
    WhyChooseMe,
    QuoteBox,
    MaterialModule
  ]
})
export class SharedModule { }
