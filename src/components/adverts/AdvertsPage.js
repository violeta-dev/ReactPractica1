import React from 'react';
import { getLatestAdverts, searchAdvert } from '../../api/adverts';
import Layout from '../layout'
import Advert from './Advert';
import {Search, searchedAdvert} from './Search'





class AdvertsPage extends React.Component{
    state = {
        adverts: null,
        searchedAdvert: null,
    };

    async componentDidMount() {
      console.log(searchedAdvert)
    if (searchedAdvert){
      this.setState({ adverts: searchedAdvert.rows });

    }else{
      const adverts = await getLatestAdverts();
      this.setState({ adverts: adverts.rows });
    }
     
     
     //const searchedverts= await searchAdvert();
    // this.setState({ searchedverts: searchedverts.rows });
    }


    renderContent = () => {
      const { history } = this.props;
      const { adverts } = this.state;
     // const {searchedAdvert} = this.state
      console.log("Soy" + searchedAdvert)
  
      if (!adverts) {
        return null;
      }
      
      if (searchedAdvert){
        return searchedAdvert.map(advert => (
          <Advert key={advert.id} {...advert} history={history} />
        ))
        
      }else{

        return adverts.map(advert => (
          <Advert key={advert.id} {...advert} history={history} />
        ))
      }
      
      //return adverts.map(advert => <Advert key={advert._id} {...advert} />);
      
  
    };
    render() {
        
        return (
          <Layout title="List of Adverts">
           <div className="Search"> <Search /></div>
          <div className="AdvertsPage">{this.renderContent()}</div>
        </Layout>
  
        );
    
  }

  
  
             

}
export default AdvertsPage;




