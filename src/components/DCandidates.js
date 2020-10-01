import React ,{useState,useEffect}from "react";
import {connect} from "react-redux";
import * as actions from "../actions/dCandidates";
import {Grid,Paper, TableCell, TableHead,TableContainer,Table,TableRow,TableBody} from "@material-ui/core";
import DCandidatesForm from "./DCandidatesForm";




const DCandidates =(props)=>{
    // const [x,setX]=useState(0)
    // setX(5)

    useEffect(()=>{
  props.fetchAllDCandidates()
    },[])
    return (
<Paper>
      <Grid container>
        <Grid item xs={6}>
      <DCandidatesForm/>
        </Grid>
        <Grid item xs={6}>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Blood Group</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            props.dCandidatesList.map((record,index)=>{
              return (<TableRow key={index} >
                <TableCell>{record.fullName}</TableCell>
                <TableCell>{record.email}</TableCell>
                <TableCell>{record.bloodGroup}</TableCell>
              </TableRow>)
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>
      </Grid>
      </Paper>
    )
}

const mapStateProps=state=>({
      dCandidatesList:state.dCandidates.list
})

const mapActionToProps={
    fetchAllDCandidates: actions.fetchAll 
}
export default connect(mapStateProps,mapActionToProps) (DCandidates);