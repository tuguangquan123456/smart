package com.huawei.smart.business.admin.mapper;

import com.huawei.smart.business.admin.entity.Role;
import com.huawei.smart.orm.AbstractMapper;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 15-1-29
 * Time: 下午8:31
 * To change this template use File | Settings | File Templates.
 */
public interface RoleMapper extends AbstractMapper<Role> {
    public List<Role> roleList();
}
