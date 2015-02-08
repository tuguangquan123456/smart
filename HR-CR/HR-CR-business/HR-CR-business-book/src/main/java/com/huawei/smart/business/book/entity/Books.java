package com.huawei.smart.business.book.entity;

/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 15-2-8
 * Time: 下午4:57
 * To change this template use File | Settings | File Templates.
 */
public class Books {
    private  long ID;
    private String productID;
    private String  productName;
    private String Amount ;
    private String unit  ;
    private String  Safeamount ;
    private String  productType ;
    private String  BelongStorage;
    private String   Addtime  ;
    private String   Adduser  ;
    private String   Price  ;
    private String   totalPrice ;
    private String  LendToID;
    private String  IsLendOut ;
    private long  Days ;
    private String LastLendTime;
    private String  FirstDepartmentName ;
    private String    IDandAdd ;
    private String   category;

    public void setID(long ID) {
        this.ID = ID;
    }

    public void setProductID(String productID) {
        this.productID = productID;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public void setAmount(String amount) {
        Amount = amount;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public void setSafeamount(String safeamount) {
        Safeamount = safeamount;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }

    public void setBelongStorage(String belongStorage) {
        BelongStorage = belongStorage;
    }

    public void setAddtime(String addtime) {
        Addtime = addtime;
    }

    public void setAdduser(String adduser) {
        Adduser = adduser;
    }

    public void setPrice(String price) {
        Price = price;
    }

    public void setTotalPrice(String totalPrice) {
        this.totalPrice = totalPrice;
    }

    public void setLendToID(String lendToID) {
        LendToID = lendToID;
    }

    public void setIsLendOut(String isLendOut) {
        IsLendOut = isLendOut;
    }

    public void setDays(long days) {
        Days = days;
    }

    public void setLastLendTime(String lastLendTime) {
        LastLendTime = lastLendTime;
    }

    public void setFirstDepartmentName(String firstDepartmentName) {
        FirstDepartmentName = firstDepartmentName;
    }

    public void setIDandAdd(String IDandAdd) {
        this.IDandAdd = IDandAdd;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public long getID() {
        return ID;
    }

    public String getProductID() {
        return productID;
    }

    public String getProductName() {
        return productName;
    }

    public String getAmount() {
        return Amount;
    }

    public String getUnit() {
        return unit;
    }

    public String getSafeamount() {
        return Safeamount;
    }

    public String getProductType() {
        return productType;
    }

    public String getBelongStorage() {
        return BelongStorage;
    }

    public String getAddtime() {
        return Addtime;
    }

    public String getTotalPrice() {
        return totalPrice;
    }

    public String getPrice() {
        return Price;
    }

    public String getAdduser() {
        return Adduser;
    }

    public String getLendToID() {
        return LendToID;
    }

    public String getIsLendOut() {
        return IsLendOut;
    }

    public long getDays() {
        return Days;
    }

    public String getFirstDepartmentName() {
        return FirstDepartmentName;
    }

    public String getLastLendTime() {
        return LastLendTime;
    }

    public String getIDandAdd() {
        return IDandAdd;
    }

    public String getCategory() {
        return category;
    }
}
