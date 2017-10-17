import React from 'react'
import Radium from 'radium'

import PalmTreeImage from '../assets/images/palm_tree.jpg'
import RainbowImage from '../assets/images/rainbow.png'
import NodeImage from '../assets/images/node.png'
import ReactImage from '../assets/images/react.png'
import JSLAImage from '../assets/images/jsla.png'

@Radium
class Home extends React.Component {
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
            color: '#b4c5da',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            textAlign: 'center',
            justifyContent: 'space-around',
            width: '100%'
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'Lobster, sans-serif',
                fontSize: '3em',
                marginBottom: 30,
                '@media (min-width: 769px)': {
                  fontSize: '5em'
                }
              }}
            >
              Hello, I'm Garron.
            </div>
            <div
              style={{
                fontFamily: 'Lobster, sans-serif',
                fontSize: '2em',
                '@media (min-width: 769px)': {
                  fontSize: '3em'
                }
              }}
            >
              Software Engineer
            </div>
          </div>
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-around',
              width: '80%'
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

export default Home
