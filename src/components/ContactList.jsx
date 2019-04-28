import React from 'react';
import { CodepenIcon, EmailIcon, GithubIcon, LinkedInIcon } from './icons';

const ContactList = () => (
  <ul className="horizontal-list">
    <li>
      <a className="btn btn--has-border" href="https://github.com/matt3188" target="_blank" rel="noopener noreferrer">
        <GithubIcon fill="#fff" width={50} height={50} />
      </a>
    </li>
    <li>
      <a className="btn btn--has-border" href="http://codepen.io/mattcoleman" target="_blank" rel="noopener noreferrer">
        <CodepenIcon fill="#fff" width={50} height={50} />
      </a>
    </li>
    <li>
      <a
        className="btn btn--has-border"
        href="https://www.linkedin.com/in/matt-coleman-a178783a"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon fill="#fff" width={45} height={45} />
      </a>
    </li>
    <li>
      <a className="btn btn--has-border" href="mailto:hello@matt-coleman.co.uk">
        <EmailIcon fill="#fff" width={50} height={50} />
      </a>
    </li>
  </ul>
);

export default ContactList;
