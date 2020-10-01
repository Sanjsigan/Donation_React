import React ,{useState,useEffect}from "react";
import {connect} from "react-redux";
import * as actions from "../actions/dCandidates";



const DCandidates =(props)=>{
    // const [x,setX]=useState(0)
    // setX(5)

    useEffect(()=>{
  props.fetchAllDCandidates()
    },[])
    return (<div>form DCandidatessss</div>)
}

const mapStateProps=state=>({
      dCandidatesList:state.dCandidates.list
})

const mapActionToProps={
    fetchAllDCandidates: actions.fetchAll 
}
export default connect(mapStateProps,mapActionToProps) (DCandidates);