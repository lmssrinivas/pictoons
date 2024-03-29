import React, {Component} from 'react';
import {Link} from 'react-router';
import NavComponent from './nav';
import {isLoggedIn} from '../utils/authService';
import {CloudinaryContext, Transformation, Video} from 'cloudinary-react';
import axios from 'axios';

class DisplayComponent extends Component {
  
  state = { videos: [] };

  getAllVideos() {
    axios
      .get('http://res.cloudinary.com/unicodeveloper/video/list/miniflix.json')
      .then(res => {
        console.log(res.data.resources);
        this.setState({videos: res.data.resources});
      });
  }

  componentDidMount() {
    this.getAllVideos();
  }

  render() {

    const {videos} = this.state;

    return (
      <div>
        <NavComponent/>
        <h3 className="text-center">
          Latest Videos on Miniflix
        </h3>
        <hr/>

        <div className="col-sm-12">
          <CloudinaryContext cloudName="unicodeveloper">
            {videos.map((data, index) => (
              <div className="col-sm-4" key={index}>
                <div className="embed-responsive embed-responsive-4by3">
                  <Video publicId={data.public_id} width="300" height="300" controls></Video>
                </div>
                <div>
                  Created at {data.created_at}
                </div>

              </div>
            ))
}
          </CloudinaryContext>
        </div>
      </div>
    );
  }
}

export default DisplayComponent;