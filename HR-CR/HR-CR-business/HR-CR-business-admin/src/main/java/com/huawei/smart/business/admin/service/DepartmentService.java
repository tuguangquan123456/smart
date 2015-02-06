package com.huawei.smart.business.admin.service;

import com.huawei.smart.business.admin.entity.Department;
import com.huawei.smart.business.admin.mapper.DepartmentMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 15-1-31
 * Time: 上午10:47
 * To change this template use File | Settings | File Templates.
 */
public class DepartmentService {
    @Autowired
    private DepartmentMapper departmentMapper;

    public List<Department> list(int DepartmentLevel){
        return departmentMapper.departmentList(DepartmentLevel);
    }
}
