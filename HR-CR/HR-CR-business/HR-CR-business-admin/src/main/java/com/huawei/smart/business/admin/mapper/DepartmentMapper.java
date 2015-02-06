package com.huawei.smart.business.admin.mapper;

import com.huawei.smart.business.admin.entity.Department;
import com.huawei.smart.orm.AbstractMapper;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 15-1-31
 * Time: 上午10:45
 * To change this template use File | Settings | File Templates.
 */
public interface DepartmentMapper extends AbstractMapper<Department> {
    public List<Department> departmentList(int DepartmentLevel);
}
