import { Button } from '@mui/material';
import React from 'react';
import { Link, } from 'react-router-dom';

const Post = ({ post: { id, title } }) => {

    return (
        <div>
            <h3 >{title.charAt(0).toUpperCase() + title.slice(1)}</h3>
            <p>Writer: w-{id}</p>
            <Link to={`/post/${id}`}>
                < Button variant='contained'> See More</Button>
            </Link>
        </div >
    );
};

export default Post;