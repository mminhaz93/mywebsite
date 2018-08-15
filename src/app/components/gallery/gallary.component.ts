import { Component, OnInit, OnChanges } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { GalleryImage } from "../../model/galleryImage.model";
import { ImageService } from "../../services/image.service";

@Component({
  selector: "app-gallary",
  templateUrl: "./gallary.component.html",
  styleUrls: ["./gallary.component.css"]
})
export class GallaryComponent {
  images: GalleryImage[];

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.imageService
      .getImages()
      .snapshotChanges()
      .subscribe(item => {
        //initialized to empty array
        this.images = [];
        item.forEach(element => {
          var x = element.payload.toJSON();
          x["$key"] = element.key;
          this.images.push(x);
        });
      });
  }

  ngOnChanges() {
    this.imageService.getImages();
  }

  link(url) {
    return "../../../assets/images/gallary/" + url;
  }
}
