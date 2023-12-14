import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Homepage(props){

  const navigate = useNavigate()

  return(
    <div id='homepage'>
      <h1>Github Profile</h1>
      <input type='text' placeholder='User or repository' id='mainInput' onKeyUp={e => {
        if (e.key === "Enter"){
          var value = e.target.value
          var valueArray = value.split('/')
          valueArray = valueArray.filter(x => x != "")
          if (valueArray.length > 2) {
            props.notFoundError("Invalid input")
            return
          }
          if (valueArray.length == 1){
            navigate("/" + valueArray[0])
          }
          else if (valueArray.length == 2){
            navigate("/" + valueArray[0] + "/" + valueArray[1])
          }
        }
      }} />
      <h2 id='notFoundError'>{props.errorMessage}</h2>
    </div>
  )
}