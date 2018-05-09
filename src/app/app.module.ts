// Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToastrModule } from "ngx-toastr";
import { RouterModule, Routes } from '@angular/router';
// Angular Firebase
//npm install firebase@4.6.1 angularfire2@5.0.0-rc.3 --save
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './components/projects/todo/todo.component';
import { EmployeeComponent } from './components/projects/employee-management/employee/employee.component';
import { EmployeeListComponent } from './components/projects/employee-management/employee-list/employee-list.component';
import { EmployeesComponent } from './components/projects/employee-management/employees/employees.component';
import { BlogsComponent } from './components/projects/blogs/blogs.component'; // npm install ngx-toastr --save
//Services
import { EmployeeService } from './services/employee.service';
import { DataService } from './services/data.service';
import { TodoService } from './services/todo.service';
import { ProjectService } from './services/projects.service';

import { environment } from '../environments/environment';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { Employee } from './model/employee.model';
import { BackToDashBoardComponent } from './components/back-to-dash-board/back-to-dash-board.component';
import { LineChartComponent } from './components/projects/charts/line-chart/line-chart.component';
import { TopoChartComponent } from './components/projects/charts/topo-chart/topo-chart.component';
import { ChartService } from './services/chart.service';
import { ChartsComponent } from './components/projects/charts/charts/charts.component';

// Routes
const appRoutes: Routes = [
  { path: '', component: DashboardComponent, },
  { path: 'todo', component: TodoComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'quotes', component: BlogsComponent },
  // {path:'qa', component:},
  // {path:'events', component:},
  { path: 'charts', component: ChartsComponent },
  // {path:'add-client', component:AddClientComponent, canActivate:[AuthGuard]},
  { path: 'project/:id', component: SideBarComponent },
  // {path:'edit-client/:id', component:EditClientComponent, canActivate:[AuthGuard]},
  // {path:'settings', component:SettingsComponent, canActivate:[AuthGuard]},
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    SideBarComponent,
    TodoComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeesComponent,
    BlogsComponent,
    PageNotFoundComponent,
    BackToDashBoardComponent,
    LineChartComponent,
    TopoChartComponent,
    ChartsComponent

  ],
  imports: [
    BrowserModule,

    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    // RouterModule.forRoot(appRoutes, {useHash: true}),
    RouterModule.forRoot(appRoutes),
    //Toastr
    ToastrModule.forRoot(),
  ],
  providers: [
    ProjectService,
    DataService,
    TodoService,
    ChartService,
    EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
