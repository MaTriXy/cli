import { takeUntil } from 'rxjs/operators';

import { Component, ComponentFactoryResolver, Injector, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RuckenCoreRuI18n, translate } from '@rucken/core';
import { <%=app.classPrefix%>CoreRuI18n } from '@<%=app.name%>/core';
import { <%=app.classPrefix%>WebRuI18n } from '@<%=app.name%>/web';
import { AlertModalComponent, BaseAppComponent, RuckenWebRuI18n } from '@rucken/web';
import * as _ from 'lodash';
import { defineLocale } from 'ngx-bootstrap/bs-moment';
import { enGb, ru } from 'ngx-bootstrap/locale';

import { <%=app.classPrefix%>RuI18n } from './i18n/ru.i18n';

defineLocale('ru', ru);
defineLocale('en', enGb);

@Component({
  selector: '<%=app.name%>-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  entryComponents: [AlertModalComponent],
  encapsulation: ViewEncapsulation.None
})
export class <%=app.classPrefix%>AppComponent extends BaseAppComponent {

  languages = [{
    code: 'ru',
    title: translate('Russian'),
    dic: _.merge(RuckenCoreRuI18n, RuckenWebRuI18n, <%=app.classPrefix%>CoreRuI18n, <%=app.classPrefix%>WebRuI18n, <%=app.classPrefix%>RuI18n)
  }, {
    code: 'en',
    title: translate('English'),
    dic: null
  }];

  constructor(
    public injector: Injector,
    public viewContainerRef: ViewContainerRef,
    public resolver: ComponentFactoryResolver,
    public router: Router
  ) {
    super(injector, viewContainerRef, resolver);
  }
}