import React, {useState} from 'react'
import { createEmployee } from '../services/EmployeeService'
import {useNavigate} from 'react-router-dom';

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const navigator = useNavigate();
    
    function saveEmployee(e){
        e.preventDefault();

        const employee = {firstName, lastName, email}
        console.log(employee)

        createEmployee(employee).then((response) => {
            console.log(response.data);
            navigator('/employees')
        })
    }

  return (
    <div className="flex justify-center items-center h-screen">
    <div className="w-full max-w-xs">
        
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="block text-gray-700 text-xl font-bold mb-4 ">Add Employee</h2>
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
