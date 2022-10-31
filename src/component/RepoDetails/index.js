import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom";
import "./details.css"
const Details = ()=> {

  const [repoDetails, setRepoDetails] = useState({});
  const {id} = useParams();
  
  const repos = async () => {
    try {
      const result= await axios.get(`https://api.github.com/repositories/${id}`);
      
      setRepoDetails(result.data);

    } catch (error) {
      console.log(error) 
    }
  }
  useEffect(() =>{
    repos()
  })

  return (
      <div className="App-overlay">
        <div className="App-details">
            <h4>Repository: {repoDetails.name}</h4>
            <h4>Owner: Hafsoh Omolola</h4>
            <h4>Description: {repoDetails.description}</h4>
        </div>
      </div>
    )
}
export default Details;