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
    getResponse(searchedAdvert){
      this.state({searchedAdvert})
      console.log(searchedAdvert)
    }
    async componentDidMount() {
      
      console.log(searchedAdvert)
    if (searchedAdvert){
      const searchedAdvert = await getLatestAdverts();
      this.setState({ adverts: searchedAdvert.rows });

    }else{
      const adverts = await getLatestAdverts();
      this.setState({ adverts: adverts.rows });
    }
     
     
     //const searchedverts= await searchAdvert();
    // this.setState({ searchedverts: searchedverts.rows });
    }

      componentWillUnmount() {
        console.log('componentWillUnmount');
      }
    

    


    renderContent = () => {
      const { history } = this.props;
      const { adverts } = this.state;

  
      if (!adverts) {
        return null;
      }
      
      

        return adverts.map(advert => (
          <Advert key={advert.id} {...advert} history={history} />
        ))
      
      
      //return adverts.map(advert => <Advert key={advert._id} {...advert} />);
      
  
    };
    render() {
        
        return (
          <Layout title="List of Adverts">
           <div className="Search" callback={this.getResponse.bind(this)}> <Search /></div>
          <div className="AdvertsPage">{this.renderContent()}</div>
          <p> Result {this.state.searchedAdvert}</p>
        </Layout>
  
        );
    
  }

  
  
             

}
export default AdvertsPage;




