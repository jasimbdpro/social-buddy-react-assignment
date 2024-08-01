import React from 'react';

const CircularImage = ({ src, size = 100 }) => {
    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="circleView">
                    <circle cx={size / 2} cy={size / 2} r={size / 2} />
                </clipPath>
            </defs>
            <image
                x="0"
                y="0"
                width="100%"
                height="100%"
                href={src}
                clipPath="url(#circleView)"
                preserveAspectRatio="xMidYMid slice"
            />
        </svg>
    );
};

export default CircularImage;
