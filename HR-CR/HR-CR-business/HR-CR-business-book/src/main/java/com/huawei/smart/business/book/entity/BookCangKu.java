package com.huawei.smart.business.book.entity;

/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 15-2-8
 * Time: 下午4:54
 * To change this template use File | Settings | File Templates.
 */
public class BookCangKu {
    private long storageID;
    private String storageName;
    private String storageInfo ;
    private String FirstDepartmentName;

    public long getStorageID() {
        return storageID;
    }

    public String getStorageName() {
        return storageName;
    }

    public String getStorageInfo() {
        return storageInfo;
    }

    public String getFirstDepartmentName() {
        return FirstDepartmentName;
    }

    public void setStorageID(long storageID) {
        this.storageID = storageID;
    }

    public void setStorageName(String storageName) {
        this.storageName = storageName;
    }

    public void setStorageInfo(String storageInfo) {
        this.storageInfo = storageInfo;
    }

    public void setFirstDepartmentName(String firstDepartmentName) {
        FirstDepartmentName = firstDepartmentName;
    }
}
