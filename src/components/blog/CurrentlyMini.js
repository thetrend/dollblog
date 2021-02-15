import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarDay, faClock, faUtensils, faCoffee, faBrain, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

library.add([faCalendarDay, faClock, faUtensils, faCoffee, faBrain, faMapMarkerAlt]);

const CurrentlyMini = () => {
  return (
    <Fragment>
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
        <h6><Link to="/category/currently">...See more entries &raquo;</Link></h6>
      </section>

    </Fragment>
  )
};

export default CurrentlyMini;