import React from 'react';

//const Location = (props) => {
    //const city= props.city;
    // Simplificar usando Destructuring
    //const {city}=props;
    //simplicar mas cambiando const Location = (props) por const Location = ({city})
    const Location = ({city}) => {
    return (<div>
                 <h1>{city}</h1>
            </div>);
};

export default Location;