import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Carousel} from "react-materialize"
import Pixupload from "../../components/Upload/Pixuploader"
import UploadModal from "../../components/UploadModal/UploadModal"
import API from '../../utils/API.js'
import TimelineImage from  '../../components/TimelineImage'
import axios from "axios";

class Timeline extends Component {

  constructor() {
    super();

    this.state = {
      Community_images: [],
      Timeline_images: []
    }
  } // End of Constructor

  componentWillMount() {
    this.fetchCommunityImages();
    this.fetchTimelineImages();
  }

  fetchCommunityImages() { // Function to Fetch Community Images

    let fetchedimages = [];

    for (let key in API.imageData) { // Get Images from API Ajax Call and Store into Variable fetchedImages
      fetchedimages.push(API.imageData[key]);
    }
    console.log(fetchedimages)

    this.setState(prevState => ({
      Community_images: [...prevState].concat(fetchedimages)
    }), () => console.log(this.state))
  }

  fetchTimelineImages() { // Function to Fetch Timeline Images

    let fetchedimages = [];

    axios.get('http://localhost:8080/api/images')
        .then(function(response) {
          console.log(response);
          this.setState(prevState => ({
              Timeline_images: [...prevState].concat(fetchedimages)
          }), () => console.log(this.state))

        })
        .catch(function (error) {
          console.log(error);
        });
  }

  render() {
    return (

      <div>

      <nav className="teal accent-4" role="navigation">
        {/* <Pixupload /> */}
        <UploadModal />
        <div className="nav-wrapper container">
          <ul id="nav-mobile" className="side-nav">
            <li>
              <a href="#">#3651</a>
            </li>
          </ul>
          <a href="#" data-activates="nav-mobile" className="button-collapse">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <br/><br/>
          <h1 className="header center blue-grey-text">Welcome to your timeline</h1>
        </div>
      </div>
      <div className="container">
        <div className="section">
          {/* Icon Section */}
          <div className="row">
            <div className="carousel" id="imageCarousel">

             { this.state.Timeline_images.map((base64_image) => <a className="carousel-item"><TimelineImage  base64_image={base64_image} /></a>)}
            
          </div>
        </div>
        <br/><br/>
        <div className="section"></div>
      </div>

    </div>
    </div>
    );
  }
}

export default Timeline;
