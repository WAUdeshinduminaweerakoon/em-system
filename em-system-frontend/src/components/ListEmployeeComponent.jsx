import React,{useEffect, useState} from 'react';
import { listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {

    const [employees, setEmployees] =useState([])
    const navigator = useNavigate();

    useEffect(()=>{
        listEmployees().then((response)=>{
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })

    },[])
    function addNewEmployee(){
        navigator('/addEmployee')
    }
  

    return (
        <div className="flex flex-col items-center justify-center h-full mt-10">
            <h2 className=" text-3xl font-bold mt-3">List of Employees</h2>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-4  " onClick={addNewEmployee}>
                Add Employee
            </button>
            <table className="border-separate border border-gray-600 mb-4 mt-6">
                <thead>
                    <tr className="bg-gray-300">
                        <th className="border border-gray-600 px-4 py-2">Employee Id</th>
                        <th className="border border-gray-600 px-4 py-2">Employee First Name</th>
                        <th className="border border-gray-600 px-4 py-2">Employee Last Name</th>
                        <th className="border border-gray-600 px-4 py-2">Employee Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>
                            <tr key={employee.id} className="bg-gray-100">
                                <td className="border border-gray-600 px-4 py-2">{employee.id}</td>
                                <td className="border border-gray-600 px-4 py-2">{employee.firstName}</td>
                                <td className="border border-gray-600 px-4 py-2">{employee.lastName}</td>
                                <td className="border border-gray-600 px-4 py-2">{employee.email}</td>
                            </tr>
                    )}
                </tbody>
            </table>
            
        </div>
    );
};

export default ListEmployeeComponent;
