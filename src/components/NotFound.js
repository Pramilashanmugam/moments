// NotFound.js
import React from 'react';
import NoResults from '../assets/no-results.png'; // Import the no-results.png file
import styles from '../styles/NotFound.module.css'; // Import the CSS module
import Asset from './Asset'; // Assuming Asset component exists

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <Asset
        src={NoResults}
        message="Sorry, the page you're looking for doesn't exist"
      />
    </div>
  );
};

export default NotFound;