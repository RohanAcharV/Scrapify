import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Myads(){

    const allData = [
        { category: 'Vehicle', vehicleType: 'car', model: 'Toyota Camry', year: '2022', price: '25000', fuelType: 'diesel', kmDriven: '15000', additionalDescription: 'Excellent condition', postedDate: '01-08-2024' },
        { category: 'Properties', propertyType: 'house', transactionType: 'sale', price: '500000', plotArea: '200 sq. ft.', lengthBreadth: '20x30', floors: '2', rooms: '3', address: '123 Main Street', landmark: 'Near Park', additionalDescription: 'Spacious rooms with garden', postedDate: '01-08-2024' },
        { category: 'Mobiles', mobileType: 'phones', model: 'iPhone 13', price: '1200', specifications: '128GB, A15 Bionic chip', purchaseDate: '12-2022', additionalDescription: 'Like new, with original accessories', postedDate: '01-08-2024', address:'mysore' },
        { category: 'Electronics', electronicsType: 'TV', model: 'Samsung QLED 55"', price: '1000', specifications: '4K, Quantum Dot Technology', purchaseDate: '06-2021', additionalDescription: 'Smart TV with built-in streaming apps', postedDate: '01-08-2024' ,address:'Mysore'},
      ];
     
    const navigate=useNavigate();
    return(
        <Box>
        {
            allData.map((data)=>(
                <Box sx={{display:'flex',width:'90vw',minheight:{xs:'140px',sm:'160px'},border:'0.8px solid grey',margin:'3vh auto'}}>
                    
                <Box sx={{ width: '40%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                    src="https://tiimg.tistatic.com/fp/1/007/574/vivo-mobile-phone-7-38mm-ultra-smooth-body-170g-light-2-5d-adjusted-outline-for-a-great-hold-703.jpg"
                    style={{ width: '80%', height: '80%'}}
                    alt="Centered Image"
                />
                </Box>
                    <Box sx={{width:'60%',display:'flex',flexDirection:'column'}}>
                        
                        <Typography sx={{ backgroundColor:'rgba(173, 216, 230, 0.2)',flex:1,display: 'flex', alignItems: 'center',paddingLeft:'3vw',fontSize:{xs:'14px',sm:'18px'}}}>{data.category === 'Properties' ? `${data.propertyType} for ${data.transactionType}` : data.model}</Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center',backgroundColor:'rgba(211, 211, 211, 0.2)',flex:1,paddingLeft:'3vw',fontSize:{xs:'14px',sm:'18px'},fontWeight:'bold'}}>&#8377; &nbsp; {data.price}</Typography>
                            <Box sx={{flex:1,display:'flex',justifyContent:'space-around'}}>
                            <Button sx={{color:'green',fontWeight:'bold'}} onClick={()=>navigate(`/editform`,{state:{formData:data}})}>Edit</Button>
                            <Button sx={{color:'blue',fontWeight:'bold'}} onClick={()=>navigate("/resell/id")}>View</Button> </Box> 
                        <Button sx={{flex:0.5,width:'80%',height:'60%',border:'1px solid black',borderRadius:'2px',fontWeight:'bolder',color:'black',margin:'0 auto 5% auto'}}>Mark as sold</Button>
                    </Box>
                </Box>
            ))
        }
        </Box>
    )
}

export default Myads;