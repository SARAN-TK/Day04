import React,{useState} from 'react'
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
const User = () => {
    const [image, setimage] = useState("")
  return (
    <div className='profile_img text-center p-4'>
     <div className="flex flex-column justify-content-center align-items-center">

    <InputText 
    type='file'
    
    
    accept='/image/*'
    onChange={(event)=>{
        const file=event.target.files[0];
        if(file && file.type.substring(0,5)==="image"){
            setimage(file);

        }else{
            setimage(null)
        }
    }}
    
    
    />


     </div>
    </div>
  )
}

export default User






