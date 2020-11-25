import React from 'react';
import { Redirect } from 'react-router-dom';


import { getAdvertDetail } from '../../api/adverts';
import Layout from '../layout';
import Advert from './AdvertDetail';

class AdvertPage extends React.Component {
  state = {
    advert: null,
    error: null,
  };

  getAdvertDetail = () => {
    const { advertId } = this.props.match.params;
    console.log(this.props.match.params)
    getAdvertDetail(advertId)
      .then(advert => this.setState({ advert }))
      .catch(error => this.setState({ error }));
  };

  componentDidMount() {
    this.getAdvertDetail();
  }

  renderContent = () => {
    const { advert, error } = this.state;
    if (error) {
      return <Redirect to="/404" />;
    }
    if (!advert) {
      return null;
    }
    //return JSON.stringify(advert);
    return ( <Advert key={advert.id} {...advert.result} />  )
       
  };

  render() {
    return (
      <Layout title="Advert Detail">
        <div className="advertPage">{this.renderContent()}</div>
      </Layout>
    );
  }
}

export default AdvertPage;
