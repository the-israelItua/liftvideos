import React, { Component } from "react";

class VideoDetail extends Component {
  render() {
    const { video } = this.props;
    if (!video) {
      return <div>Loading Videos...</div>;
    }
    const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <iframe src={videoSource} className="view"></iframe>
              <div className="card-body">
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
