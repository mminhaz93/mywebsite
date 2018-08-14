import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-video-player",
  templateUrl: "./video-player.component.html",
  styleUrls: ["./video-player.component.css"]
})
export class VideoPlayerComponent implements OnInit {
  url: string;

  @Input()
  embedId: string;

  constructor() {}

  ngOnInit() {
    this.getEmbedUrl();
  }

  ngOnChanges() {
    this.getEmbedUrl();
  }

  getEmbedUrl() {
    return (
      "https://www.youtube.com/embed/" +
      this.embedId +
      "?autoplay=1&controls=1&disablekb=1&rel=0&showinfo=1&modestbranding=1"
    );
  }
}
