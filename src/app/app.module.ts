import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {
  FccoreModule,
  AppService,
  DaoService,
  CacheService,
  CommonService,
  MenuService,
  MessageService,
  UserService,
  SysappbuttonsService,
  SysappfieldsService,
  SysappfldgroupService,
  SysapplinksService,
  SysdicappdetailService,
  SysdicappService,
  SysdicdetailService,
  SysdicService,
  SysmessageService,
  SysinterfaceparamService,
  SysinterfaceService,
  SysmenuService,
  SysstyleService
} from 'fccore';
import {
  FcnavModule,
  FcbasicModule,
  FcadModule,
  FcmodalModule,
  FctabModule,
  FctlbModule,
  FcsearchModule,
  FcalertModule,
  FclayoutModule,
  FclistModule
} from 'fccomponent';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { AppRouters } from './app.route';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './system/components/signin/signin.component';
import { SignupComponent } from './system/components/signup/signup.component';
import { SpreaddemoComponent } from './system/components/spreaddemo/spreaddemo.component';
import { SpreadSheetsModule } from '../assets/plugin/spread/gc.spread.sheets.angular.11.0.0';
import { SpreaddemoService } from './system/services/spreaddemo.service';
@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRouters),
    FccoreModule.forRoot(environment),
    FcnavModule,
    FcbasicModule,
    FcadModule,
    FctabModule,
    FctlbModule,
    FcsearchModule,
    FcalertModule,
    FclayoutModule,
    FclistModule,
    FcmodalModule,
    SpreadSheetsModule
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    SpreaddemoComponent
  ],
  providers: [
    AppService,
    DaoService,
    CacheService,
    CommonService,
    MenuService,
    MessageService,
    UserService,
    SysappbuttonsService,
    SysappfieldsService,
    SysappfldgroupService,
    SysapplinksService,
    SysdicappdetailService,
    SysdicappService,
    SysdicdetailService,
    SysdicService,
    SysmessageService,
    SysinterfaceparamService,
    SysinterfaceService,
    SysmenuService,
    SysstyleService,
    SpreaddemoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
