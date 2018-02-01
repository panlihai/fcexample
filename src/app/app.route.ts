import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './system/signin/signin.component';
import { SignupComponent } from './system/signup/signup.component';
export const AppRouters: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',//首页
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: '',//基础组件
                loadChildren: './samples/basic/index.module#BasicModule'
            }
        ]
    }, {
        path: 'signin',//登录
        component: SigninComponent
    }, {
        path: 'signup',//注册
        component: SignupComponent
    }
];