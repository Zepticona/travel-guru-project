import React from 'react';

const SpotImage = (props) => {
    // <img src={} alt="tour spot" />
    const spotImageUrl = props.tourSpot.imgUrl;
    const tourLocation = (props.tourSpot.destination);
    return (
       <img src={require(`../../images/Image/${spotImageUrl}`)} alt="tour spot" />
        
    );
};

export default SpotImage;