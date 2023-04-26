import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {firestore} from '../firebase';

const ImageFolder = () => {
    const [post, setpost] = useState({});
  const {postId} = useParams();
  useEffect(()=>{
    firestore.collection("album").doc(postId).get().then((snapshot)=>{
      setpost(snapshot.data());
    })
  }, [])
  return (
    <div>{post.Name}</div>
  )
}

export default ImageFolder