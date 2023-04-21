import React, {useState} from 'react'
import picture from '../assets/picture.png';

const Album = () => {
    const [changebutton, setchangebutton] = useState("false");
    const [changebuttontext, setchangebuttontext] = useState("Add album")
    const [newalbum, setnewalbum] = useState("");
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
            <div className='single-album'>
                <img src={picture} alt='album' />
                <span>Name</span>
            </div>
            <div className='single-album'>
                <img src={picture} alt='album' />
                <span>Name</span>
            </div>
            <div className='single-album'>
                <img src={picture} alt='album' />
                <span>Name</span>
            </div>
            <div className='single-album'>
                <img src={picture} alt='album' />
                <span>Name</span>
            </div>
            <div className='single-album'>
                <img src={picture} alt='album' />
                <span>Name</span>
            </div>
            <div className='single-album'>
                <img src={picture} alt='album' />
                <span>Name</span>
            </div>
            <div className='single-album'>
                <img src={picture} alt='album' />
                <span>Name</span>
            </div>
            <div className='single-album'>
                <img src={picture} alt='album' />
                <span>Name</span>
            </div>
        </div>
    </div>
  )
}

export default Album