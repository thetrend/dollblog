import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShieldAlt, faPlay, faThList, faPencilAlt, faCogs } from '@fortawesome/free-solid-svg-icons';

library.add([faShieldAlt, faPlay, faThList, faCogs, faPencilAlt]);

const AdminLayout = () => {
  const Repeat = () => {
    let myArray = [];
    let repeatString = 'The present work is a modest effort to reproduce approximately, in modern measures, the venerable epic, Beowulf. Approximately, I repeat; for a very close reproduction of Anglo-Saxon verse would, to a large extent, be prose to a modern ear.';  
    for (var i = 0; i < 9; i++) {
      myArray.push(<p>{repeatString}</p>);
    }
    return myArray;
  };
  return (
    <Fragment>
      <div id="admin-ui-container">
        <main>
          <Repeat />
        </main>
        <aside>
          <ul>
            <li><Link>Categories</Link></li>
            <li><Link>View/Edit Posts</Link></li>
          </ul>
        </aside>
      </div>
      <footer id="control-panel">
        <ul>
          <li title="Admin Panel"><Link to="/admin"><FontAwesomeIcon fixedWidth icon={faShieldAlt} /></Link></li>
          <li title="Write a new Post"><Link to="/admin/post/new"><FontAwesomeIcon fixedWidth icon={faPencilAlt} /></Link></li>
          <li title="Write a Currently"><Link to="/admin/currently/new"><FontAwesomeIcon fixedWidth icon={faThList} /></Link></li>
          <li title="View/Edit Site Settings"><Link to="/admin/settings/site"><FontAwesomeIcon fixedWidth icon={faCogs} /></Link></li>
          <li title="Go to blog"><a href="/"><FontAwesomeIcon fixedWidth icon={faPlay} /></a></li>
        </ul>
      </footer>
    </Fragment>
  )
};

export default AdminLayout;