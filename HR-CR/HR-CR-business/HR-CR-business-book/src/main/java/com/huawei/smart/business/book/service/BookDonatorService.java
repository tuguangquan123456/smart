package com.huawei.smart.business.book.service;

import com.huawei.smart.business.book.entity.BookDonator;
import com.huawei.smart.business.book.mapper.BookDonatorMapper;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 15-2-8
 * Time: 下午6:30
 * To change this template use File | Settings | File Templates.
 */
public class BookDonatorService {

    @Autowired
    private BookDonatorMapper bookDonatorMapper;
    public void add(BookDonator bookDonator){
        bookDonatorMapper.add(bookDonator);
    }
}
