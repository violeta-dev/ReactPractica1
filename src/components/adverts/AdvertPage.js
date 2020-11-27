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
    console.log(this.props)
    getAdvertDetail(advertId)
      .then(advert => this.setState({ advert }))
      .catch(error => this.setState({ error }));
  };

  componentDidMount() {
    this.getAdvertDetail();
  }

  renderContent = () => {
    const { advert, error } = this.state;
    console.log(this.state)
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
    console.log(this.state)
    return (
      <Layout title="Advert Detail">
        <div className="AdvertPage">{this.renderContent()}</div>
      </Layout>
    );
  }
}

export default AdvertPage;
