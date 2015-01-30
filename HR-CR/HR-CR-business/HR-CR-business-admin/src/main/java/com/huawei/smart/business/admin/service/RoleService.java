package com.huawei.smart.business.admin.service;

import com.huawei.smart.business.admin.entity.Role;
import com.huawei.smart.business.admin.mapper.RoleMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 15-1-29
 * Time: 下午8:34
 * To change this template use File | Settings | File Templates.
 */
public class RoleService {
    @Autowired
    private RoleMapper roleMapper;

    public List<Role> list(){
        return roleMapper.roleList();
    }
}
