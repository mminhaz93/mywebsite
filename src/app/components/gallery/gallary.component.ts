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
  images: Observable<GalleryImage[]>;

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

  ngOnChanges() {
    this.images = this.imageService.getImages();
  }
}
