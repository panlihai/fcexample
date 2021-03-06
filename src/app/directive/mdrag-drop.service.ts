import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

export interface DragData {
    [key: string]: any;
    tag: string; // 用于标识该拖拽对象，在具有多个可拖拽的层级中标识该层级，需要用户自己维护唯一性
    data: any; // 要传递的数据
}

@Injectable()
export class MDragDropService {
    private _dragData = new BehaviorSubject<DragData>(null); //总能记住上一次的值
    private obserVable = new Observable();

    setDragData(data: DragData) {
        this._dragData.next(data);
    }

    getDragData(): Observable<DragData> {
        return this._dragData.asObservable();
    }

    clearDragData() {
        this._dragData.next(null);
    }
}
