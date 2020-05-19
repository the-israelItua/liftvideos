import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import VidSearch from "./components/VidSearch";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/videoDetail";

class VideoApp extends Component {
  state = { videos: [], selectedVideo: null };
  onSearchSubmit = async (text) => {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          q: text,
          part: "snippet",
          maxResult: 20,
          key: "AIzaSyCjxg7KHyIYfmS_R3mkCNkqfaXycpb5cpc",
        },
      }
    );
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onSelectVideo = (video) => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.onSearchSubmit("Wiz Kid");
  }
  render() {
    return (
      <div className="container-fluid">
        <VidSearch onSearch={this.onSearchSubmit} />
        <div className="row">
          <div className="col-md-8">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="col-md-4">
            <VideoList
              Videos={this.state.videos}
              onVideoSelect={this.onSelectVideo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default VideoApp;
