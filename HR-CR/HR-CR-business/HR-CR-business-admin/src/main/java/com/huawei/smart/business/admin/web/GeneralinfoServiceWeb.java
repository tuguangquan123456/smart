package com.huawei.smart.business.admin.web;

import com.huawei.smart.business.admin.entity.Generalinfo;
import com.huawei.smart.business.admin.service.GeneralinfoService;
import com.huawei.smart.logger.SmartLogger;
import com.huawei.smart.util.json.JsonResultUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 15-2-6
 * Time: 下午2:25
 * To change this template use File | Settings | File Templates.
 */
@Component
@Path("/general")
public class GeneralinfoServiceWeb {
    private static SmartLogger logger = SmartLogger.getLogger(RoleServiceWeb.class);

    @Autowired
    private GeneralinfoService generalinfoService;

    @Produces(MediaType.APPLICATION_JSON+";charset=UTF-8")
    @Path("/depList")
    @POST
    public String departmentList(@FormParam("departmentJB") String departmentJB){
        String FirstDepName=null;
        String SecondDepName=null;
        String ThirdDepName=null;
        String FourthDepName=null;
        String FivethDepName=null;
        String SixthDepName=null;
        String MinDepName=null;

        if(departmentJB.equals("一级部门")){
            FirstDepName="";
        }
        if(departmentJB.equals("二级部门")){
            SecondDepName="";
        }
        if(departmentJB.equals("三级部门")){
            ThirdDepName="";
        }
        if(departmentJB.equals("四级部门")){
            FourthDepName="";
        }
        if(departmentJB.equals("五级部门")){
            FivethDepName="";
        }
        if(departmentJB.equals("六级部门")){
            SixthDepName="";
        }
        if(departmentJB.equals("最小部门")){
            MinDepName="";
        }
        List<Generalinfo> list = generalinfoService.list(FirstDepName,SecondDepName,ThirdDepName,FourthDepName,FivethDepName,SixthDepName,MinDepName);
        return JsonResultUtils.getObjectResultByStringAsDefault(list, JsonResultUtils.Code.SUCCESS);
    }

    @Produces(MediaType.APPLICATION_JSON+";charset=UTF-8")
    @Path("/roleList")
    @POST
    public String roleList(@FormParam("roleName") String roleName){
        String Role1Name=null;
        String Role2Name=null;


        if(roleName.equals("角色1")){
            Role1Name="";
        }
        if(roleName.equals("角色2")){
            Role2Name="";
        }

        List<Generalinfo> list = generalinfoService.list(Role1Name,Role2Name);
        return JsonResultUtils.getObjectResultByStringAsDefault(list, JsonResultUtils.Code.SUCCESS);
    }
}
