import {Injectable, Type} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {EmptyComponent} from '../empty/empty.component';


@Injectable()
export class ChannelService {

  siderSubjet= new BehaviorSubject<Type<{}>>(EmptyComponent);
  footerSubjet= new BehaviorSubject<Type<{}>>(EmptyComponent);


}
