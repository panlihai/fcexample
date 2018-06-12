import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SysappService } from '../../services/sysapp.service';
import { NzModalService } from 'ng-zorro-antd';
import { FCEVENT } from 'fccomponent/fc';
import { ParentlistComponent, ParentDetailComponent } from 'fccomponent';
import { SysversionService, Sysversion } from '../../services/sysversion.service';
@Component({
  selector: 'sysversiondetail',
  template: `
  <fc-layoutpanel style="height:100%;" class="messagedetail">
  <fc-layoutcol fcSpans="1,2" fccontent>
      <fc-title fcLabel="版本列表" fccontent1></fc-title>
      <div fccontent1 class="tagselect">
          <fc-tag fcIcon="fc-icon-add" fcLabel="新增" (fcEvent)="addversionEvent($event)"></fc-tag>
      </div>
      <fc-timeline [fcOption]="timelineOption" [fcSelectedId]="selectedId" (fcEvent)="timelineEvent($event)" fcLabelPosition="left" fcLeft="30%" class="timeline-content" fccontent1 class="noread"></fc-timeline>
      <fc-layoutpanel fccontent2>
        <fc-title fcLabel="版本明细" fccontent></fc-title>
        <p class="main-title" fccontent>{{mainObj.VERSION}}<span class="mesagge-time">{{mainObj.TS}}</span></p>
        <p class="main-content" fccontent>上次发布版本：{{mainObj.LASTVERSION}}</p>
        <p class="main-content" fccontent>改版内容：{{mainObj.DESCRIPTION}}</p>
        <fc-button fcLabel="修改" fcType="primary" fccontent class="margin-top15" (click)="editVersion()"></fc-button>
        <fc-title fcLabel="修改内容"></fc-title>
        <fc-layoutcol fcSpans="1,1" fccontent style="margin-top:15px;">
          <fc-text fccontent1 fcLabel="发布版本"></fc-text>
          <fc-text fccontent2 fcLabel="上一个版本"></fc-text>
          <fc-textarea fccontent1 fcLabel="描述"></fc-textarea>
          <fc-button fcLabel="保存" fcType="primary" fccontent1 class="margin-top15" (click)="saveVersion()"></fc-button>
        </fc-layoutcol>
      </fc-layoutpanel>     
    </fc-layoutcol>
</fc-layoutpanel>  
  `,
  styles: [`   
  :host ::ng-deep .fc-layoutcol {
    height:100%;
  }
  :host ::ng-deep .fc-layoutgroup{
    height: calc(100% - 40px);    
  }
  :host ::ng-deep .fc-layoutgroup .fc-content {
    height:100%;
  }
  :host ::ng-deep .fc-layoutpanel .fc-content {
    height:100%;
  }
  :host ::ng-deep .fc-layoutpanel .fc-content .fc-content1{
    height:100%;
  }
  :host ::ng-deep .fc-layoutpanel .fc-content .fc-content1>fc-timeline>div{
    height:calc(100% - 44px);
    overflow:auto;
  }
  :host ::ng-deep .fc-layoutpanel .fc-content .fc-content1 nz-tabset{
    height:100%;
  }
  :host ::ng-deep .fc-layoutpanel .fc-content .fc-content2{
    height:100%;
    overflow:auto;
    padding-left: 20px;
  }
  :host ::ng-deep .ant-tabs-content{
    height: calc(100% - 60px);
    overflow: auto;
    margin-top: 30px;
  }
  .list-search {
    width:100%;
  }
  .list-search:after{
    content:'';
    display:block;
    clear:both;
  }
  .list-search-every{
    width:24%;
    float:left;
  }
  :host ::ng-deep .messagedetail>.fc-layoutpanel{
    height:100%;
  }
  :host ::ng-deep .margin-top15>button{
    margin-top:15px;
  }
  :host ::ng-deep .messagedetail .fc-title{
    margin-left:0px;
  }
  :host ::ng-deep .ant-tabs-nav{
    width:100%;
  }
  :host ::ng-deep .ant-tabs-nav>.ant-tabs-tab{
    width:50%;
    text-align:center;
    margin-right:0px;
  }
  .tagselect{
    position: absolute;
    right: 10px;
    top: 15px;
  }
  .messagedetail .main-title{
    min-height:30px;
    font-size:14px;
    font-weight:bold;
  }
  .messagedetail .main-content{
    min-height:30px;
  }
  .mesagge-time{
    margin-left: 10px;
    font-size: 14px;
  }
  .messagelist{
    margin-top:10px;
  }
  .messagecontent{
    font-size: 13px;
    color: #333;
  }
  `]
})
export class SysversionComponent extends ParentDetailComponent {
  //选中的一条记录
  selectedId: any;
  //版本列表
  sysversionList: Sysversion[];
  //时间轴
  timelineOption = this.mainService.initTimelineOption();
  //编辑对象
  editObj: any;
  constructor(public mainService: SysversionService,
    public router: Router,
    public activeRoute: ActivatedRoute, private modal: NzModalService) {
    super(mainService, router, activeRoute);
  }
  init(): void {
    //查看版本
    this.mainService.findAllVersion().subscribe(result => {
      if (result.CODE === '0') {
        this.sysversionList = result.DATA;
        this.timelineOption.fcValues = result.DATA;
        this.timelineOption.fcValues.forEach(item => {
          item.color = 'normal';
        });
      }
    });
  }
  /**
   * 
   * @param eventName 事件名称
   * @param context 按钮内容
   */
  event(eventName: string, context: any): void {
    switch (eventName) {

    }
  }
  /**
   * 时间轴事件
   * @param event 
   */
  timelineEvent(event) {
    switch (event.eventName) {
      case 'selected'://选中一条
        this.mainObj = event.param;
    }
  }
  /**
   * 新增版本记录
   */
  addversionEvent() {

  }
  /**
   * 修改版本
   */
  editVersion() {

  }
  /**
   * 保存版本
   */
  saveVersion() {

  }
}
