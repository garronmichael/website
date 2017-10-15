import React from 'react'
import Radium from 'radium'

import PalmTreeImage from '../assets/images/palm_tree.jpg'
import RainbowImage from '../assets/images/rainbow.png'
import NodeImage from '../assets/images/node.png'
import ReactImage from '../assets/images/react.png'
import JSLAImage from '../assets/images/jsla.png'

@Radium
class Content extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${PalmTreeImage})`,
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
              src={ReactImage}
            />
            <img
              alt="node logo"
              height="50px"
              width="50px"
              src={NodeImage}
            />
            <img
              alt="j s dot l a logo"
              height="50px"
              width="50px"
              src={JSLAImage}
            />
            <img
              alt="rainbow"
              height="50px"
              width="50px"
              src={RainbowImage}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Content
