import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {firestore} from '../firebase';
import AddImage from './AddImage';

const ImageFolder = () => {
    const [post, setpost] = useState({});
  const {postId} = useParams();
  useEffect(()=>{
    firestore.collection("album").doc(postId).get().then((snapshot)=>{
      setpost(snapshot.data());
    })
  }, [])
  return (
    <div>
        <AddImage path={post.Name} />
    </div>
  )
}

export default ImageFolder