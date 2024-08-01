import React from 'react';
import CircularImage from '../CircularImage/CircularImage';

const Comment = ({ comment: { name, email, body } }) => {
    const randomImage = Math.floor(Math.random() * 51) + 300;;
    return (
        <div style={{ display: 'flex', }}>
            <div className='circle-container'>
                <CircularImage src={`https://picsum.photos/${randomImage}`}></CircularImage>
            </div>
            <div>
                <b>Email: {email}</b>
                <p>{body.charAt(0).toUpperCase() + body.slice(1)}</p>
            </div>
        </div>
    );
};

export default Comment;