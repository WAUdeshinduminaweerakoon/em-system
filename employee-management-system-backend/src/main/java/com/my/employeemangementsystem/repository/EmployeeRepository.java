package com.my.employeemangementsystem.repository;

import com.my.employeemangementsystem.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;


public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
