package com.huawei.smart.business.admin.mapper;

import com.huawei.smart.business.admin.entity.Generalinfo;
import com.huawei.smart.orm.AbstractMapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 15-2-6
 * Time: 下午2:24
 * To change this template use File | Settings | File Templates.
 */
public interface GeneralinfoMapper extends AbstractMapper<Generalinfo> {
    public List<Generalinfo> depList(@Param("FirstDepName")String FirstDepName,@Param("SecondDepName")String SecondDepName,
                                     @Param("ThirdDepName")String ThirdDepName,@Param("FourthDepName")String FourthDepName,
                                     @Param("FivethDepName")String FivethDepName,@Param("SixthDepName")String SixthDepName,
                                     @Param("MinDepName")String MinDepName);
    public List<Generalinfo> roleList(@Param("Role1Name")String Role1Name,@Param("Role2Name")String Role2Name);
}
