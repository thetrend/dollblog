import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

library.add([faSpotify]);

const SpotifyMini = () => {
  return (
    <Fragment>
      <section id="spotify">
        <h5>now playing</h5>
        <div id="spotify-container">
          <div id="spotify-album"><img src="https://www.slantmagazine.com/wp-content/uploads/2015/10/confident.jpg" alt="Album Art" /></div>
          <div id="spotify-list">
            <ul>
              <li>Title: Yes</li>
              <li>Artist: Demi Lovato</li>
              <li>Album: Confident</li>
              <li>Year: 2015</li>
            </ul>
          </div>
        </div>
        <h6 title="Follow me on Spotify"><FontAwesomeIcon fixedWidth icon={faSpotify} /> <a href="https://open.spotify.com/user/girlintransit?si=F0703uWNQ8SXmQGTj0tO_Q">@girlintransit</a> <em>(currently playing)</em></h6>
      </section>
    </Fragment>
  )
};

export default SpotifyMini;