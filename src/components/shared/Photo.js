import React from 'react';
import styles from './Photo.module.css';

const Photo = props => <img className={styles.photo} alt="alt" {...props} />;

export default Photo;
