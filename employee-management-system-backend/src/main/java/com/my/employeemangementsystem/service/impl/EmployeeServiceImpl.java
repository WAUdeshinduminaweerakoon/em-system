package com.my.employeemangementsystem.service.impl;

import com.my.employeemangementsystem.dto.EmployeeDto;
import com.my.employeemangementsystem.entity.Employee;
import com.my.employeemangementsystem.mapper.EmployeeMapper;
import com.my.employeemangementsystem.repository.EmployeeRepository;
import com.my.employeemangementsystem.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.antlr.v4.runtime.misc.LogManager;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }
}
