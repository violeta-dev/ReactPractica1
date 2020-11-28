import client from './client';
import Qs from 'qs';


//mi servidor node de anuncios est-a en localhost:3000/apv1/adverts
//const url = `${tweetsBaseUrl}/tweets?_expand=user&_embed=likes&_sort=createdAt&_order=desc`;

const advertsBaseUrl = '/apiv1';

export const searchAdvert = advert=> {
 //?name=${advert.name}&price=${-advert.price}&tags=${advert.tags}&sale=${advert.sale}`
 console.log(advert)
 const search_tags= advert.tags
 const string = search_tags.join(",")
  const url = `${advertsBaseUrl}/adverts`
  if (string){

    return client.get(url, {params:{
      name:advert.name,
      price:-advert.price,
      sale:advert.sale,
      tags:string,
  
     }});
  }else{
    return client.get(url, {params:{
      name:advert.name,
      price:-advert.price,
      sale:advert.sale,
     
  
     }});

  }
 
};

export const getLatestAdverts = () => {
  const url = `${advertsBaseUrl}/adverts`;
  return client.get(url);
};

export const getAdvertDetail = advertId => {
    const url = `${advertsBaseUrl}/adverts/${advertId}`;
    return client.get(url);
  };
export const deleteAdvert = advertId => {
    const url = `${advertsBaseUrl}/adverts/${advertId}`;
    return client.delete(url);
  };

  export const createAdvert = advert => {
    const url = `${advertsBaseUrl}/adverts`;
    console.log(advert)
    return client.post(url,advert);
  };
  
  