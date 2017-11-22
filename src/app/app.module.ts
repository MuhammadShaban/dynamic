import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {BasicWrapperComponent} from './basic-wrapper/basic-wrapper.component';
import {DynamicDirective} from './directive/dynamic.directive';


@NgModule({
  declarations: [
    AppComponent,
    BasicWrapperComponent,
    DynamicDirective
  ],
  entryComponents: [BasicWrapperComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
