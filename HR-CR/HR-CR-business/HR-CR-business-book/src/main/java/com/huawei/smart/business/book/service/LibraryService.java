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
    public List<Library> export1(String ResumeID, String TextBox1,String Cangku,String Type,String Category){
        return libraryMapper.export1(ResumeID,TextBox1,Cangku,Type,Category);
    }
    public List<Library> export2(String ResumeID, String TextBox1,String Cangku,String Type){
        return libraryMapper.export2(ResumeID,TextBox1,Cangku,Type);
    }
    public List<Library> export3(String ResumeID, String TextBox1,String Cangku){
        return libraryMapper.export3(ResumeID,TextBox1,Cangku);
    }
    public List<Library> export4(String ResumeID, String TextBox1){
        return libraryMapper.export4(ResumeID,TextBox1);
    }
    public List<Library> export5(String ResumeID){
        return libraryMapper.export5(ResumeID);
    }
    public List<Library> export(){
        return libraryMapper.export();
    }
}
