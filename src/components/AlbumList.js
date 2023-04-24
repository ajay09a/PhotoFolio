import React from 'react';
import picture from '../assets/picture.png';
import { Link } from 'react-router-dom';

const AlbumList = ({posts}) => {
  return (
    <div className='album-list-bottom'>
        {
        posts.map((post, index)=>{
            return (<Link to={`/album/${post.id}`} key={index}>
                    <div className='single-album'>
                        <img src={picture} alt='album' />
                        <span>{post.Name}</span>
                    </div>
                </Link>)
        })
        }
    </div>
  )
}

export default AlbumList