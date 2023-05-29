import React,{useEffect,useState} from 'react'
import Avatar from 'react-avatar-edit'
const User = () => {
    const [src, setSrc] = useState(null);
    const [preview, setpreview] = useState(null);


    const onClose=()=>{
        setpreview(null);
    }
    const onCrop = view =>{
        setpreview(view);
    }

    useEffect(() => {
        console.log(preview)
    }, [preview])
    


  return (
    <div>
        <Avatar 
                  width={400} 
                  height={300}  
                 onCrop={onCrop}
                 onClose={onClose}
                  src={src}
        />
       {preview &&  <img src={preview}/>}
    </div>
  )
}

export default User;
