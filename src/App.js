import { Fragment } from 'react';
import './components/scss/app.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFolderOpen, faCalendarDay, faClock, faCommentAlt, faTags, faUtensils, faCoffee, faBrain, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faSpotify } from '@fortawesome/free-brands-svg-icons';
import profilePicture from './components/scss/img/profile.jpg';

library.add([faFolderOpen, faCalendarDay, faClock, faCommentAlt, faTags, faUtensils, faCoffee, faBrain, faMapMarkerAlt, faTwitter, faSpotify]);

function App() {
  return (
    <Fragment>
      <header id="top">
        <h1>graced.is</h1>
      </header>
      <div id="backdrop">
        <main className="box-padding">
          <article>
            <h2 className="blog-title">ceci n'est pas un blog post</h2>
            <ul className="blog-metadata">
              <li><FontAwesomeIcon fixedWidth icon={faCalendarDay} />Saturday, 13 Feb. 2021 <FontAwesomeIcon fixedWidth icon={faClock} />5:51pm</li>
              <li className="comments-link"><FontAwesomeIcon fixedWidth icon={faCommentAlt} />2 Comments</li>
            </ul>
            <p>This is a blog post example!</p>
            <p>I'm a little teapot, short and stout! Here is my handle, here is my spout!</p>
            <p>Check me out on your phone and on your desktop. I'm pretty and responsive! :)</p>
            <ul className="blog-metadata">
              <li><FontAwesomeIcon fixedWidth icon={faFolderOpen} /><span class="metadata-header">Filed Under:</span> Personal</li>
              <li><FontAwesomeIcon fixedWidth icon={faTags} /> <span className="blog-tag">randomness ensues</span></li>
            </ul>
          </article>
          <article>
            <h2 className="blog-title">ceci n'est pas un blog post</h2>
            <ul className="blog-metadata">
              <li><FontAwesomeIcon fixedWidth icon={faCalendarDay} />Saturday, 13 Feb. 2021 <FontAwesomeIcon fixedWidth icon={faClock} />5:51pm</li>
              <li className="comments-link"><FontAwesomeIcon fixedWidth icon={faCommentAlt} />2 Comments</li>
            </ul>
            <p>This is a blog post example!</p>
            <p>I'm a little teapot, short and stout! Here is my handle, here is my spout!</p>
            <p>Check me out on your phone and on your desktop. I'm pretty and responsive! :)</p>
            <p>I am a slightly longer blog post and this is an example of my typing skills. How many correct words per minute can YOU type? Time to hum the battle hymn of the republic because - why not? It's a pretty righteous hymn.</p>
            <ul className="blog-metadata">
              <li><FontAwesomeIcon fixedWidth icon={faFolderOpen} /><span class="metadata-header">Filed Under:</span> Personal</li>
              <li><FontAwesomeIcon fixedWidth icon={faTags} /> <span className="blog-tag">randomness ensues</span></li>
            </ul>
          </article>
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
              <li>Home</li>
              <li>About</li>
              <li>Hire Me</li>
              <li>Credits</li>
            </ul>
          </nav>
          <hr />
          <section id="currently">
            <h5>currently</h5>
            <ul id="currently-list">
              <li title="Posted on date"><FontAwesomeIcon fixedWidth icon={faCalendarDay} /> Sat 2/13</li>
              <li title="Posted at time"><FontAwesomeIcon fixedWidth icon={faClock} /> 10:42pm ET</li>
              <li title="Location"><FontAwesomeIcon fixedWidth icon={faMapMarkerAlt} />My home office</li>
              <li title="Eating"><FontAwesomeIcon fixedWidth icon={faUtensils} /> Popeye's</li>
              <li title="Drinking"><FontAwesomeIcon fixedWidth icon={faCoffee} /> Strawberry soda</li>
              <li title="Thinking about"><FontAwesomeIcon fixedWidth icon={faBrain} /> Valentine's day</li>
            </ul>
            <h6>...See more entries &raquo;</h6>
          </section>
          <hr />
          <section id="twitter">
            <h5>latest tweets</h5>
            <p>this is a sample tweet which will be pulled from my twitter feed</p>
            <h6 title="Follow me on Twitter"><FontAwesomeIcon fixedWidth icon={faTwitter} /> @graced_is <em>(30 minutes ago)</em></h6>
          </section>
          <hr />
          <section id="spotify">
            <h5>now playing</h5>
            <div id="spotify-container">
            <div id="spotify-album"><img src="https://www.slantmagazine.com/wp-content/uploads/2015/10/confident.jpg" alt="Album Art" /></div>
            <div id="spotify-list">
              <ul>
                <li>Title: Yes</li>
                <li>Artist: Demi Lovato</li>
                <li>Album: Confident</li>
                <li>Year: 2012</li>
              </ul>
            </div>
            </div>
            <h6 title="Follow me on Spotify"><FontAwesomeIcon fixedWidth icon={faSpotify} /> @girlintransit <em>(currently playing)</em></h6>
          </section>
        </aside>
      </div>
      <footer id="colophon">
        &copy; grace de la Mora, 2020-2021. <a href="#top">#back to top</a>
        </footer>
    </Fragment>
  );
}

export default App;
