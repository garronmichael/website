import React from 'react'
import Radium from 'radium'

import PalmTreeImage from '../assets/images/palm_tree.jpg'

@Radium
class Hire extends React.Component {
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
              Accepting Projects
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
              <a
                key="email-button"
                href="mailto:garron.michael@gmail.com"
                style={{
                  color: '#b4c5da',
                  border: '3px solid #b4c5da',
                  borderRadius: 10,
                  textDecoration: 'none',
                  paddingLeft: 10,
                  paddingRight: 10,
                  marginRight: 5,
                  transition: 'all 0.5s',
                  cursor: 'pointer',
                  ':hover': {
                    backgroundColor: '#b4c5da',
                    color: '#fff'
                  }
                }}
              >
                Email me
              </a>
              <span> for a free consultation.</span>
            </div>
          </div>
          <button
            key="home-button"
            onClick={() => this.props.history.push('/')}
            style={{
              border: '3px solid #cbb2bb',
              borderRadius: 10,
              backgroundColor: 'transparent',
              color: '#cbb2bb',
              fontFamily: 'Lobster, sans-serif',
              width: '65%',
              transition: 'all 0.5s',
              cursor: 'pointer',
              fontSize: '3em',
              ':hover': {
                backgroundColor: '#cbb2bb',
                color: '#fff'
              }
            }}
          >
            Home
          </button>
        </div>
      </div>
    )
  }
}

export default Hire
