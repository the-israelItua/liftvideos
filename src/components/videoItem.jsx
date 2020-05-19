import React, { Component } from "react";

class VideoItem extends Component {
  render() {
    const { video, onVideoSelect } = this.props;

    return (
      <div className="container-fluid">
        <div onClick={() => onVideoSelect(video)} className="row video-item">
          <div className="col-12 m-3">
            <img src={video.snippet.thumbnails.medium.url} alt="Loading" />
          </div>

          <div className="col-12">{video.snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
