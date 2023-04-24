import React, {useState} from 'react'
import AlbumList from './AlbumList';
import CreateAlbum from './CreateAlbum';

const Album = () => {
    const [changebutton, setchangebutton] = useState("false");
    const [changebuttontext, setchangebuttontext] = useState("Add album")
    const [newalbum, setnewalbum] = useState("");
    const [posts, setposts] = useState([]);
    
  return (
    <div className='album-list'>
        <CreateAlbum changebutton={changebutton} changebuttontext={changebuttontext} setchangebutton={setchangebutton} setchangebuttontext={setchangebuttontext} newalbum={newalbum} setnewalbum={setnewalbum} setposts={setposts} />
        <AlbumList posts={posts} />
    </div>
  )
}

export default Album