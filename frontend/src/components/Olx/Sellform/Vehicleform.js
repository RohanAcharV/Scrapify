// VehicleForm.jsx
import React, { useEffect,useRef,useState } from 'react';
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
  RadioGroup,
  FormControlLabel,
  Radio,
  ImageList,
  ImageListItem,
  IconButton,
} from '@mui/material';
import { AddPhotoAlternate, Camera, Delete } from '@mui/icons-material';
import Webcam from "react-webcam";
import Webcamera from './Webcam';

const VehicleForm = ({flag,editdata}) => {

  const [imagesArray,setImagesArray]=useState([]);
  const [imageflag,setimageflag]=useState('close');
  const fileInputRef = useRef(null);
  // **************************

  const [formData, setFormData] = useState({
    category :  'Vehicle',
    vehicleType: 'car',
    model: '',
    year: '',
    price: '',
    fuelType: 'petrol',
    kmDriven: '',
    additionalDescription: '',
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

  const handleFuelTypeChange = (e) => {
    setFormData((prevData) => ({ ...prevData, fuelType: e.target.value }));
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
          {/* <InputLabel id="vehicle-type-label">Vehicle Type</InputLabel> */}
          <Select
            labelId="vehicle-type-label"
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
          >
            <MenuItem value="car">Car</MenuItem>
            <MenuItem value="bike">Bike</MenuItem>
            <MenuItem value="scooter">Scooter</MenuItem>
          </Select>
        </FormControl>
        <TextField label="Model" fullWidth margin="normal" name="model" value={formData.model} onChange={handleChange} />
        <TextField label="Year" fullWidth margin="normal" name="year" value={formData.year} onChange={handleChange} />
        <TextField label="Price" fullWidth margin="normal" name="price" value={formData.price} onChange={handleChange} />
        <FormControl component="fieldset" fullWidth margin="normal">
          <Typography variant="subtitle1">Fuel Type</Typography>
          <RadioGroup row name="fuelType" value={formData.fuelType} onChange={handleFuelTypeChange}>
            <FormControlLabel value="petrol" control={<Radio />} label="Petrol" />
            <FormControlLabel value="diesel" control={<Radio />} label="Diesel" />
            <FormControlLabel value="cng" control={<Radio />} label="CNG" />
            <FormControlLabel value="electric" control={<Radio />} label="Electric" />
            <FormControlLabel value="hybrid" control={<Radio />} label="Hybrid" />
          </RadioGroup>
        </FormControl>
        <TextField label="Km Driven" fullWidth margin="normal" name="kmDriven" value={formData.kmDriven} onChange={handleChange} />
        
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
          <Button type="submit" variant="contained" color="primary" sx={{width:'100%',fontWeight:'bold'}}>
          {flag=='save'? ('Submit'):('Update')}
          </Button>
        </Box>
        
      </form>
    </Container>
  );
};

export default VehicleForm;
