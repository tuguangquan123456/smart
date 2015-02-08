package com.huawei.smart.business.book.entity;

/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 15-2-8
 * Time: 下午5:02
 * To change this template use File | Settings | File Templates.
 */
public class BookOutInfo {
    private long ID;
    private String OutGoodID;
    private String OutGoodDate ;
    private String OutGoodName;
    private float  OutGoodCount ;
    private String  unit ;
    private String  GoodAount ;
    private String  BelongCK ;
    private String  OutGoodPeople ;
    private String  OutGoodUser;
    private String  LendToID ;
    private String  FirstDepartmentName;

    public long getID() {
        return ID;
    }

    public String getOutGoodDate() {
        return OutGoodDate;
    }

    public String getOutGoodID() {
        return OutGoodID;
    }

    public String getOutGoodName() {
        return OutGoodName;
    }

    public float getOutGoodCount() {
        return OutGoodCount;
    }

    public String getUnit() {
        return unit;
    }

    public String getGoodAount() {
        return GoodAount;
    }

    public String getBelongCK() {
        return BelongCK;
    }

    public String getOutGoodPeople() {
        return OutGoodPeople;
    }

    public String getLendToID() {
        return LendToID;
    }

    public String getOutGoodUser() {
        return OutGoodUser;
    }

    public String getFirstDepartmentName() {
        return FirstDepartmentName;
    }

    public void setID(long ID) {
        this.ID = ID;
    }

    public void setOutGoodDate(String outGoodDate) {
        OutGoodDate = outGoodDate;
    }

    public void setOutGoodID(String outGoodID) {
        OutGoodID = outGoodID;
    }

    public void setOutGoodName(String outGoodName) {
        OutGoodName = outGoodName;
    }

    public void setOutGoodCount(float outGoodCount) {
        OutGoodCount = outGoodCount;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public void setGoodAount(String goodAount) {
        GoodAount = goodAount;
    }

    public void setBelongCK(String belongCK) {
        BelongCK = belongCK;
    }

    public void setOutGoodUser(String outGoodUser) {
        OutGoodUser = outGoodUser;
    }

    public void setOutGoodPeople(String outGoodPeople) {
        OutGoodPeople = outGoodPeople;
    }

    public void setLendToID(String lendToID) {
        LendToID = lendToID;
    }

    public void setFirstDepartmentName(String firstDepartmentName) {
        FirstDepartmentName = firstDepartmentName;
    }
}
