import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

library.add([faTwitter]);

const TwitterMini = () => {
  return (
    <Fragment>
      <section id="twitter">
        <h5>latest tweets</h5>
        <p>this is a sample tweet which will be pulled from my twitter feed</p>
        <h6 title="Follow me on Twitter"><FontAwesomeIcon fixedWidth icon={faTwitter} /> <a href="https://twitter.com/graced_is">@graced_is</a> <em>(30 minutes ago)</em></h6>
      </section>
    </Fragment>
  )
};

export default TwitterMini;