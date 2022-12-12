import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, FormControlLabel, Paper, TextField } from '@mui/material';
import { useEffect, useState } from "react";
import axios from "axios";
import image from './image.jpg';
import MenuItem from './MenuItem';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const HomeScreen = () =>
    {
    const navigate=useNavigate();
      const [data, setData] = useState([]);
  const loadData = () => {
    axios.get("http://localhost:3001/menu").then((res) => {
      setData(res.data);

    });

  };

  useEffect(() => {
    loadData();
  }, []);

  const totalCount = useSelector((state) => state.cart.totalCount)
  const [open, setOpen] = React.useState(false);
  const [activeToppings, setActiveToppings] = useState([]);
  const handleClickOpen = (toppings) => {
      setOpen(true)
      setActiveToppings(toppings)
  }
  const handleClose = () => {
      setOpen(false)
  }


  const [qty, setQty] = useState(0)
  let increaseQty = () => setQty(qty + 1)

  
  
  return ( 
  <div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
   height:1200,width:1200
   }}>
 
    

    <div><Box sx={{flexGrow:1}}>
          <AppBar position="fixed">
              <Toolbar>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      WIWI Food App (Capstone)
                  </Typography>
                  <Button color="inherit" onClick={()=> navigate('/cart')}>
                      <ShoppingCartIcon />
                      Your Cart {totalCount}</Button>
              </Toolbar>
          </AppBar>
      </Box>
{/* <Box
    class="image"
    style={{
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    height: "100vh",
         color: "#f5f5f5"
          }}></Box> */}
<br></br>
<br></br>
<br></br>

    <center>  
             <br></br>
            <br></br>

<Card sx={{ maxWidth: 545, backgroundColor:'lightblue'}}>
<CardActionArea>
  <CardContent>
   
    <Typography gutterBottom variant="h5" component="div">
    Good food, Great time
    </Typography>
    
     <Typography variant="body2" color="text.secondary">
        Our chefs at WiWi make delicious food selections every week, you pick, we cook and deliver.
      </Typography>
  </CardContent>
</CardActionArea>
</Card>
</center>

<br></br>
<br></br>
{data.map((menu) => {

return (
    <MenuItem menu={menu} />
//   <div>
//   <center>
//   <Card sx={{ maxWidth: 745, backgroundColor:'white'}}>
//   <CardContent>
//   <div>
  
//   <Typography gutterBottom variant="h6" align="left"  >
//     {menu.FoodItem}
//   <Typography  variant="body2">
//   <object align="right" variant="inherit"> 
//         <TextField 
//         type={Number}
//             size="small" 
//             // style = {{width: 8}}
//             label="Amount"
//             value={qty}
//             InputProps={{
//         inputProps: { 
//             defaultValue : 0
//             //readOnly: true,    

//         }
    
//     }}
// />
//   </object>
//   </Typography>
//     </Typography>

//     <Typography align="left" variant="body2" >
//       {menu.description} 
//        </Typography>


//       <Typography align="left" variant="body2" >
//         Amount:  ${menu.Price}

//        <Typography  variant="body2"   >
//            <object align="right" variant="inherit">
//             <Button  size="small" align ="right" variant="text" onClick={increaseQty}> 
//              +Add  </Button>
//              </object>
//        </Typography>

//        <div>
//         <Button  size="small" variant="text"  onClick={()=>handleClickOpen(menu.Toppings)}> 
//          +Add Toppings </Button>
     
//      </div>
       
//       </Typography>

//     </div>

//     </CardContent>
//     </Card>
//     <Divider variant="middle" />

//     </center>
    
//     </div> 

// )}

)
})}


</div>
         </div>
         

);
}
  
export default HomeScreen