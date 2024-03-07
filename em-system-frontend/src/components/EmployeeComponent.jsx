import React, {useState, useEffect} from 'react'
import { createEmployee, getEmployee } from '../services/EmployeeService'
import {useNavigate, useParams} from 'react-router-dom';

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const {id} = useParams();

    const [errors, setErrors] = useState({
        firstName:'',
        lastName:'',
        email:''
    })

    const navigator = useNavigate();

    useEffect(() => {
        if(id){
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(error=>{
                console.error(error);
            });
        }
    }, [id]);

   
    
    function saveEmployee(e){
        e.preventDefault();

        if(validateForm()){
            const employee = {firstName, lastName, email}
            console.log(employee)
    
            createEmployee(employee).then((response) => {
                console.log(response.data);
                navigator('/employees')
            })

        }

       
    }
    function validateForm(){
        let valid =true;

        const errorsCopy = {...errors}

        if(firstName.trim()){
            errorsCopy.firstName = '';
        }else{
            errorsCopy.firstName = 'First name is required';
            valid = false;
        }
        if(lastName.trim()){
            errorsCopy.lastName = '';
        }else{
            errorsCopy.lastName = 'Last is required';
            valid = false;
        }
        if(email.trim()){
            errorsCopy.email = '';
        }else{
            errorsCopy.email = 'Email is required';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    function pageTitle(){
        if(id){
            return <h2 className="block text-gray-700 text-xl font-bold mb-4 ">Update Employee</h2>
        }else{
            return <h2 className="block text-gray-700 text-xl font-bold mb-4 ">Add Employee</h2>
        }
    }

  return (
    <div className="flex justify-center items-center h-screen">
    <div className="w-full max-w-xs">
        
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {
                pageTitle()
            }
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    First Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Enter Employee First Name"
                    name="firstName"
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                />
                {errors.firstName && <div className="text-red-500 text-sm">{errors.firstName}</div>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Last Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Enter Employee Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={(e)=> setLastName(e.target.value)}
                />
                {errors.lastName && <div className="text-red-500 text-sm">{errors.lastName}</div>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Enter Employee Email"
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="button"
                onClick={saveEmployee}
                >
                Submit
            </button>
        </form>
    </div>
</div>
  )
}

export default EmployeeComponent
