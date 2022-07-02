import React, { useState } from 'react'
import {Form ,FormGroup , Button,Input,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import { useNavigate} from 'react-router-dom';

const Update = ({itemUpdate ,editEmp,setAlertUpdate}) => {

    const navigate = useNavigate();
    const id = itemUpdate[0].id;

    const [name , setName] = useState(itemUpdate[0].name);
    const [email , setEmail] = useState(itemUpdate[0].email);
    const [phone , setPhone] = useState(itemUpdate[0].phone);
    const [date , setDate] = useState(itemUpdate[0].date);
    const [address , setAddress] = useState(itemUpdate[0].address);
    const [salary , setSalary] = useState(itemUpdate[0].salary);


    const informationUpdated = {id , name , email , phone , date , address , salary}



    const handleSubmit=(e)=>{
        e.preventDefault();
        editEmp(id, informationUpdated);
        setAlertUpdate(true);
        navigate('/crud/');
    }




    return (
    <div className='mt-3'>

        <Form onSubmit={handleSubmit}>

            <div className='div_bread'>
                <Breadcrumb className='mt-3'>
                    <BreadcrumbItem className='bread_text'>
                        <Link to='/crud/' >Employee List</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active className='bread_text'>
                        Edit Employee
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <FormGroup>
                <Input 
                type='text'
                name='name'
                disabled
                value={id}
                />
            </FormGroup>
            <FormGroup>
                <Input 
                type='text'
                name='name'
                placeholder='Name'
                value={name}
                onChange={(e)=>setName(e.target.value)}

                />
            </FormGroup>

            <FormGroup>
                <Input 
                type='email'
                name='email'
                placeholder='Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}

                />
            </FormGroup>

            <FormGroup>
                <Input 
                type='tel'
                name='phone'
                placeholder='Phone Number'
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}

                />
            </FormGroup>


            <FormGroup>
                <Input 
                type='text'
                name='birthdate'
                value={date}
                onChange={(e)=>setDate(e.target.value)}

                />
            </FormGroup>


            <FormGroup>
                <Input 
                type='text'
                name='address'
                placeholder='Address'
                value={address}
                onChange={(e)=>setAddress(e.target.value)}

                />
            </FormGroup>


            <FormGroup>
                <Input 
                type='number'
                name='salary'
                placeholder='Salary'
                value={salary}
                onChange={(e)=>setSalary(e.target.value)}



                />
            </FormGroup>
            <Button className='btn-sm' color='primary' >
            <i className='fa fa-pencil me-1'></i>
            Update
            </Button>
        </Form>
    </div>
    )
}

export default Update
