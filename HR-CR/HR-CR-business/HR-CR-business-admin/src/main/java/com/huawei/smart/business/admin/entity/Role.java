package com.huawei.smart.business.admin.entity;

/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 15-1-29
 * Time: 下午8:28
 * To change this template use File | Settings | File Templates.
 */
public class Role {
    private long roleId;
    private String roleName;
    private String roleDetail;

    public long getRoleId() {
        return roleId;
    }

    public String getRoleName() {
        return roleName;
    }

    public String getRoleDetail() {
        return roleDetail;
    }

    public void setRoleId(long roleId) {
        this.roleId = roleId;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public void setRoleDetail(String roleDetail) {
        this.roleDetail = roleDetail;
    }
}
