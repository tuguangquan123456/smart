package com.huawei.smart.business.book.entity;

/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 15-2-8
 * Time: 下午5:08
 * To change this template use File | Settings | File Templates.
 */
public class BookInInfo {
    private long  ID;
    private String InGoodID;
    private String InGoodName;
    private String  InGoodDate;
    private String  InGoodCount;
    private String  unit;
    private String  GoodAount;
    private String  InGoodPeople ;
    private String  OutGoodUser ;
    private String  BelongCK ;
    private String  LendToID;
    private String  FirstDepartmentName;

    public void setID(long ID) {
        this.ID = ID;
    }

    public void setInGoodID(String inGoodID) {
        InGoodID = inGoodID;
    }

    public void setInGoodName(String inGoodName) {
        InGoodName = inGoodName;
    }

    public void setInGoodDate(String inGoodDate) {
        InGoodDate = inGoodDate;
    }

    public void setInGoodCount(String inGoodCount) {
        InGoodCount = inGoodCount;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public void setGoodAount(String goodAount) {
        GoodAount = goodAount;
    }

    public void setInGoodPeople(String inGoodPeople) {
        InGoodPeople = inGoodPeople;
    }

    public void setOutGoodUser(String outGoodUser) {
        OutGoodUser = outGoodUser;
    }

    public void setBelongCK(String belongCK) {
        BelongCK = belongCK;
    }

    public void setLendToID(String lendToID) {
        LendToID = lendToID;
    }

    public void setFirstDepartmentName(String firstDepartmentName) {
        FirstDepartmentName = firstDepartmentName;
    }

    public long getID() {

        return ID;
    }

    public String getInGoodName() {
        return InGoodName;
    }

    public String getInGoodID() {
        return InGoodID;
    }

    public String getInGoodDate() {
        return InGoodDate;
    }

    public String getInGoodCount() {
        return InGoodCount;
    }

    public String getUnit() {
        return unit;
    }

    public String getGoodAount() {
        return GoodAount;
    }

    public String getInGoodPeople() {
        return InGoodPeople;
    }

    public String getOutGoodUser() {
        return OutGoodUser;
    }

    public String getBelongCK() {
        return BelongCK;
    }

    public String getLendToID() {
        return LendToID;
    }

    public String getFirstDepartmentName() {
        return FirstDepartmentName;
    }
}
