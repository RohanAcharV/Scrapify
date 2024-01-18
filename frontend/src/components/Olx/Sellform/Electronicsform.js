// ElectronicsForm.jsx
import React, { useEffect, useState } from 'react';
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
} from '@mui/material';

const ElectronicsForm = ({flag,editdata}) => {
  const [formData, setFormData] = useState({
    category:'Electronics',
    electronicsType: '',
    model: '',
    price: '',
    specifications: '',
    purchaseDate: '', 
    additionalDescription: '',
    postedDate: new Date().toLocaleDateString('en-GB'),
    address:''
  });

  useEffect(()=>{
    if(flag=='edit' && editdata)
      setFormData(editdata)
  },[flag]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log(formData);
  };

  return (
    <Container maxWidth="sm">
     
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="electronics-type-label">Electronics Type</InputLabel>
          <Select
            labelId="electronics-type-label"
            name="electronicsType"
            value={formData.electronicsType}
            onChange={handleChange}
          >
            <MenuItem value="TV">TV</MenuItem>
            <MenuItem value="kitchenAppliances">Kitchen Appliances</MenuItem>
            <MenuItem value="computerLaptops">Computer & Laptops</MenuItem>
            <MenuItem value="fridge">Fridge</MenuItem>
            <MenuItem value="AC">AC</MenuItem>
            <MenuItem value="washingMachine">Washing Machine</MenuItem>
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
        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary" sx={{width:'100%',fontWeight:'bold'}}>
            {flag=='save'? ('Submit'):('Update')}
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default ElectronicsForm;
