import React, { useState } from 'react'
import {Form ,FormGroup , Button,Input ,Breadcrumb ,BreadcrumbItem} from 'reactstrap';
import {useNavigate,Link} from 'react-router-dom';
import {nanoid} from 'nanoid';
const AddEmployee = ({setEmp,setAlertAdd}) => {

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [phone , setPhone] = useState("");
    const [date , setDate] = useState("");
    const [address , setAdress] = useState("");
    const [salary , setSalary] = useState("");

    const navigate = useNavigate();
    const idItem = nanoid().slice(0 , 4);
    const addEmployee = ()=>{
        setEmp((preEmp)=>{
            return [...preEmp ,{
                id:idItem,
                name:name,
                email:email,
                phone:phone,
                date:date,
                address:address,
                salary:salary
            }]
        })
        setAlertAdd(true);

        navigate('/crud/');
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return (
        <div className='mt-3'>
            <div className='div_bread'>
                <Breadcrumb className='mt-3'>
                    <BreadcrumbItem className='bread_text'>
                        <Link to='/crud/' >Employee List</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active className='bread_text'>
                        Add Employee
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Input 
                    type='text'
                    name='name'
                    placeholder='Name'
                    onChange={(e)=>setName(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <Input 
                    type='email'
                    name='email'
                    placeholder='Email'
                    onChange={(e)=>setEmail(e.target.value)}

                    />
                </FormGroup>

                <FormGroup>
                    <Input 
                    type='tel'
                    name='phone'
                    placeholder='Phone Number'
                    onChange={(e)=>setPhone(e.target.value)}

                    />
                </FormGroup>


                <FormGroup>
                    <Input 
                    type='date'
                    name='birthdate'
                    onChange={(e)=>setDate(e.target.value)}

                    />
                </FormGroup>


                <FormGroup>
                    <Input 
                    type='text'
                    name='address'
                    placeholder='Address'
                    onChange={(e)=>setAdress(e.target.value)}

                    />
                </FormGroup>


                <FormGroup>
                    <Input 
                    type='number'
                    name='salary'
                    placeholder='Salary'
                    onChange={(e)=>setSalary(e.target.value)}

                    />
                </FormGroup>
                <Button className='btn-sm' color='success' onClick={addEmployee}>
                <i className="fa fa-plus me-1"></i>
                Add Employee
                </Button>
            </Form>
        </div>
    )
}

export default AddEmployee
