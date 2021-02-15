import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarDay, faClock, faUtensils, faCoffee, faBrain, faMapMarkerAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faSpotify } from '@fortawesome/free-brands-svg-icons';
import profilePicture from './../scss/img/profile.jpg';

import BlogContent from './BlogContent';
import CurrentlyMini from './CurrentlyMini';
import TwitterMini from './TwitterMini';
import SpotifyMini from './SpotifyMini';

library.add([faCalendarDay, faClock, faUtensils, faCoffee, faBrain, faMapMarkerAlt, faTwitter, faSpotify, faCog]);

const Layout = () => {
  return (
    <Fragment>
      <header id="top">
        <h1>graced.is</h1>
      </header>
      <div id="backdrop">
        <main className="box-padding">
          <BlogContent />
        </main>
        <aside>
          <hr />
          <section id="about-blurb" className="gold-box box-padding">
            <div id="profile"><img src={profilePicture} alt="Grace's profile" /></div>
            <div id="about-me">
              <p>This is the website of Grace de la Mora, 29. Web nerd, Gryffindor, cat mom of three. Happily married. Loves cooking, baking, designing houses in The Sims 4, and goofing around in Procreate.</p></div>
          </section>
          <hr />
          <nav>
            <ul id="sidebar-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/hired">Hire Me</Link></li>
              <li><Link to="/credits">Credits</Link></li>
            </ul>
          </nav>
          <hr />
          <CurrentlyMini />
          <hr />
          <TwitterMini />
          <hr />
          <SpotifyMini />
        </aside>
      </div>
      <footer id="colophon">
        &copy; grace de la Mora, 2020-2021. <a href="/admin" title="Go to Admin Panel"><FontAwesomeIcon fixedWidth icon={faCog} /></a> &middot; <a href="#top">#back to top</a>
      </footer>
    </Fragment>
  )
};

export default Layout;