import React from 'react';
import T from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import defaultPhoto from '../../assets/default_profile.png';
import Photo from '../shared/Photo';
import './Tweet.css';

const Tweet = ({ user, createdAt, content, history, id }) => (
  <article
    className="tweet bordered"
    onClick={() => history.push(`/tweet/${id}`)}
  >
    <div className="left">
      <Photo src={defaultPhoto} className="tweet-photo" />
    </div>
    <div className="right">
      <div className="tweet-header">
        <span className="tweet-name">{user.name}</span>
        <span className="tweet-username">{user.username}</span>
        <span className="tweet-separator">·</span>
        <time dateTime={createdAt}>
          {formatDistanceToNow(new Date(createdAt))}
        </time>
      </div>
      <div>
        {content}
        <div className="tweet-actions"></div>
      </div>
    </div>
  </article>
);

Tweet.propTypes = {
  user: T.shape({ name: T.string.isRequired, username: T.string.isRequired })
    .isRequired,
  createdAt: T.string.isRequired,
  content: T.string,
};

Tweet.defaultProps = {
  content: 'Nothing here!',
};

export default Tweet;
