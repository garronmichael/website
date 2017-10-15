import React from 'react'
import Radium from 'radium'

@Radium
class Content extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: 'url(./../assets/images/palm_tree.jpg)',
          backgroundOrigin: 'border-box',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div
          style={{
            alignItems: 'center',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'center',
            textAlign: 'center',
            width: '100%',
          }}
        >
          <div
            style={{
              marginBottom: 30,
            }}
          >
            <div
              style={{
                fontFamily: 'Lobster, sans-serif',
                fontSize: 80,
                marginBottom: 20,
              }}
            >
              Hello, I'm Garron.
            </div>
            <div
              style={{
                fontFamily: 'Helvetica Nueue, sans-serif',
                fontSize: 16,
                fontWeight: 300,
              }}
            >
              Software engineer and lifelong learner in West Hollywood, CA.
            </div>
          </div>
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-around',
              width: '80%',
            }}
          >
            <img
              alt="react logo"
              height="50px"
              width="50px"
              src="./../assets/images/react.png"
            />
            <img
              alt="node logo"
              height="50px"
              width="50px"
              src="./../assets/images/node.png"
            />
            <img
              alt="j s dot l a logo"
              height="50px"
              width="50px"
              src="./../assets/images/jsla.png"
            />
            <img
              alt="rainbow"
              height="50px"
              width="50px"
              src="./../assets/images/rainbow.png"
            />
          </div>
        </div>
      </div>
    )
  }
}

// Content = Radium(Content);

export default Content
