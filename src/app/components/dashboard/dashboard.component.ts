import {
  Component,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
  Input
} from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import { ProjectService } from "../../services/projects.service";
import { Project } from "../../model/project.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  animations: [
    trigger("slideInOut", [
      state(
        "in",
        style({
          transform: "translate3d(0, 0, 0)"
        })
      ),
      state(
        "out",
        style({
          transform: "translate3d(100%, 0, 0)"
        })
      ),
      transition("in => out", animate("400ms ease-in-out")),
      transition("out => in", animate("400ms ease-in-out"))
    ])
  ]
})
export class DashboardComponent implements OnInit {
  project: Project;

  id: any;

  menuState: string = "out";
  projectsArray: Project[];

  toggleMenu(key) {
    this.menuState = "in";
    this.id = key;
    this.project = this.getProject(this.id);
  }

  // Projects
  constructor(
    private projectService: ProjectService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.projectService
      .getProjects()
      .snapshotChanges()
      .subscribe(item => {
        //initialized to empty array
        this.projectsArray = [];
        item.forEach(element => {
          var x = element.payload.toJSON();
          x["$key"] = element.key;
          this.projectsArray.push(x);
        });
      });
  }

  getProject(id): Project {
    // Get Client
    this.projectService
      .getProject(this.id)
      .snapshotChanges()
      .subscribe(action => {
        this.project = action.payload.toJSON();
      });
    return this.project;
  }

  gotData(data) {
    this.menuState = data;
    this.menuState = this.menuState === "data" ? "in" : "out";
  }

  link(url) {
    return "../../../assets/images/project/" + url;
  }
}
