import React, { useEffect} from 'react'
import { firestore } from '../firebase';

const CreateAlbum = ({changebutton, changebuttontext, setchangebutton, setchangebuttontext, newalbum, setnewalbum, setposts}) => {
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

    const handlesubmit =(e)=>{
        e.preventDefault();
        console.log(newalbum);
        firestore.collection('album').add({
            Name: newalbum,
            CreatedAt: new Date(),
          })
        setnewalbum("");
    }
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
  return (
    <>
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
    </>
  )
}

export default CreateAlbum