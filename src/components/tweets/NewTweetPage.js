import React from 'react';

import Layout from '../layout';
import { Button, Photo, Textarea } from '../shared';
import defaultPhoto from '../../assets/default_profile.png';

import { createTweet } from '../../api/tweets';

import './NewTweetPage.css';
import { Redirect } from 'react-router-dom';

const MAX_CHARACTERS = 280;

class NewTweetPage extends React.Component {
  state = {
    tweet: { content: '' },
    error: null,
    createdTweetId: null,
  };

  textAreaRef = React.createRef();

  handleChange = ({ target: { value } }) => {
    this.setState({ tweet: { content: value } });
  };

  handleSubmit = async ev => {
    const { tweet } = this.state;
    ev.preventDefault();
    try {
      const createdTweet = await createTweet(tweet);
      this.setState({ createdTweetId: createdTweet.id });
    } catch (error) {
      this.setState({ error });
    }
  };

  componentDidMount() {
    this.textAreaRef.current.focus();
  }

  render() {
    const {
      tweet: { content },
      createdTweetId,
    } = this.state;

    if (createdTweetId) {
      return <Redirect to={`/tweet/${createdTweetId}`} />;
    }

    return (
      <Layout title="What are you thinking?">
        <div
          className="newTweetPage bordered"
          style={{ borderBottomWidth: 10 }}
        >
          <div className="left">
            <Photo src={defaultPhoto} alt="" />
          </div>
          <div className="right">
            <form onSubmit={this.handleSubmit}>
              <Textarea
                className="newTweetPage-textarea"
                placeholder="Hey! What's up!"
                maxLength={MAX_CHARACTERS}
                value={content}
                onChange={this.handleChange}
                ref={this.textAreaRef}
              />
              <div className="newTweetPage-footer">
                <span className="newTweetPage-characters">{`${content.length} / ${MAX_CHARACTERS}`}</span>
                <Button
                  type="submit"
                  className="newTweetPage-submit"
                  variant="primary"
                  disabled={!content}
                >
                  Let's go!
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}

export default NewTweetPage;
