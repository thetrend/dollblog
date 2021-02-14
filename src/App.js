import { Fragment } from 'react';
import './components/scss/app.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFolderOpen, faCalendarDay, faClock, faCommentAlt, faTags } from '@fortawesome/free-solid-svg-icons';
import profilePicture from './components/scss/img/profile.jpg';

library.add([faFolderOpen, faCalendarDay, faClock, faCommentAlt, faTags]);

function App() {
  return (
    <Fragment>
      <header>
        <h1>graced.is</h1>
      </header>
      <div id="backdrop">
        <main className="box-padding">
          <article>
            <h2 className="blog-title">ceci n'est pas un blog post</h2>
            <ul className="blog-metadata">
              <li><FontAwesomeIcon icon={faCalendarDay} />Saturday, 13 Feb. 2021 <FontAwesomeIcon icon={faClock} />5:51pm</li>
              <li className="comments-link"><FontAwesomeIcon icon={faCommentAlt} />2 Comments</li>
            </ul>
            <p>This is a blog post example!</p>
            <p>I'm a little teapot, short and stout! Here is my handle, here is my spout!</p>
            <p>Check me out on your phone and on your desktop. I'm pretty and responsive! :)</p>
            <ul className="blog-metadata">
              <li><FontAwesomeIcon icon={faFolderOpen} /><span class="metadata-header">Filed Under:</span> Personal</li>
              <li><FontAwesomeIcon icon={faTags} /> <span className="blog-tag">randomness ensues</span></li>
            </ul>
          </article>
          <article>
            <h2 className="blog-title">ceci n'est pas un blog post</h2>
            <ul className="blog-metadata">
              <li><FontAwesomeIcon icon={faCalendarDay} />Saturday, 13 Feb. 2021 <FontAwesomeIcon icon={faClock} />5:51pm</li>
              <li className="comments-link"><FontAwesomeIcon icon={faCommentAlt} />2 Comments</li>
            </ul>
            <p>This is a blog post example!</p>
            <p>I'm a little teapot, short and stout! Here is my handle, here is my spout!</p>
            <p>Check me out on your phone and on your desktop. I'm pretty and responsive! :)</p>
            <p>I am a slightly longer blog post and this is an example of my typing skills. How many correct words per minute can YOU type? Time to hum the battle hymn of the republic because - why not? It's a pretty righteous hymn.</p>
            <ul className="blog-metadata">
              <li><FontAwesomeIcon icon={faFolderOpen} /><span class="metadata-header">Filed Under:</span> Personal</li>
              <li><FontAwesomeIcon icon={faTags} /> <span className="blog-tag">randomness ensues</span></li>
            </ul>
          </article>
        </main>
        <aside>
          <section id="side-bar" className="gold-box box-padding">
            <div id="profile"><img src={profilePicture} alt="Grace's profile" /></div>
            <div id="about-me">
              <p>This is the website of Grace de la Mora, 29. Web nerd, Gryffindor, cat mom of three. Happily married. Loves cooking, baking, designing houses in The Sims 4, and goofing around in Procreate.</p></div>
          </section>
          <hr />
        </aside>
      </div>
      <footer id="colophon">
        &copy; grace de la Mora, 2020-2021.
        </footer>
    </Fragment>
  );
}

export default App;
