import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

export default function ImgMediaCard() {
  return (
      <Container>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="clothing"
        height="240"
        image="../images/carousel1.jpg"
      />
      
      <CardActions>
        <Button size="small">Wish list</Button>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
    </Container>
  );
}



import * as React from 'react';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function Addnew(){
  const [currentItem,setcurrentItem] = useState("");
  
  const addData = () =>{
    console.log(currentItem);
    setcurrentItem("");
  }
  return(
 <div>
    <h1>Add new Product</h1>
    <form>
      <TextField id="Brand" label="Brand" variant="outlined" value={currentItem} onChange={(e)=>setcurrentItem(e.target.value)}/><br/><br/>
      <TextField id="outlined-basic" label="Type" variant="outlined" /><br/>
      <TextField id="outlined-basic" label="Price" variant="outlined" /><br/>
      <TextField id="outlined-basic" label="Quantity" variant="outlined" /><br/>
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup row
          aria-label="gender"
          defaultValue="female"
          name="row radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl><br/><br/>
      <Button variant="contained" size="large" onClick={()=>addData()}>Add Product</Button>
    </form>
  </div>

  )
  
}
