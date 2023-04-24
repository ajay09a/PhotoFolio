import React from 'react'

const CreateAlbum = () => {
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