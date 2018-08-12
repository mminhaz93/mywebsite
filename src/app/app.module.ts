// Module
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
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
import { CountryPipe } from "./pipes/country.pipe";
import { CategoryPipe } from "./pipes/category.pipe";
import { OrderByPipe } from "./pipes/order-by.pipe";
import { PaginationComponent } from "./components/projects/pagination/pagination.component";
import { PagerService } from "./services/pager.service";
import { PorfolioComponent } from "./components/porfolio/porfolio.component";
import { BlogsComponent } from "./components/blogs/blogs/blogs.component";
import { BlogsService } from "./services/blogs.service";
import { AddBlogComponent } from "./components/blogs/add-blog/add-blog.component";
import { AgeCalculatorComponent } from "./components/projects/age-calculator/age-calculator.component";
import { CarouselComponent } from "./components/dashboard/carousel/carousel.component";
import { FooterComponent } from "./components/footer/footer.component";
import { GallaryComponent } from "./components/gallery/gallary.component";
import { UploadComponent } from "./components/gallery/upload/upload.component";
import { LoginComponent } from "./components/gallery/login/login.component";
import { ImageService } from "./services/image.service";
import { AuthenticationService } from "./services/authentication.service";
import { UploadService } from "./services/upload.service";
import { AuthenticationGuard } from "./services/authenticationGuard.service";
import { AngularFireAuthModule } from "angularfire2/auth";

import { ServiceWorkerModule } from "@angular/service-worker";

// Routes
const appRoutes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "todo", component: TodoComponent },
  { path: "employees", component: EmployeesComponent },
  { path: "quotes", component: PaginationComponent },
  { path: "geonames", component: GeonamesComponent },
  { path: "portfolio", component: PorfolioComponent },
  {
    path: "blogs",
    component: BlogsComponent
  },
  { path: "age", component: AgeCalculatorComponent },
  { path: "charts", component: ChartsComponent },
  { path: "gallary", component: GallaryComponent },
  {
    path: "upload",
    component: UploadComponent,
    canActivate: [AuthenticationGuard]
  },
  { path: "login", component: LoginComponent },
  { path: "project/:id", component: SideBarComponent },
  { path: "**", component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    LoginComponent,
    DashboardComponent,
    NavComponent,
    SideBarComponent,
    TodoComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeesComponent,
    PageNotFoundComponent,
    BackToDashBoardComponent,
    LineChartComponent,
    TopoChartComponent,
    ChartsComponent,
    GeonamesComponent,
    CountryPipe,
    CategoryPipe,
    OrderByPipe,
    PaginationComponent,
    PorfolioComponent,
    BlogsComponent,
    AddBlogComponent,
    AgeCalculatorComponent,
    CarouselComponent,
    FooterComponent,
    GallaryComponent
  ],
  imports: [
    AngularFireAuthModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    // RouterModule.forRoot(appRoutes, {useHash: true}),
    RouterModule.forRoot(appRoutes, { useHash: true }),
    //Toastr
    ToastrModule.forRoot(),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 50,
      outerStrokeWidth: 10,
      innerStrokeWidth: 10,
      space: -10,
      outerStrokeColor: "#3B96D7",
      innerStrokeColor: "#E7E8EA",
      animationDuration: 300,
      showSubtitle: false,
      titleFontSize: "30",
      unitsFontSize: "30",
      showInnerStroke: true,
      responsive: true
    }),
    environment.production ? ServiceWorkerModule.register("ngsw-worker.js") : []
  ],
  providers: [
    ProjectService,
    DataService,
    TodoService,
    ChartService,
    EmployeeService,
    GeonameService,
    PagerService,
    BlogsService,
    ImageService,
    AuthenticationGuard,
    AuthenticationService,
    UploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
