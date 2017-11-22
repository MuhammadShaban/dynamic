import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {BasicWrapperComponent} from './basic-wrapper/basic-wrapper.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  @ViewChild('main')
  main;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }

  ngOnInit(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(BasicWrapperComponent);
    console.log(this.main);

    this.main.viewContainerRef.createComponent(componentFactory);
  }

}
