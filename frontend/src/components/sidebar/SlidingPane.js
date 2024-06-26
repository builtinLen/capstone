import React, { useState } from 'react';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './SlidingPane.css';

const SlidingPanel = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(isClicked ? false : true);
  };

  return (
    <div className="SlidingPanel">
      <div style={{ marginTop: '1em' }}>
        <button onClick={handleClick}>
          {isClicked === false ? 'Click Here!' : 'Close'}
        </button>
      </div>

      <SlidingPane
        className="Pop-out-slider"
        isOpen={isClicked}
        title="Spotify Web Player Clone"
        from="left"
        width="18em"
        onRequestClose={handleClick}
      >
        <div className="Pop-out-slider-content">
          <p>
            *made by
            <a
              href="https://github.com/builtinlen"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Lenny Rodriguez
            </a>
          </p>
          <br />

          <a
            href="https://github.com/builtinLen/capstone"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Github Repo
          </a>

          <div className="Pop-out-slider-links">
            <a
              href="www.linkedin.com/in/lennyrodriguez000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                title="LinkedIn"
                width="30px"
                height="30px"
              />
            </a>
            <a
              href="https://github.com/builtinlen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png"
                alt="GitHub"
                title="GitHub"
                width="30px"
                height="30px"
              />
            </a>
          </div>

          <p>
            Application data sourced from{' '}
            <a
              href="https://developer.spotify.com/documentation/web-api/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spotify API
            </a>
          </p>
          <br />

          <p>PLAYER DOES NOT ACTUALLY PLAY MUSIC</p>
          <br />
          <br />

          <p>
            *This application is not produced, endorsed, supported, or
            affiliated with Spotify or its affiliated companies
          </p>
          <br />
          <br />
        </div>
      </SlidingPane>
    </div>
  );
};

export default SlidingPanel;
