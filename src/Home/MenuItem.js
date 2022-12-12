import { Button, Card, CardContent, Divider, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { addToCart } from "../Cart/store/cartSlice";
import ToppingsDialog from "./ToppingsDialog";

export default function MenuItem({ menu }) {
  const [count, setCount] = useState(0);
  const [activeToppings, setActiveToppings] = useState([]);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClickOpen = (toppings) => {
    setOpen(true);
    setActiveToppings(toppings);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
        dispatch(addToCart({
            [menu._id]: {
                ...menu,
                quantity: count
            }
        }))
  }, [count]);

    return (
        <div>
        <center>
        <Card sx={{ maxWidth: 745, backgroundColor:'white'}}>
        <CardContent>
        <div>
        
        <Typography gutterBottom variant="h6" align="left"  >
          {menu.FoodItem}
        <Typography  variant="body2">
        <object align="right" variant="inherit"> 
        <Button
                        variant="oulined"
                        size="small"
                        onClick={() => {
                        setCount(c => c + 1)
                        }}
                        >
                            +
                      </Button>
                      {count}
                      <Button
                        variant="oulined"
                        size="small"
                        onClick={() => {
                        setCount(c => c - 1)
                        }}
                        >
                           -
                     </Button>
        </object>
        </Typography>
          </Typography>
      
          <Typography align="left" variant="body2" >
            {menu.description} 
             </Typography>
      
      
            <Typography align="left" variant="body2" >
              Amount:  ${menu.Price}
      
             <Typography  variant="body2"   >
                 <object align="right" variant="inherit">
                  <Button  size="small" align ="right" variant="text" onClick={()=>setCount(c=>c+1)}> 
                   +Add  </Button>
                   </object>
             </Typography>
      
             <div>
              <Button  size="small" variant="text"  onClick={()=>handleClickOpen(menu.Toppings)}> 
               +Add Toppings </Button>
           
           </div>
             
            </Typography>
      
          </div>
      
          </CardContent>
          </Card>
          <Divider variant="middle" />
      
          </center>
         <ToppingsDialog open={open} handleClose={handleClose} toppings={activeToppings} />
          
          </div> 

      
      )}









//         <div>
//          <center>
//            <Card sx={{ maxWidth: 800, padding:2.5 }}>
//                 <b><p align="left">{menu.menuname}</p></b>
//                      <object align="right">
//                      <Button
//                         variant="oulined"
//                         size="small"
//                         onClick={() => {
//                         setCount(c => c + 1)
//                         }}
//                         >
//                             +
//                       </Button>
//                       {count}
//                       <Button
//                         variant="oulined"
//                         size="small"
//                         onClick={() => {
//                         setCount(c => c - 1)
//                         }}
//                         >
//                            -
//                      </Button>
//                    </object>
//                     <p align="left">{menu.menudesc}</p>
//                     <p align="left">
//                        $ {menu.price} <></>
//                        <Button
//                             variant="outlined"
//                           onClick={()=>handleClickOpen(menu.toppings)}
//                         >
//                           +Toppings
//                       </Button>
//                    </p>
//         </Card>
//              <Divider variant="middle"/>
//              </center>
//         </div>
//     )
// }