import React, { useState, useEffect } from "react"
import "./initial.css"
import dot1 from "../../asset/image1.png"
import dot2 from "../../asset/image2.png"
import dot3 from "../../asset/image3.png"
import dot4 from "../../asset/image4.png"
import dot5 from "../../asset/image5.png"
import tech from "../../asset/tech.jpeg"
import axios from "axios"
import { Link } from "react-router-dom"

const Initial = ()=> {

  const [allRepos, setAllRepos] = useState([]);

  const repos = async () => {
    try {
      const username = "LegalDesigner"
      const result= await axios.get(`https://api.github.com/users/${username}/repos`);
      setAllRepos(result.data);

    } catch (error) {
      console.log(error) 
    }
  }
  useEffect(() =>{
    repos()
  })

  return (
      <div className="App-overlay">
        <div className="">
          {allRepos.map((repo, index)=>{
            return<div key={index} className="App-inner-card1">
              <Link to={`/repo/${repo.id}`}>
                <div className="App-card1">
                  <h4>{repo.name}</h4>
                  <p className="App-para0">{repo.private? 'Private': 'Public'}</p>
                </div>

                <div className="App-para">
                  <img src={dot1} alt="dot1" height={10} width={10} />
                  <p className="App-semi-para">CSS Updated on {repo.created_at}</p>
                </div>

                <div className="App-para2">
                  <img src={dot4} alt="dot1" height={15} width={15} />
                  <p className="App-mini-para">Star: {repo.stargazers_count}</p>
                  <img className="App-img" src={dot5} alt="dot1" height={7} width={7} />
                </div>
              </Link>
            </div>
          })}
          

        </div>
      </div>
    )
}
export default Initial