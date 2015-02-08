package com.huawei.smart.business.book.entity;

/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 15-2-8
 * Time: 下午6:09
 * To change this template use File | Settings | File Templates.
 */
public class BookDonator {
    private long ID;
    private String productID;
    private String productName;
    private String  Addtime;
    private String  Adduser;
    private String  Price;
    private long  Damount;

    public void setID(long ID) {
        this.ID = ID;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public void setProductID(String productID) {
        this.productID = productID;
    }

    public void setAdduser(String adduser) {
        Adduser = adduser;
    }

    public void setAddtime(String addtime) {
        Addtime = addtime;
    }

    public void setPrice(String price) {
        Price = price;
    }

    public void setDamount(long damount) {
        Damount = damount;
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

    public String getAdduser() {
        return Adduser;
    }

    public String getAddtime() {
        return Addtime;
    }

    public String getPrice() {
        return Price;
    }

    public long getDamount() {
        return Damount;
    }
}
