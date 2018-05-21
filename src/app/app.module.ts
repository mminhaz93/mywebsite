// Module
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ToastrModule } from "ngx-toastr";
import { RouterModule, Routes } from "@angular/router";
import { NgCircleProgressModule } from "ng-circle-progress";
// Angular Firebase
//npm install firebase@4.6.1 angularfire2@5.0.0-rc.3 --save
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
//Components
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { NavComponent } from "./components/nav/nav.component";
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TodoComponent } from "./components/projects/todo/todo.component";
import { EmployeeComponent } from "./components/projects/employee-management/employee/employee.component";
import { EmployeeListComponent } from "./components/projects/employee-management/employee-list/employee-list.component";
import { EmployeesComponent } from "./components/projects/employee-management/employees/employees.component";
import { BlogsComponent } from "./components/projects/blogs/blogs.component"; // npm install ngx-toastr --save
//Services
import { EmployeeService } from "./services/employee.service";
import { DataService } from "./services/data.service";
import { TodoService } from "./services/todo.service";
import { ProjectService } from "./services/projects.service";
import { environment } from "../environments/environment";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { Employee } from "./model/employee.model";
import { BackToDashBoardComponent } from "./components/back-to-dash-board/back-to-dash-board.component";
import { LineChartComponent } from "./components/projects/charts/line-chart/line-chart.component";
import { TopoChartComponent } from "./components/projects/charts/topo-chart/topo-chart.component";
import { ChartService } from "./services/chart.service";
import { ChartsComponent } from "./components/projects/charts/charts/charts.component";
import { GeonamesComponent } from "./components/projects/geonames/geonames.component";
import { GeonameService } from "./services/geoname.service";
import { CategoryComponent } from "./components/projects/category/category.component";
import { CountryPipe } from "./pipes/country.pipe";
import { CategoryPipe } from "./pipes/category.pipe";
import { OrderByPipe } from "./pipes/order-by.pipe";
import { PaginationComponent } from "./components/projects/pagination/pagination.component";
import { PagerService } from "./services/pager.service";
import { PorfolioComponent } from "./components/porfolio/porfolio.component";

// Routes
const appRoutes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "todo", component: TodoComponent },
  { path: "employees", component: EmployeesComponent },
  { path: "quotes", component: PaginationComponent },
  { path: "geonames", component: GeonamesComponent },
  { path: "resume", component: PorfolioComponent },
  // {path:'events', component: PaginationComponent},
  { path: "charts", component: ChartsComponent },
  // {path:'add-client', component:AddClientComponent, canActivate:[AuthGuard]},
  { path: "project/:id", component: SideBarComponent },
  // {path:'edit-client/:id', component:EditClientComponent, canActivate:[AuthGuard]},
  // {path:'settings', component:SettingsComponent, canActivate:[AuthGuard]},
  { path: "**", component: PageNotFoundComponent }
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
    ChartsComponent,
    GeonamesComponent,
    CountryPipe,
    CategoryPipe,
    OrderByPipe,
    CategoryComponent,
    PaginationComponent,
    PorfolioComponent
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
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 50,
      outerStrokeWidth: 10,
      innerStrokeWidth: 10,
      space : -10,
      outerStrokeColor: "#3B96D7",
      innerStrokeColor: "#E7E8EA",
      animationDuration: 300,
      showSubtitle: false,
      titleFontSize: '30',
      unitsFontSize:'30',
      showInnerStroke:true,
      responsive: false,
    })
  ],
  providers: [
    ProjectService,
    DataService,
    TodoService,
    ChartService,
    EmployeeService,
    GeonameService,
    PagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
