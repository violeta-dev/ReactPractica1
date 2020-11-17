import React from 'react';

import Layout from '../layout';
import { Button, Photo, Textarea } from '../shared';
import defaultPhoto from '../../assets/default_profile.png';

import './NewTweetPage.css';

const MAX_CHARACTERS = 280;

class NewTweetPage extends React.Component {
  render() {
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
            <form>
              <Textarea />
              <div className="newTweetPage-footer">
                <span className="newTweetPage-characters">{`155 / ${MAX_CHARACTERS}`}</span>
                <Button
                  type="submit"
                  className="newTweetPage-submit"
                  variant="primary"
                  disabled
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
