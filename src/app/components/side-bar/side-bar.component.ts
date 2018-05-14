import { Component, OnInit, Input, ViewChild, ElementRef, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ProjectService } from '../../services/projects.service';
import { Project } from '../../model/project.model';
import { Router, ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {

  menuState: string = 'in';
  id: string;
  // project: Project;

  @Input()
  project: any;

  @Output() 
  eventClicked = new EventEmitter()
  backToDash(){
    this.eventClicked.emit(
      this.menuState
    )
  }

  // https://blog.thecodecampus.de/angular-2-animate-creating-sliding-side-navigation/

  constructor(
    public projectService: ProjectService,
    public route: ActivatedRoute,
    public router: Router,
  ) {
    
  }

  ngOnInit() {
    // // Get ID
    // this.id = this.route.snapshot.params['id'];

    // // Get Client
    // this.projectService.getProject(this.id)
    //   .snapshotChanges()
    //   .subscribe(action => {
    //     this.project = action.payload.toJSON();
    //   });
  }

}
