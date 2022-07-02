import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Header from './component/Header';
import AddEmployee from './component/AddEmployee';
import Employee from './component/Employee';
import Update from './component/Update';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Filter from './component/Filter';

function App() {
  const [emp , setEmp] =useState(()=>JSON.parse(localStorage.getItem("employee"))||[{id:"Homu",name:"Mellad",email:"melladmor@gmail.com",phone:"0951427208",date:"2022-07-11",address:"syria",salary:"200"},{"id":"pFr2","name":"ahmad","email":"ahmad@gmail.com","phone":"0954781247","date":"2022-07-16","address":"syria","salary":"200"},{"id":"WmgN","name":"salem","email":"salem@gmail.com","phone":"0951427208","date":"2022-07-03","address":"syria","salary":"150"},{"id":"vHvv","name":"rami","email":"rami@gmail.com","phone":"0958789797","date":"2022-07-21","address":"syria","salary":"300"}]);




    useEffect(()=>{
        localStorage.setItem('employee' , JSON.stringify(emp));
    },[emp])

    const [itemUpdate , setUpdateItem] = useState();


    const [alertAdd ,setAlertAdd] = useState(false);

    const [alertDelete , setAlertDelete]= useState(false);

    const [alertUpdated , setAlertUpdate] = useState(false);


    const [filter , setFilter] =useState('');


    const deletEmp =(id)=>{
      setEmp((prevData)=>{
        return prevData.filter((el) => el.id !== id);
      })
      setAlertDelete(true);
    }

    const updateItem = (id)=>{
      const itemFilter = emp.filter((el) => el.id === id)
      setUpdateItem(itemFilter);
    }

    const editEmp =(idResve, valueUpdated)=>{

      setEmp((prevEmp)=> prevEmp.map((el) => el.id === idResve ? valueUpdated : el))

    }

    const notifayAdd = ()=>{
      toast.success('Add Success',{autoClose:1500})
    }
    const notifayDelte = ()=>{
      toast.warn('Delete Success',{autoClose:1500})
    }

    const notifayUpdate = ()=>{
      toast.success('Update Success',{autoClose:1500})
    }

    useEffect(()=>{
      if(alertAdd ===true){
        notifayAdd();
      }
      else if(alertDelete === true){
        notifayDelte();
      }
      else if(alertUpdated === true){
        notifayUpdate();
      }
    })

        useEffect(()=>{
        if(alertUpdated ===true){
          setTimeout(()=>{
              setAlertUpdate(false);
          },3000)
        }
        else if(alertAdd === true){
          setTimeout(()=>{
            setAlertAdd(false);
        },3000)
        }
        else if(alertDelete === true){
          setTimeout(()=>{
            setAlertDelete(false);
        },3000)
      }

    },[alertUpdated ,alertAdd ,alertDelete])



    const filterNames =(name)=>{
      setFilter(name);
    }
    console.log(filter);


    const handlerNames =()=>{
      if(filter.length !== 0 ){
          return emp.filter((el)=> el.name.includes(filter))
      }
      return emp;
    }





  return (
    <div className="App">
    <div className='container_App'>
    <Router>
      <Header/>
      <Filter filterNames={filterNames} />
      <ToastContainer/>
      <Routes>
      <Route path='/crud/' element={<Employee deletEmp={deletEmp} updateItem={updateItem} handlerNames={handlerNames()}/>}/>
      <Route path='/addItem' element={<AddEmployee setEmp={setEmp} setAlertAdd={setAlertAdd}/>}/>
      <Route path='/update' element={<Update itemUpdate={itemUpdate} editEmp={editEmp} emp={emp} setAlertUpdate={setAlertUpdate}/> }/>
      </Routes>
    </Router>
    </div>
    </div>
    
  );
}

export default App;
        