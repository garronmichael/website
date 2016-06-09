import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Content extends Component {

  constructor(props) {
    super(props);
    this.profilePhotoTransition = this.profilePhotoTransition.bind(this);
  }

  profilePhotoTransition() {
    const photo = this.refs.profilePhoto;
    photo.style.width = 0;
    setTimeout(() => {
      photo.style.width = '500px';
    }, 1000);
  }

  render() {
    return (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <div>
          <img
            alt="Garron at Poinsettia Park in West Hollywood, CA."
            onClick={this.profilePhotoTransition}
            ref="profilePhoto"
            style={{
              borderRadius: '50%',
              height: 500,
              transition: 'all 1s',
              width: 500,
            }}
            src="./../assets/images/bball.jpg"
          />
          <div>
            <i className="fa fa-twitter" />
            <i className="fa fa-github" />
            <i className="fa fa-email" />
          </div>
        </div>
        <div>
          <div>Hello, I'm Garron Sanchez. I am a software engineer in West Hollywood, CA.</div>
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
          Made with
            <img
              alt="React logo."
              style={{
                height: 20,
                marginLeft: 5,
                width: 20,
              }}
              src="./../assets/images/react.png"
            />
          &
            <img
              alt="React logo."
              style={{
                height: 20,
                marginLeft: 5,
                width: 20,
              }}
              src="./../assets/images/node.png"
            />
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <Content />,
  document.getElementById('content')
);
