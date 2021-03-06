import { Component, OnInit } from "@angular/core";
import { ImageService } from "../../../services/image.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-image-detail",
  templateUrl: "./image-detail.component.html",
  styleUrls: ["./image-detail.component.css"]
})
export class ImageDetailComponent implements OnInit {
  private imageUrl = "";

  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute
  ) {}

  getImageUrl(key: string) {
    this.imageService.getImage(key).then(image => (this.imageUrl = image.url));
  }

  ngOnInit() {
    this.getImageUrl(this.route.snapshot.params["id"]);
  }

  link(url) {
    return "../../../assets/images/gallary/" + url;
  }
}
