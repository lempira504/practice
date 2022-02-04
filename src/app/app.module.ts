import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrintComponent } from './components/print/print.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { BlockUiComponent } from './components/block-ui/block-ui.component';
import { BlockUIModule } from 'ng-block-ui';

@NgModule({
  declarations: [
    AppComponent,
    PrintComponent,
    DropdownComponent,
    BlockUiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    BlockUIModule.forRoot({
      message: 'Default Message'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
