import React, {useState, useEffect} from 'react'
import picture from '../assets/picture.png';
import { firestore } from '../firebase';
import { Link } from 'react-router-dom';

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

    const handleChangeButton= ()=>{
        changebutton==="false"?<>{setchangebutton("true")}{setchangebuttontext("Cancel")}</>:<>{setchangebutton("false")}{setchangebuttontext("Add album")}</>;
    }
    const createNewAlbum = (e)=>{
        e.preventDefault();
        setnewalbum(e.target.value);
    }
    const clearNewAlbum =()=>{
        setnewalbum("");
    }
    const handlesubmit =(e)=>{
        e.preventDefault();
        console.log(newalbum);
        firestore.collection('album').add({
            Name: newalbum,
            CreatedAt: new Date(),
          })
        setnewalbum("");
    }
  return (
    <div className='album-list'>
        {changebutton==="true"?
            (<div className='add-album'>
                <span>Create an album</span>
                <form onSubmit={handlesubmit}>
                    <input required placeholder="Album Name" value={newalbum} onChange={createNewAlbum} />
                    <button type="button" onClick={clearNewAlbum}>Clear</button>
                    <button>Create</button></form></div>
            ):null}
        <div className='album-list-top'>
            <h3>Your albums</h3>
            <button className={changebutton} onClick={handleChangeButton}>{changebuttontext}</button>
        </div>
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
    </div>
  )
}

export default Album