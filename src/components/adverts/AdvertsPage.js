import React from 'react';
import { getLatestAdverts } from '../../api/adverts';
import Layout from '../layout'
import Advert from './Advert';


class AdvertsPage extends React.Component{
    state = {
        adverts: null,
    };

    async componentDidMount() {
     const adverts = await getLatestAdverts();
     this.setState({ adverts: adverts.rows });
    }


    renderContent = () => {
      const { history } = this.props;
      const { adverts } = this.state;
  
      if (!adverts) {
        return null;
      }
      //return adverts.map(advert => <Advert key={advert._id} {...advert} />);
      return adverts.map(advert => (
        <Advert key={advert.id} {...advert} history={history} />
      ));
  
    };
    render() {
        
        return (
          <Layout title="List of Adverts">
          <div className="advertsPage">{this.renderContent()}</div>
        </Layout>
  
        );
    
  }

  
  
             

}
export default AdvertsPage;




