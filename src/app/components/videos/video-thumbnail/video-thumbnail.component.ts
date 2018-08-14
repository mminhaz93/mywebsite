import { Component, OnInit, OnDestroy, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { VideoItem } from "../video";
import { VideoService } from "../videos.service";

@Component({
  selector: "app-video-thumbnail",
  templateUrl: "./video-thumbnail.component.html",
  styleUrls: ["./video-thumbnail.component.css"]
})
export class VideoThumbnailComponent implements OnInit, OnDestroy {
  embedId: string;

  private req: any;
  title = "Video List";
  videoList: [VideoItem];
  constructor(private _video: VideoService) {}

  ngOnInit() {
    this.req = this._video.list().subscribe(data => {
      this.videoList = data as [VideoItem];
    });
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }

  viewVideo(embedId) {
    this.embedId = embedId;
  }
}
