import React, {useState, useEffect} from 'react'
import AlbumList from './AlbumList';
import CreateAlbum from './CreateAlbum';
import { firestore } from '../firebase';

const Album = () => {
    const [changebutton, setchangebutton] = useState("false");
    const [changebuttontext, setchangebuttontext] = useState("Add album")
    const [newalbum, setnewalbum] = useState("");
    const [posts, setposts] = useState([]);
    useEffect(()=>{
        firestore.collection('album').get().then((snapshot)=>{
        const post = snapshot.docs.map((doc)=>{
            return {
            id: doc.id,
            ...doc.data()
            }
        });
        setposts(post);
        })
    }, [])

    
  return (
    <div className='album-list'>
        <CreateAlbum />
        <AlbumList posts={posts} />
    </div>
  )
}

export default Album