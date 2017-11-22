import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ChannelService} from '../services/channel.service';

@Injectable()
export class DynamicResolve implements Resolve<any> {

  constructor(private channelService: ChannelService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {

    this.channelService.footerSubjet.next(route.data.footer);
    this.channelService.siderSubjet.next(route.data.sider);
    return route.data;
  }


}
