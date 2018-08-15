import { Injectable } from "@angular/core";
//Firebase
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from "angularfire2/database";
import { Project } from "../model/project.model";

@Injectable()
export class ProjectService {
  projects: AngularFireList<any[]>;
  project: any;
  constructor(private firedb: AngularFireDatabase) {}

  // Get all list
  getProjects() {
    this.projects = this.firedb.list("projects");
    return this.projects;
  }

  getProject(id: string) {
    this.project = this.firedb.object("/projects/" + id) as AngularFireObject<
      Project
    >;
    return this.project;
  }
}
