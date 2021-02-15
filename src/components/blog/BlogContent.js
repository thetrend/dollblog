import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFolderOpen, faCalendarDay, faClock, faCommentAlt, faTags } from '@fortawesome/free-solid-svg-icons';

library.add([faFolderOpen, faCalendarDay, faClock, faCommentAlt, faTags]);

const BlogContent = () => {
  return (
    <Fragment>
      <article>
        <h2 className="blog-title">to do list</h2>
        <ul className="blog-metadata">
          <li><FontAwesomeIcon fixedWidth icon={faCalendarDay} /><Link to="/post/2021/02/14/012130-to-do-list/" title="Link to this article">Sunday, 14 Feb. 2021</Link> <FontAwesomeIcon fixedWidth icon={faClock} /><Link to="/post/2021/02/14/012130-to-do-list/" title="Link to this article">1:21pm</Link></li>
          <li className="comments-link"><FontAwesomeIcon fixedWidth icon={faCommentAlt} /><Link to="/post/2021/02/14/012130-to-do-list/#comments" title="Read or leave a Comment">0 Comments</Link></li>
        </ul>
        <p>Github link to this project: <a href="https://github.com/thetrend/dollblog">https://github.com/thetrend/dollblog</a></p>
        <p>Hello! If you found me through Lambda School, I'm inviting you to watch this space and explore my code through Github!</p>
        <p>I have been a web development hobbyist since <span style={{ textDecoration: 'line-through' }}>2011</span> <strong>correction: 2003</strong> (I can't count) and I have worked with mainly PHP/MySQL and Javascript (specifically Node and Express) as well as MongoDB.</p>
        <p>My aim with this project is to completely code a personal blog including the content management system and to flesh it out during my time with Lambda School to bring it up to professional standards. I will be keeping the To-Do List below updated and once the project is completed, I will publish a tutorial series on my new blog.</p>
        <p>Feel free to click on the Cog Icon below on the footer to view the Admin Panel. For showcase purposes I will allow people to view public information available on the admin panel.</p>
        <h3>Blog UI</h3>
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <input type="checkbox" checked disabled={true} /> Initial Layout
              </li>
          <li>
            <input type="checkbox" disabled={true} /> Link Styles
              </li>
        </ul>
        <h3>Admin UI</h3>
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <input type="checkbox" disabled={true} /> Initial Layout
              </li>
        </ul>
        <h3>Express API</h3>
        <p>This will be done once the UI is fleshed out.</p>
        <ul className="blog-metadata">
          <li><FontAwesomeIcon fixedWidth icon={faFolderOpen} /><span class="metadata-header">Filed Under:</span> <Link to="/category/blog-development">Blog Development</Link></li>
          <li><FontAwesomeIcon fixedWidth icon={faTags} /> <Link to="/tagged/to-do-list"><span className="blog-tag">to do list</span></Link><Link to="/tagged/ongoing-project"><span className="blog-tag">ongoing project</span></Link><Link to="/tagged/skills-showcase"><span className="blog-tag">skills showcase</span></Link></li>
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
    </Fragment>
  )
};

export default BlogContent;