import React, { Component } from 'react';
import './styles/preloader.css';

class Preloader extends Component {
  componentDidMount() {
    const textElement = document.querySelector('.text');

    textElement.style.visibility = 'hidden';

    setTimeout(() => {
      textElement.style.visibility = 'visible';
      textElement.style.opacity = '1';
    }, 4000); 
  }

  render() {
    return (
      <main>
        <div className="splash">
          <div className="splash_logo">
            SpikeScout
          </div>
          <div className="splash_svg">
            <svg width="100%" height="100%">
              <rect width="100%" height="100%"></rect>
            </svg>
          </div>
          <div className="splash_minimize">
            <svg width="100%" height="100%">
              <rect width="100%" height="100%"></rect>
            </svg>
          </div>
        </div>
        <div className="text">
          <p>Duis quis</p>
          <p>nec sapien</p>
          <button>More</button>
        </div>
      </main>
    );
  }
}

export default Preloader;
