import React,{useState} from "react";
import {FormControl, Grid,InputLabel,TextField,withStyles,MenuItem} from "@material-ui/core";



const styles = theme=>({
    root:{
        margin :theme.spacing(1),
        minWidth:230,
},

  FormControl:{
    
    margin :theme.spacing(1),
    minWidth:230,
    
},
})

const initialFieldValues={
    fullName:'',
    email:'',
    age:'',
    bloodGroup:'',
    address:''

}


const DCandidatesForm =( {classes,...props})=>{
  
    
    const {values , setValues}= useState(initialFieldValues)

    const handleInputChange=e=>{
        const {name, value}=e.target
        setValues({
            ...values,
         [name]:value
        })
    }


    return (
        <form autoComplete="off" noValidate className={classes.root}>
       <Grid container>
       <Grid item xs={6}>
       <TextField
       name="fullName"
       variant="outlined"
       label="Full Name"
       value={values.fullName}
       onChange={handleInputChange}
       />
         <TextField
       name="email"
       variant="outlined"
       label="Email"
       value={values.email}
       onChange={handleInputChange}
       />
     
     <FormControl variant="outlined" className={classes.FormControl}>
         <InputLabel>Blood Group</InputLabel>
    <select
         name="bloodGroup"
         value={values.bloodGroup}
       onChange={handleInputChange}
   
   >
    <MenuItem value="" >Select Blood Group</MenuItem>
    <MenuItem value="AB" >AB +ve</MenuItem>
    <MenuItem value="A+" >A +ve</MenuItem>
    <MenuItem value="B+" >B +ve</MenuItem>
    <MenuItem value="B-" >B -ve</MenuItem>
    <MenuItem value="A-" >A -ve</MenuItem>
    <MenuItem value="O+" >O +ve</MenuItem>
    <MenuItem value="O-" >O -ve</MenuItem>
    </select>
     </FormControl>
     
       </Grid>
       <Grid item xs={6}>
       <TextField
       name="age"
       variant="outlined"
       label="Age"
       value={values.age}
       onChange={handleInputChange}
       />
         <TextField
       name="address"
       variant="outlined"
       label="Address"
       value={values.address}
       onChange={handleInputChange}
       />
       </Grid>
       </Grid>
        </form>
    )
}
export default withStyles(styles) (DCandidatesForm);