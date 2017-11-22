import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {ChannelService} from '../services/channel.service';
import {BasicWrapperComponent} from '../basic-wrapper/basic-wrapper.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  @ViewChild('sider')
  sider;

  @ViewChild('footer')
  footer;

  constructor(private channelService: ChannelService,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.channelService.footerSubjet.asObservable().subscribe((foooter) => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(foooter);

      this.footer.viewContainerRef.createComponent(componentFactory);
    });

    this.channelService.siderSubjet.asObservable().subscribe((sider) => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(sider);

      this.sider.viewContainerRef.createComponent(componentFactory);
    });
  }

}
