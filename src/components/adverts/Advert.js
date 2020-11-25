import React from 'react';

import defaultPhoto from '../../assets/default_profile.png';

import T from 'prop-types';

import Photo from '../shared/Photo';
import './Advert.css';

 
const Advert = ({ name, price,sale, tags, photo ,history, _id}) => (

  <li className="advert bordered" onClick={() => history.push(`/advert/${_id}`)}>

    <div className="left">
      <Photo src={photo} alt="Photo" className="advert-photo" />
    </div>
    <div className="right">
      <div className="advert-header">
        <span className="advert-name">{name}</span>
        <span className="advert-price">Price {price} Euros</span>
        <span className="advert-separator">·</span>
        <span>{tags[0]}  {tags[1]}  {tags[3]} {tags[4]}</span>
      </div>
      <div>
        {"sale: " + sale }
        <div className="advert-actions"></div>
      </div>
    </div>
  </li>

);

Advert.propTypes = {
    name:T.string,
    history: T.shape({ push: T.func.isRequired }).isRequired,

  };
  
  Advert.defaultProps = {
    photo: defaultPhoto,
  };
  

export default Advert;
