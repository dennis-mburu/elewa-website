import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsModule } from '@elewa-website/elements/layout/buttons';

import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [CommonModule, ButtonsModule],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class AppFooterModule {}
