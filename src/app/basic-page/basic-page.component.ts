import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {BasicWrapperComponent} from '../basic-wrapper/basic-wrapper.component';
import {ChannelService} from '../services/channel.service';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent implements OnInit {

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
