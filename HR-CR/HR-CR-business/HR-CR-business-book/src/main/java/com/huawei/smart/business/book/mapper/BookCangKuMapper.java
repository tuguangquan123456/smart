package com.huawei.smart.business.book.mapper;

import com.huawei.smart.business.book.entity.BookCangKu;
import com.huawei.smart.orm.AbstractMapper;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 15-2-8
 * Time: 下午6:25
 * To change this template use File | Settings | File Templates.
 */
public interface BookCangKuMapper extends AbstractMapper<BookCangKu> {
    public List<BookCangKu> selectCangkuList();
}
