import React, { Component } from "react";
import VideoItem from "./videoItem";

class VideoList extends Component {
  render() {
    const videoComp = this.props.Videos.map((video) => (
      <VideoItem
        video={video}
        key={video.id.videoId}
        onVideoSelect={this.props.onVideoSelect}
      />
    ));
    return videoComp;
  }
}

export default VideoList;
