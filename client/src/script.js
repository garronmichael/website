import React from 'react';
import ReactDOM from 'react-dom';

function Content() {
  return (
    <div
      style={{
        backgroundImage: 'url(./../assets/images/palm_tree.jpg)',
        backgroundOrigin: 'border-box',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        height: '100vh',
      }}
    >
      <div
        style={{
          alignItems: 'center',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'Helvetica Nueue, sans-serif',
          fontWeight: 100,
          justifyContent: 'space-around',
          textAlign: 'center',
          width: '50%',
        }}
      >
        <div>
          <span
            style={{
              fontWeight: 600,
              marginRight: 5,
            }}
          >
            Hello, I'm Garron.
          </span>
          Software engineer in West Hollywood, CA.
        </div>
        <div>
          <img
            alt="Garron's signature"
            height="300px"
            src="./../assets/images/g.png"
          />
        </div>
      </div>
    </div>
  );
}


ReactDOM.render(
  <Content />,
  document.getElementById('content')
);
