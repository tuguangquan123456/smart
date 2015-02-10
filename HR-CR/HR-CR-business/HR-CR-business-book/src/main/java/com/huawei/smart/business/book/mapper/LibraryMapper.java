package com.huawei.smart.business.book.mapper;

import com.huawei.smart.business.book.entity.Library;
import com.huawei.smart.orm.AbstractMapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 15-2-9
 * Time: 上午10:59
 * To change this template use File | Settings | File Templates.
 */
public interface LibraryMapper extends AbstractMapper<Library> {
    public List<Library> selectCangkuList();
    public List<Library> selectTypeList();
    public List<Library> selectCategoryList();
    public int search(@Param("productID")String productID, @Param("productName")String productName,@Param("BelongStorage")String BelongStorage,@Param("Adduser")String Adduser,@Param("category")String category);
}
