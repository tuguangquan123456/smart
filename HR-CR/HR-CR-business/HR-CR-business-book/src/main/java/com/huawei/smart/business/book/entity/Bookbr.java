package com.huawei.smart.business.book.entity;

/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 15-2-8
 * Time: 下午4:49
 * To change this template use File | Settings | File Templates.
 */
public class Bookbr {
    private long BookID;
    private String BookName;
    private String  Btime;
    private String  Rtime;
    private String   LendID;
    private String  Cangku;

    public long getBookID() {
        return BookID;
    }

    public String getBookName() {
        return BookName;
    }

    public String getBtime() {
        return Btime;
    }

    public String getRtime() {
        return Rtime;
    }

    public String getLendID() {
        return LendID;
    }

    public String getCangku() {
        return Cangku;
    }

    public void setBookID(long bookID) {
        BookID = bookID;
    }

    public void setBookName(String bookName) {
        BookName = bookName;
    }

    public void setRtime(String rtime) {
        Rtime = rtime;
    }

    public void setBtime(String btime) {
        Btime = btime;
    }

    public void setLendID(String lendID) {
        LendID = lendID;
    }

    public void setCangku(String cangku) {
        Cangku = cangku;
    }
}
