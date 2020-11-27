import React from 'react';
import Layout from '../layout';
import { Button, Photo, Textarea } from '../shared';
import defaultPhoto from '../../assets/default_profile.png';
import { createAdvert } from '../../api/adverts';
import './NewAdvertPage.css';
import { Redirect } from 'react-router-dom';


const MAX_CHARACTERS = 280;

  

class NewAdvertPage extends React.Component {
    state = {
        advert: { name: '' ,tags:[], price:'',sale:false},
        error: null,
        createdAdvertId: null,

      };
    textAreaRef = React.createRef();

    handleChange = ({ target: { value } }) => {
     this.setState({ advert: { name: value } });
    };

    handleSubmit = async ev => {
        const { advert } = this.state;
        ev.preventDefault();
        try {
          const createdAdvert = await createAdvert(advert);
          this.setState({ createdAdvertId: createdAdvert._id });
        } catch (error) {
          this.setState({ error });
        }
      };
    
    
    componentDidMount() {
      this.textAreaRef.current.focus();
    }
    
    
  render() {
    const {
        advert: { name },
        createdAdvertId,
      } = this.state;
    if (createdAdvertId) {
      return <Redirect to={`/advert/${createdAdvertId}`} />;
    }
  
  
    return (
        <Layout title="New Advert">
          <div
            className="newAdvertPage bordered"
            style={{ borderBottomWidth: 10 }}
          >
            <div className="left">
              <Photo src={defaultPhoto} alt="" />
            </div>
            <div className="right">
              <form onSubmit={this.handleSubmit}>
               <Textarea
                className="newTweetPage-textarea"
                placeholder="Name of advert"
                maxLength={MAX_CHARACTERS}
                value={name}
                onChange={this.handleChange}
                ref={this.textAreaRef}
               />
               
             
                <div className="newAdvertPage-footer">
                <span className="newAdvertPage-characters"></span>
                  <Button
                    type="submit"
                    className="newAdvertPage-submit"
                    variant="primary"
                    disabled={!name}

                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Layout>
      );
  
  }
}

export default NewAdvertPage;
