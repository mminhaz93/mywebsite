import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { FirebaseApp } from "angularfire2";
import "firebase/storage";
import { GalleryImage } from "../model/galleryImage.model";
import * as firebase from "firebase";

@Injectable()
export class ImageService {
  private uid: string; //Authenticaled user id

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {}

  getImages(): Observable<GalleryImage[]> {
    return this.db
      .list("uploads")
      .valueChanges()
      .map(array => array.reverse());
  }

  getImage(key: string) {
    console.log(key);
    return firebase
      .database()
      .ref("uploads/" + key)
      .once("value")
      .then(snap => snap.val());
  }
}
