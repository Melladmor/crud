import React from 'react'
import {Table} from 'reactstrap';
import {Link} from 'react-router-dom'

const Employee = ({deletEmp,updateItem,handlerNames}) => {

const list = handlerNames.map(({id,name,email,phone,date,address,salary})=>{
    return(
        <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{date}</td>
        <td>{address}</td>
        <td>{salary} $</td>
        <td>
            <Link to='/update' onClick={()=>updateItem(id)}><i className='fa fa-pencil me-2 btn btn-sm btn-primary' ></i></Link>
            <i className='fa fa-trash btn btn-sm btn-danger' onClick={()=>deletEmp(id)}></i>
        </td>
        </tr>
    )
})
return (
    <div className='mt-3'>
        <Table responsive className='table_employee'>
        <thead >
            <tr >
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Birth Date</th>
                <th>Address</th>
                <th>Salary</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {handlerNames.length === 0?<tr><td colSpan={8} className="text-center">There are no employees</td></tr>:list}
        </tbody>
        </Table>
    </div>
)
}

export default Employee
