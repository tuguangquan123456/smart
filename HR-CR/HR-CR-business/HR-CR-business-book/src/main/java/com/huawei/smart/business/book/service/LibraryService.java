package com.huawei.smart.business.book.service;

import com.huawei.smart.business.book.entity.Library;
import com.huawei.smart.business.book.mapper.LibraryMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 15-2-9
 * Time: 上午10:59
 * To change this template use File | Settings | File Templates.
 */
public class LibraryService {
    @Autowired
    private LibraryMapper libraryMapper;

    public List<Library> selectCangkuList(){
        return libraryMapper.selectCangkuList();
    }
    public List<Library> selectTypeList(){
        return libraryMapper.selectTypeList();
    }
    public List<Library> selectCategoryList(){
        return libraryMapper.selectCategoryList();
    }
    public int search(String ResumeID, String TextBox1,String Cangku,String Type,String Category){
        return libraryMapper.search(ResumeID,TextBox1,Cangku,Type,Category);
    }
}
