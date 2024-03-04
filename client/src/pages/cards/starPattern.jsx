import React from 'react';

const starPattern = ({ value }) => {
    // Generate an array of stars based on the starPattern value
    const stars = Array.from({ length: value }, (_, index) => index + 1);

    return (
        <div>
            {stars.map((star) => (
                <span key={star}>&#9733;</span>
            ))}
        </div>
    );
};

export default starPattern;
