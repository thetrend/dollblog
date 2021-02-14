import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFolderOpen, faCalendarDay, faClock, faCommentAlt, faTags, faUtensils, faCoffee, faBrain, faMapMarkerAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faSpotify } from '@fortawesome/free-brands-svg-icons';
import profilePicture from './../scss/img/profile.jpg';

library.add([faFolderOpen, faCalendarDay, faClock, faCommentAlt, faTags, faUtensils, faCoffee, faBrain, faMapMarkerAlt, faTwitter, faSpotify, faCog]);

const Layout = () => {
  useEffect(() => {
    document.body.classList.add('blog-ui');
  
    return function cleanup() {
      document.body.classList.remove('blog-ui');
    };
  }, []);
  return (
    <Fragment>
      <header id="top">
        <h1>graced.is</h1>
      </header>
      <div id="backdrop">
        <main className="box-padding">
          <article>
            <h2 className="blog-title">to do list</h2>
            <ul className="blog-metadata">
              <li><FontAwesomeIcon fixedWidth icon={faCalendarDay} />Sunday, 14 Feb. 2021 <FontAwesomeIcon fixedWidth icon={faClock} />1:21pm</li>
              <li className="comments-link"><FontAwesomeIcon fixedWidth icon={faCommentAlt} />0 Comments</li>
            </ul>
            <p>Github link to this project: <a href="https://github.com/thetrend/dollblog">https://github.com/thetrend/dollblog</a></p>
            <p>Hello! If you found me through Lambda School, I'm inviting you to watch this space and explore my code through Github!</p>
            <p>I have been a web development hobbyist since 2011 and I have worked with mainly PHP/MySQL and Javascript (specifically Node and Express) as well as MongoDB.</p>
            <p>My aim with this project is to completely code a personal blog including the content management system and to flesh it out during my time with Lambda School to bring it up to professional standards. I will be keeping the To-Do List below updated and once the project is completed, I will publish a tutorial series on my new blog.</p>
            <p>Feel free to click on the Cog Icon below on the footer to view the Admin Panel. For showcase purposes I will allow people to view public information available on the admin panel.</p>
            <h3>Blog UI</h3>
            <ul style={{listStyleType: 'none'}}>
            <li>
                <input type="checkbox" checked readOnly="true" /> Initial Layout
              </li>
              <li>
                <input type="checkbox" readOnly="true" /> Link Styles
              </li>
            </ul>
            <h3>Admin UI</h3>
            <ul style={{listStyleType: 'none'}}>
              <li>
                <input type="checkbox" readOnly="true" /> Initial Layout
              </li>
            </ul>
            <h3>Express API</h3>
            <p>This will be done once the UI is fleshed out.</p>
            <ul className="blog-metadata">
              <li><FontAwesomeIcon fixedWidth icon={faFolderOpen} /><span class="metadata-header">Filed Under:</span> Blog Development</li>
              <li><FontAwesomeIcon fixedWidth icon={faTags} /> <span className="blog-tag">to do list</span><span className="blog-tag">ongoing project</span><span className="blog-tag">skills showcase</span></li>
            </ul>
          </article>
          <article>
            <h2 className="blog-title">ceci n'est pas un blog post</h2>
            <ul className="blog-metadata">
              <li><FontAwesomeIcon fixedWidth icon={faCalendarDay} />Saturday, 13 Feb. 2021 <FontAwesomeIcon fixedWidth icon={faClock} />5:51pm</li>
              <li className="comments-link"><FontAwesomeIcon fixedWidth icon={faCommentAlt} />2 Comments</li>
            </ul>
            <p>This is a blog post example!</p>
            <p>This is additional test text to show what a blog post will look like. The above blog post example will be my to-do list.</p>
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
                  <li>Year: 2015</li>
                </ul>
              </div>
            </div>
            <h6 title="Follow me on Spotify"><FontAwesomeIcon fixedWidth icon={faSpotify} /> @girlintransit <em>(currently playing)</em></h6>
          </section>
        </aside>
      </div>
      <footer id="colophon">
        &copy; grace de la Mora, 2020-2021. <Link to="/admin" title="Go to Admin Panel"><FontAwesomeIcon fixedWidth icon={faCog} /></Link> &middot; <a href="#top">#back to top</a>
      </footer>
    </Fragment>
  )
};

export default Layout;