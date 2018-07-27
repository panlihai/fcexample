import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent, TreeOptions, ParentlistComponent } from 'fccomponent';
import { BgtransfordialogComponent } from './dialog/bgtransfordialog.component';
import { FCEVENT } from 'fccomponent/fc';
import { BgprojectattributeService } from '../services/bgprojectattribute.service';
import { ChooseattrdialogComponent } from './dialog/chooseattrdialog.component';
import { NzModalService } from 'ng-zorro-antd';
import { CopyprojectattrComponent } from './dialog/copyprojectattr.component';
import { chooseicondialogComponent } from '../../../system/components/core/dialog/chooseicondialog.component';
@Component({
  selector: 'bgprojectattribute',
  templateUrl: './bgprojectattribute.component.html',
  styles: [`
  `]
})
export class BgprojectattributeComponent extends ParentlistComponent {
  mainObj: any = {};
  treeOptions: TreeOptions;
  treeSelectObj: any = {};
  pageTabs = [
    { name: '项目属性', icon: '', disabled: false },
    { name: '属性从属关系', icon: '', disabled: false },
    { name: '属性值从属关系', icon: '', disabled: false }
  ];
  treeSelectOptions: any[] = [];
  fcOption1: { fcClass: string; fcEnableSearch: boolean; fcEnableSorting: boolean; fcEnableFilter: boolean; fcEnableColResize: boolean; fcShowToolPanel: boolean; fcPagination: boolean; fcRowGroupPanelShow: string; fcEnableStatusBar: boolean; fcEnableRangeSelection: boolean; fcRowSelection: string; fcEnableAction: boolean; fcCheckboxSelection: boolean; fcEnableEdit: boolean; fcAutoSave: boolean; };
  constructor(public mainService: BgprojectattributeService,
    public router: Router,
    public activeRoute: ActivatedRoute, private modal: NzModalService) {
    super(mainService, router, activeRoute);
    this.fcOption1 = this.mainService.fcOption1;
    this.treeOptions = this.mainService.treeOptions;
  }
  init(): void {
    this.getTreeSelectData();
  }
  getDefaultQuery() {
    return {

    }
  }
  /**
   * @param eventName 事件名称
   * @param context 事件返回参数
   */
  event(eventName: string, event: FCEVENT): void {
    let param: { [key: string]: any } = {};
    switch (eventName) {
      case 'copyProjectAttr':
        param.title = '复制项目属性';
        param.content = CopyprojectattrComponent;
        param.componentParams = { appId1: this.appId, appId2: this.appId };
        this.showModal(param);
        break;
      case 'addAttr':
        param.title = '新增项目属性';
        param.content = BgtransfordialogComponent;
        param.componentParams = {};
        this.showModal(param);
        break;
      case 'selectAttr':
        param.title = '选择属性';
        param.content = chooseicondialogComponent;
        param.componentParams = {};
        this.showModal(param);
        break;
    }
  }
  /**
 * 页面加载的时候就见下拉选框的数据加载出来
 */
  getTreeSelectData(): void {
    // 获取预算分类下拉框的数据
    this.mainService.getDataSource("BGCLASS", { BUSE: 'Y', BLAST: 'Y', ORDER: "SORDER" }).subscribe(result => {
      if (result.CODE === '0' && result.DATA.length !== 0) {
        this.treeSelectOptions = result.DATA.filter(item => item.SPARENTCLASS !== "" && item.SPARENTCLASS !== null);
      }
    })
  }
  /**
   * 窗口打开函数
   */
  showModal(param: any) {
    this.modal.open({
      title: param.title,
      content: param.content,
      onOk() { },
      onCancel() { },
      width: '60%',
      footer: false,
      componentParams: param.componentParams
    }).subscribe(result => {
      // result为弹窗返回的值
    });
  }
  addNew(mainObj: any): boolean {
    return true;
  }
  beforeSave(): boolean {
    return true;
  }
  afterSave(): void {
  }
  beforeDelete(mainObj: any): boolean {
    return true;
  }
  afterDelete(): void {
  }
  beforeEdit(): boolean {
    return true;
  }
  afterEdit(mainObj: any): void {
  }
}
