import React from 'react';

function Card({ image, name }) {
  const styles = {
    card: {
      width: '20%',
      minHeight: '150px',
      border: '1px solid black',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      margin: '1%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: '2vw',
      boxSizing: 'border-box'
    },
    image: {
      width: '60%',
      height: '60%',
      marginBottom: '10px',
      borderRadius: '50%'
    },
    name: {
      fontWeight: 'bold',
      fontSize: '1.5rem',
      textAlign: 'center'
    }
  };

  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <div style={styles.name}>{name}</div>
    </div>
  );
}

export default Card;
