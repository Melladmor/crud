import React, { useState } from 'react'
import {InputGroup,InputGroupText,Input} from 'reactstrap'
const Filter = ({filterNames}) => {

    const [filter , setFilter] = useState();

    const filteration = (e)=>{
        const name = e.target.value;
        setFilter(name);
        filterNames(name);
    }
  return (
    <div>
      <InputGroup>
        <InputGroupText>
        <i className="fa fa-search"></i>
        </InputGroupText>
        <Input  type='search' placeholder='Search by name...' onChange={filteration}/>
      </InputGroup>
    </div>
  )
}

export default Filter;
