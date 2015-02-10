package com.huawei.smart.business.book.mapper;

import com.huawei.smart.business.book.entity.Books;
import com.huawei.smart.orm.AbstractMapper;

/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 15-2-8
 * Time: 下午6:27
 * To change this template use File | Settings | File Templates.
 */
public interface BooksMapper extends AbstractMapper<Books> {
    public int findCountOfBooksByProductIDAndBelongStorage(String IDCard,String cangku);
}
