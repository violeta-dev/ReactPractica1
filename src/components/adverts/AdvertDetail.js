import React from 'react';
import Button from '../shared/Button';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import { deleteAdvert } from '../../api/adverts';
import Photo from '../shared/Photo';
import './Advert.css';
import defaultPhoto from '../../assets/default_profile.png';

 
const Advert = ({ name, price,sale, tags, photo , _id}) => (
  
  <li className="advert bordered">

    <div className="left">
      <Photo src={defaultPhoto} className="advert-photo" />
    </div>
    <div className="right">
      <div className="advert-header">
        <span className="advert-name">{name}</span>
        <span className="advert-price">Price {price} Euros</span>
        <span className="advert-separator">·</span>
        <span>{tags[0]}  {tags[1]}  {tags[2]} {tags[3]}</span>
      </div>
      <div>
        {"sale: " + sale }
       <div className="advert-actions"></div>
    
      </div>
      <div>
      <Button  as={Link} to="/" className="header-button" onClick={() =>
        window.confirm("Are you sure you wish to delete this item?") &&
        deleteAdvert(_id)
    }>
       
        Delete
      </Button>
    
      </div>
    </div>
  </li>

);

Advert.propTypes = {
    name:T.string,
    //history: T.shape({ push: T.func.isRequired }).isRequired,

  };
  
 
  

export default Advert;
