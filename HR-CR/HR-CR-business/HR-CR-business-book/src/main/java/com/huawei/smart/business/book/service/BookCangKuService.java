package com.huawei.smart.business.book.service;

import com.huawei.smart.business.book.entity.BookCangKu;
import com.huawei.smart.business.book.mapper.BookCangKuMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 15-2-8
 * Time: 下午6:31
 * To change this template use File | Settings | File Templates.
 */
public class BookCangKuService {
    @Autowired
    private BookCangKuMapper bookCangKuMapper;

    public List<BookCangKu> selectCangkuList(){
        return bookCangKuMapper.selectCangkuList();
    }
}
