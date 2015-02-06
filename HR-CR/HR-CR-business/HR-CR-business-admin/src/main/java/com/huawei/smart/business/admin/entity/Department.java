package com.huawei.smart.business.admin.entity;

/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 15-1-31
 * Time: 上午10:42
 * To change this template use File | Settings | File Templates.
 */
public class Department {
    private long departmentID;
    private String departmentName;
    private long parentID;
    private long departmentLevel;
    private String remark;

    public long getDepartmentID() {
        return departmentID;
    }

    public String getDepartmentName() {
        return departmentName;
    }

    public long getParentID() {
        return parentID;
    }

    public long getDepartmentLevel() {
        return departmentLevel;
    }

    public String getRemark() {
        return remark;
    }

    public void setDepartmentID(long departmentID) {
        this.departmentID = departmentID;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }

    public void setParentID(long parentID) {
        this.parentID = parentID;
    }

    public void setDepartmentLevel(long departmentLevel) {
        this.departmentLevel = departmentLevel;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }
}
