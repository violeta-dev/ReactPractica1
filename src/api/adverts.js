import client from './client';

//mi servidor node de anuncios est-a en localhost:3000/apv1/adverts
//const url = `${tweetsBaseUrl}/tweets?_expand=user&_embed=likes&_sort=createdAt&_order=desc`;

const advertsBaseUrl = '/apiv1';

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
    return client.post(url, advert);
  };
  
  