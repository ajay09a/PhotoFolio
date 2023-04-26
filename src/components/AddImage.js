import { useState } from "react";
const AddImage = ({path}) => {
    const [changebutton, setchangebutton] = useState("false");
    const [changebuttontext, setchangebuttontext] = useState("Add Image")

    const handlesubmit =(e)=>{
        e.preventDefault();
        console.log("success");
    }
    const handleChangeButton= ()=>{
        changebutton==="false"?<>{setchangebutton("true")}{setchangebuttontext("Cancel")}</>:<>{setchangebutton("false")}{setchangebuttontext("Add Image")}</>;
    }
  return (
    <>
        {changebutton==="true"?
            (<div className='add-album'>
                <span>Create an album</span>
                <form onSubmit={handlesubmit}>
                    <h3>Add Image to {path}</h3>
                    <input required placeholder="Title" />
                    <input required placeholder="Image URL" />
                    <button>Add</button></form></div>
            ):null}
        <div className='album-list-top'>
            <h3>Image in {path}</h3>
            <button className={changebutton} onClick={handleChangeButton}>{changebuttontext}</button>
        </div>
    </>
  )
}

export default AddImage