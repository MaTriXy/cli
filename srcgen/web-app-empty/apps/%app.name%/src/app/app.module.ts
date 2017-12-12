import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import {
  AppService,
  EndpointHelper,
  HttpHelper,
  RepositoryHelper,
  RuckenCoreServices,
  ThemesService,
  TokenService,
} from '@rucken/core';
import { <%=app.classPrefix%>CoreServices } from '@<%=app.name%>/core';
import { <%=app.classPrefix%>WebServices } from '@<%=app.name%>/web';
import {
  AlertModalModule,
  AuthModalModule,
  BaseResourceSelectInputConfig,
  RuckenWebServices,
  SelectInputConfig,
  TableColumnConfig,
  TextInputConfig,
  WebAppService,
  WebThemesService,
  WebTokenService,
} from '@rucken/web';
import { HomeGuardService, SharedModule } from '@rucken/web';
import { LaddaModule } from 'angular2-ladda';
import {
  ComponentLoaderFactory,
  PaginationConfig,
  PopoverConfig,
  PositioningService,
  TabsetConfig,
  TooltipConfig,
} from 'ngx-bootstrap';

import { 
  <%=app.classPrefix%>AppComponent,
  <%=app.classPrefix%>Routes,
  <%=app.classPrefix%>NavbarModule,
  <%=app.classPrefix%>HomeGuardService,
  <%=app.classPrefix%>EndpointHelper,
  <%=app.classPrefix%>HttpHelper,
  <%=app.classPrefix%>Services
} from './index';

@NgModule({
  declarations: [
    <%=app.classPrefix%>AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LaddaModule.forRoot({
      style: 'expand-left',
      spinnerColor: 'white',
      spinnerLines: 12
    }),
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
    }),
    SharedModule.forRoot(),
    AlertModalModule.forRoot(),
    <%=app.classPrefix%>NavbarModule.forRoot(),
    RouterModule.forRoot(<%=app.classPrefix%>Routes, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [
    ComponentLoaderFactory,
    PositioningService,
    TooltipConfig,
    PaginationConfig,
    TabsetConfig,
    PopoverConfig,
    RuckenCoreServices,
    RuckenWebServices,
    <%=app.classPrefix%>CoreServices,
    <%=app.classPrefix%>WebServices,
    <%=app.classPrefix%>Services,
    BaseResourceSelectInputConfig,
    TextInputConfig,
    SelectInputConfig,
    TableColumnConfig,
    { provide: ThemesService, useClass: WebThemesService },
    { provide: AppService, useClass: WebAppService },
    { provide: TokenService, useClass: WebTokenService },
    { provide: RepositoryHelper, useClass: RepositoryHelper },
    { provide: EndpointHelper, useClass: <%=app.classPrefix%>EndpointHelper },
    { provide: HttpHelper, useClass: <%=app.classPrefix%>HttpHelper },
    { provide: HomeGuardService, useClass: <%=app.classPrefix%>HomeGuardService }
  ],
  bootstrap: [<%=app.classPrefix%>AppComponent]
})
export class <%=app.classPrefix%>AppModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: <%=app.classPrefix%>AppModule };
  }
}