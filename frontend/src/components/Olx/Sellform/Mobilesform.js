// MobilesForm.jsx
import React, { useState , useEffect, useRef } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  ImageList,
  ImageListItem,
  IconButton,
} from '@mui/material';
import { AddPhotoAlternate, Camera, Delete } from '@mui/icons-material';
import Webcam from "react-webcam";
import Webcamera from './Webcam';

const MobilesForm = ({flag,editdata}) => {
  const [imagesArray,setImagesArray]=useState([]);
  const [imageflag,setimageflag]=useState('close');
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    category:'Mobiles',
    mobileType: '',
    model: '',
    price: '',
    specifications: '',
    purchaseDate: '',
    additionalDescription: '',
    address:'',
    postedDate: new Date().toLocaleDateString('en-GB'),
    images:[],
    useremail:localStorage.getItem('user_email')
  });

  useEffect(()=>{
    if(flag=='edit' && editdata)
    {setFormData(editdata);setImagesArray(editdata.images)}
  },[flag]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleDeleteimage = (index) => {
    setImagesArray((prevImages) => prevImages.filter((_, i) => i !== index));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    if(flag=='save'){
      //handle save logic here
    }
    console.log(formData);
  };

  return (
    <Container maxWidth="sm">
   
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="mobile-type-label">Mobile Type</InputLabel>
          <Select
            labelId="mobile-type-label"
            name="mobileType"
            value={formData.mobileType}
            onChange={handleChange}
          >
            <MenuItem value="phones">Phones</MenuItem>
            <MenuItem value="tabs">Tabs</MenuItem>
          </Select>
        </FormControl>
        <TextField label="Model" fullWidth margin="normal" name="model" value={formData.model} onChange={handleChange} />
        <TextField label="Price" fullWidth margin="normal" name="price" value={formData.price} onChange={handleChange} />
        <TextField
          label="Month & Year of Purchase"
          fullWidth
          margin="normal"
          name="purchaseDate"
          value={formData.purchaseDate}
          onChange={handleChange}
        />
        <TextField
          label="Specifications"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          name="specifications"
          value={formData.specifications}
          onChange={handleChange}
        />
       
        <TextField
          label="Additional Description"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          name="additionalDescription"
          value={formData.additionalDescription}
          onChange={handleChange}
        />
        <TextField label="Address" fullWidth margin="normal" name="address" value={formData.address} onChange={handleChange} />
        <Box sx={{border:'1px solid black'}}>
          <Box sx={{display:'flex',justifyContent:'space-around'}}>
          <Button sx={{ display: 'flex', alignItems: 'center' }} onClick={()=>setimageflag('select')}> <AddPhotoAlternate/>Add photo</Button>
          <Button sx={{display:{xs:'none',md:'flex'}, alignItems: 'center'}} onClick={()=>setimageflag('click')}><Camera/>Click a photo</Button>
          </Box>
          
         <Webcamera imageflag={imageflag} imagesArray={imagesArray} setImagesArray={setImagesArray} setimageflag={setimageflag}/>

<Box>
<ImageList sx={{ width: '100%' }} cols={2} rowHeight={180}>
  {imagesArray.map((image,index) => (
    <ImageListItem sx={{margin:'1px',border:'0.2px solid black'}} key={index}>
      <img src={image} alt={'image'} loading="lazy" style={{objectFit:'contain',width:'100%',height:'100%'}}/>
      <IconButton sx={{ position: 'absolute', top: 0, right: 0, borderRadius: '20px', color: 'white', backgroundColor: 'red' }} onClick={() => handleDeleteimage(index)}>
  <Delete fontSize="small" />
</IconButton>

    </ImageListItem>
  ))}
</ImageList>
</Box>
        </Box>

        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary"  sx={{width:'100%',fontWeight:'bold'}}>
          {flag=='save'? ('Submit'):('Update')}
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default MobilesForm;
