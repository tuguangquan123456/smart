package com.huawei.smart.business.book.service;

import com.huawei.smart.business.book.entity.Books;
import com.huawei.smart.business.book.mapper.BooksMapper;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 15-2-8
 * Time: 下午6:28
 * To change this template use File | Settings | File Templates.
 */
public class BooksService {
    @Autowired
    private BooksMapper booksMapper;
    public int findCountOfBooksByProductIDAndBelongStorage(String IDCard,String cangku){
         return  booksMapper.findCountOfBooksByProductIDAndBelongStorage(IDCard,cangku);
    }
    public void add(Books books){
        booksMapper.add(books);
    }
}
