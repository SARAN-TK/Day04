import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Box, Button, Container, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const User = () => {
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.substring(0, 5) === 'image') {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  return (


    
   
    <div className="profile_img text-center p-4">
      <div className="flex flex-column justify-content-center align-items-center">
        <InputText type="file" accept="image/*" onChange={handleFileChange} />
        
        <br /><br /> <br />
        <Stack direction="row" spacing={2}>
         <Avatar sx={{ width:50 , height:50 , padding:"60px" ,  marginLeft:"800px" }}  alt="Remy Sharp" src="C:\project\profile.jpg" /> 
    </Stack>

        <br /> 
        <br /> <br /><br /><br /><br /> <br /><br /><Typography align='center' sx={{flexGrow:1}}><h2>USER DETAILS</h2></Typography>
         <Box sx={{bgcolor:"",height:'13vh',weidth:'60vh'}}> 
         <Container fixed>
            <div className="details"/>
            <Typography paddingRight={"500px"}>NAME  :</Typography>
            <Typography paddingRight={"500px"}>PLACE :</Typography>
            <Typography paddingRight={"500px"}> AGE   :</Typography>
            <Typography paddingRight={"500px"}>EMAIL :</Typography>
            <Typography paddingRight={"500px"}>PH NO :</Typography>
            
         </Container>
         </Box>
         <br /> <br /> <br /><Button variant="contained" color='success'>EDIT</Button>

         
        
      </div>
    </div>
  );
};
 

export default User;


