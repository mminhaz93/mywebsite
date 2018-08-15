import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { AngularFireAuth } from "angularfire2/auth";
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from "angularfire2/database";
import { FirebaseApp } from "angularfire2";
import "firebase/storage";
import { GalleryImage } from "../model/galleryImage.model";
import * as firebase from "firebase";

@Injectable()
export class ImageService {
  private uid: string; //Authenticaled user id
  images: AngularFireList<any[]>;
  image: any;

  constructor(private db: AngularFireDatabase) {}

  getImages() {
    this.images = this.db.list("uploads");
    return this.images;
  }

  getImage(id: string) {
    this.image = this.db.object("/uploads/" + id) as AngularFireObject<
      GalleryImage
    >;
    return this.image;
  }
}
