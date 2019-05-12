// @flow
import React from 'react';

import Icon from 'components/Icon';

const ContactList = () => (
  <ul className="list horizontal-list contact-list">
    <li>
      <a className="btn btn--has-border" href="https://github.com/matt3188" target="_blank" rel="noopener noreferrer">
        <Icon name="github" width={50} height={50} viewBox="0 0 496 512" />
      </a>
    </li>
    <li>
      <a className="btn btn--has-border" href="http://codepen.io/mattcoleman" target="_blank" rel="noopener noreferrer">
        <Icon name="codepen" width={50} height={50} viewBox="0 0 512 512" />
      </a>
    </li>
    <li>
      <a
        className="btn btn--has-border"
        href="https://www.linkedin.com/in/matt-coleman-a178783a"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="linkedin" width={45} height={45} viewBox="0 0 24 24" />
      </a>
    </li>
    <li>
      <a className="btn btn--has-border" href="mailto:hello@matt-coleman.co.uk">
        <Icon name="email" width={50} height={50} viewBox="0 0 512 512" />
      </a>
    </li>
  </ul>
);

export default ContactList;
