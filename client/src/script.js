import React from 'react';
import ReactDOM from 'react-dom';

function Content() {
  return (
    <div
      style={{
        alignItems: 'center',
        backgroundImage: 'url(./../assets/images/palm_tree.jpg)',
        backgroundOrigin: 'border-box',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        color: '#fff',
        display: 'flex',
        fontFamily: 'Helvetica Nueue, sans-serif',
        fontWeight: 100,
        height: '100vh',
        position: 'relative',
        textAlign: 'center',
      }}
    >
      <div>
        <img
          alt="Garron's signature"
          height="600px"
          src="./../assets/images/g.png"
        />
      </div>
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
    </div>
  );
}


ReactDOM.render(
  <Content />,
  document.getElementById('content')
);
