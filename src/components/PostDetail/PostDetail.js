import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import './PostDetail.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const PostDetail = () => {
    const { newId } = useParams();
    const [post, setPost] = useState([]);
    const [comment, setComment] = useState([])
    const { title, body } = post;

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${newId}`)
            .then(res => res.json())
            .then(data => setPost(data))


    }, [])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${newId}`)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [])

    const capitalizeFirstLetter = (str) => {
        // if (!str) return '';
        return str && str.charAt(0).toUpperCase() + str.slice(1);
    };
    let [likeColor, setLikeColor] = useState('primary')

    const handleClick = () => {
        setLikeColor('warning')
        setTimeout(() => { setLikeColor('primary') }
            , 100)
    }

    return (
        <div>
            <h3>{capitalizeFirstLetter(title)}</h3>
            <p>{capitalizeFirstLetter(body) + '. ' + capitalizeFirstLetter(body) + '. ' + capitalizeFirstLetter(body) + '. ' + capitalizeFirstLetter(body)}</p>
            <h2><b>Comments...</b></h2>
            <ThumbUpIcon onClick={handleClick} color={likeColor}></ThumbUpIcon>
            {
                comment.map(i => <Comment comment={i} key={i.id}></Comment>)
            }
        </div>
    );
};

export default PostDetail;