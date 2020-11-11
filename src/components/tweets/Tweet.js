import React from 'react';

import defaultPhoto from '../../assets/default_profile.png';
import Photo from '../shared/Photo';
import './Tweet.css';

const Tweet = ({ user, createdAt, content }) => (
  <li className="tweet bordered">
    <div className="left">
      <Photo src={defaultPhoto} />
    </div>
    <div className="right">
      <div className="tweet-header">
        <span className="tweet-name">{user.name}</span>
        <span className="tweet-username">{user.username}</span>
        <span className="tweet-separator">·</span>
        <time>{createdAt}</time>
      </div>
      <div>
        {content}
        <div className="tweet-actions"></div>
      </div>
    </div>
  </li>
);

export default Tweet;
