package com.huawei.smart.business.book.entity;

/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 15-2-8
 * Time: 下午5:06
 * To change this template use File | Settings | File Templates.
 */
public class BookOutHistory {
    private long ID;
    private String OutGoodID ;
    private String  OutGoodName ;
    private String  OutGoodCount;
    private String  unit;
    private String  OutGoodPeople;
    private String  BelongCK;
    private String  OutGoodDate;
    private String  OutGoodRemark ;
    private String  LendToID;
    private String  FirstDepartmentName ;

    public void setID(long ID) {
        this.ID = ID;
    }

    public void setOutGoodID(String outGoodID) {
        OutGoodID = outGoodID;
    }

    public void setOutGoodName(String outGoodName) {
        OutGoodName = outGoodName;
    }

    public void setOutGoodCount(String outGoodCount) {
        OutGoodCount = outGoodCount;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public void setOutGoodPeople(String outGoodPeople) {
        OutGoodPeople = outGoodPeople;
    }

    public void setBelongCK(String belongCK) {
        BelongCK = belongCK;
    }

    public void setOutGoodDate(String outGoodDate) {
        OutGoodDate = outGoodDate;
    }

    public void setOutGoodRemark(String outGoodRemark) {
        OutGoodRemark = outGoodRemark;
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

    public String getOutGoodID() {
        return OutGoodID;
    }

    public String getOutGoodCount() {
        return OutGoodCount;
    }

    public String getOutGoodName() {
        return OutGoodName;
    }

    public String getUnit() {
        return unit;
    }

    public String getOutGoodPeople() {
        return OutGoodPeople;
    }

    public String getBelongCK() {
        return BelongCK;
    }

    public String getOutGoodDate() {
        return OutGoodDate;
    }

    public String getOutGoodRemark() {
        return OutGoodRemark;
    }

    public String getFirstDepartmentName() {
        return FirstDepartmentName;
    }

    public String getLendToID() {
        return LendToID;
    }
}
