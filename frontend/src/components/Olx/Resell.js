import { AppBar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, InputAdornment, TextField, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TuneIcon from '@mui/icons-material/Tune';
import SortIcon from '@mui/icons-material/Sort';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Resell(){
    return (
<div>
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'white',color:'black',border:'none'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
         <LocationOnIcon/>
         <Typography>location</Typography>
        </Toolbar>
      </AppBar>

      <AppBar position="static" sx={{color:'black',backgroundColor:'white',border:'none',boxShadow:'none'}}>
        <Toolbar sx={{display:'flex',justifyContent:'space-evenly'}}>
            
            <Box sx={{textAlign:"center"}}><TextField   variant="outlined" 
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="medium" color="primary"/>
                  </InputAdornment>
                ),
              }}
              placeholder=" Find items .." sx={{fontSize:{xs:'12px',sm:"14px",md:"16px"},width:'70vw',padding:"10px 0 20px "}} /></Box>
<TuneIcon/>
            <SortIcon/>
        </Toolbar>
      </AppBar>
    </Box>

    <Box margin={'20px 5px'}>
    <Grid container spacing={{xs:1,sm:2}} columns={{xs:2,sm:3,md:4}}>
        {
            Array.from({ length: 15 }, (_, index) => index + 1)
            .map(number => (
                <Grid item xs={1}>
                  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <CardMedia
  component="img"
  height='160'
  image="https://images.unsplash.com/photo-1653103644458-647984f7863e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
  alt="green iguana"
/>
<FavoriteIcon fontSize="small" sx={{position:'absolute',top:5,right:5,color:'white'}}/>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" fontWeight={'bold'}>
          &#8377; 0000
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{textOverflow:'ellipsis',overflow:'hidden',width:'100%',whiteSpace:'nowrap'}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae nesciunt velit sit? Quo, magni doloremque.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{alignItems:'center',justifyItems:'center',display:'flex',mt:'10px'}}><LocationOnIcon fontSize="small" />location</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                </Grid>
            ))        
            }
            </Grid>
    </Box>




<Box sx={{ position: 'sticky', bottom: 5,  textAlign: 'center' }}>
      <Button
        sx={{
          border: '5px solid green',
          borderRadius: '15px',
          color: 'black',
          backgroundColor: 'lightyellow',
          fontWeight: 'bold',
          width: { xs: '100px', sm: '140px', md: '160px' },
          height: { xs: '50px', sm: '60px', md: '70px' },
        }}
      >
        <Typography fontWeight="bold" fontSize="large">
          &#43;
        </Typography>
        &nbsp; SELL
      </Button>
    </Box>

</div>
    )
}

export default Resell;
