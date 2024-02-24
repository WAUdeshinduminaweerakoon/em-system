import React from 'react';

const ListEmployeeComponent = () => {
    const emDummyData = [
        {
            "id": 1,
            "firstName": "Udesh",
            "lastName": "Indumina",
            "email": "udesh@gmail.com"
        },
        {
            "id": 2,
            "firstName": "pathum",
            "lastName": "shanjana",
            "email": "pathum@gmail.com"
        },
        {
            "id": 3,
            "firstName": "ramesh",
            "lastName": "Madusanka",
            "email": "ramesh@gmail.com"
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center h-full mt-10">
            <h2 className=" text-3xl font-bold mt-3">List of Employees</h2>
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
                    {emDummyData.map(employee =>
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
