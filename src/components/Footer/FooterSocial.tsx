import * as React from 'react';

export default function FooterSocial() {
  return (
    <div className="social">
      <ul>
        <li><a className="btn" target="_blank" href="https://twitter.com/fabasoad"><i className="fab fa-twitter fa-2x"></i></a></li>
        <li><a className="btn" target="_blank" href="https://github.com/fabasoad"><i className="fab fa-github fa-2x"></i></a></li>
        <li><a className="btn" target="_blank" href="https://www.linkedin.com/in/yevhenfabizhevskyi/"><i className="fab fa-linkedin fa-2x"></i></a></li>
        <li><a className="btn" target="_blank" href="https://stackoverflow.com/users/470214/fabasoad"><i className="fab fa-stack-overflow fa-2x"></i></a></li>
        <li><a className="btn" target="_blank" href="https://dev.to/fabasoad"><i className="fab fa-dev fa-2x"></i></a></li>
      </ul>
    </div>
  );
}