package com.huawei.smart.business.admin.service;

import com.huawei.smart.business.admin.entity.Generalinfo;
import com.huawei.smart.business.admin.mapper.GeneralinfoMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 15-2-6
 * Time: 下午2:25
 * To change this template use File | Settings | File Templates.
 */
public class GeneralinfoService {
    @Autowired
    private GeneralinfoMapper generalinfoMapper;

    public List<Generalinfo> list(String FirstDepName,String SecondDepName,String ThirdDepName,String FourthDepName,String FivethDepName,String SixthDepName,String MinDepName){
        return generalinfoMapper.depList(FirstDepName,SecondDepName,ThirdDepName,FourthDepName,FivethDepName,SixthDepName,MinDepName);
    }
    public List<Generalinfo> list(String Role1Name,String Role2Name){
        return generalinfoMapper.roleList(Role1Name,Role2Name);
    }
}
