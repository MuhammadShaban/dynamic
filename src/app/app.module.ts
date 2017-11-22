import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {BasicWrapperComponent} from './basic-wrapper/basic-wrapper.component';
import {DynamicDirective} from './directive/dynamic.directive';
import {RouterModule, Routes} from '@angular/router';
import {PageComponent} from './page/page.component';
import { BasicPageComponent } from './basic-page/basic-page.component';
import { Side1Component } from './side1/side1.component';
import { Side2Component } from './side2/side2.component';
import { Footer1Component } from './footer1/footer1.component';
import { Footer2Component } from './footer2/footer2.component';
import {DynamicResolve} from './resolver/dynamic.resolve';
import {ChannelService} from './services/channel.service';
import { EmptyComponent } from './empty/empty.component';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'page',
        component: PageComponent,
        data: {
          sider: Side1Component,
          footer: Footer1Component
        },
        resolve: {
          language: DynamicResolve
        }
      },
      {
        path: 'basic',
        component: BasicPageComponent,
        data: {
          sider: Side2Component,
          footer: Footer2Component
        },
        resolve: {
          language: DynamicResolve
        }
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BasicWrapperComponent,
    DynamicDirective,
    PageComponent,
    BasicPageComponent,
    Side1Component,
    Side2Component,
    Footer1Component,
    Footer2Component,
    EmptyComponent
  ],
  entryComponents: [BasicWrapperComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    ChannelService, // IMPORTANT, SAME OBJECT ALL THE TIME
    DynamicResolve],
  bootstrap: [AppComponent]
})
export class AppModule {
}
