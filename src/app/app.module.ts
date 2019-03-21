import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import {FormsModule} from '@angular/forms';
import {IdentityRevealedValidatorDirective} from './shared/identity-revealed.directive';
import {ForbiddenValidatorDirective} from './shared/forbidden-name.directive';
import {UniqueAlterEgoValidatorDirective} from './shared/alter-ego.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    IdentityRevealedValidatorDirective,
    ForbiddenValidatorDirective,
    UniqueAlterEgoValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
