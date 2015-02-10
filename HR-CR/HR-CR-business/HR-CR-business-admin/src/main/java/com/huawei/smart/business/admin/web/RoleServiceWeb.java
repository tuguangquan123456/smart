package com.huawei.smart.business.admin.web;

import com.huawei.smart.business.admin.entity.Role;
import com.huawei.smart.business.admin.service.RoleService;
import com.huawei.smart.logger.SmartLogger;
import com.huawei.smart.util.json.JsonResultUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 15-1-29
 * Time: 下午8:34
 * To change this template use File | Settings | File Templates.
 */
@Component
@Path("/role")
public class RoleServiceWeb {
    private static SmartLogger logger = SmartLogger.getLogger(RoleServiceWeb.class);
    @Autowired
    private RoleService roleService;


    @Produces(MediaType.APPLICATION_JSON+";charset=UTF-8")
    @Path("/list")
    @GET
    public String list(){
        List<Role> list = roleService.list();
        return JsonResultUtils.getObjectResultByStringAsDefault(list, JsonResultUtils.Code.SUCCESS);
    }

    @Produces(MediaType.APPLICATION_JSON+";charset=UTF-8")
    @Path("/add")
    @POST
    public String add(@FormParam("roleName") String roleName,@FormParam("roleDetail") String roleDetail){
        long id;
        try{
            id = roleService.getIdByName(roleName);
        }
        catch (Exception ex){
            id=0;
        }
        if(id==0){
            Role role=new Role();
            role.setRoleDetail(roleDetail);
            role.setRoleName(roleName);
            roleService.add(role);
            return JsonResultUtils.getCodeAndMesByStringAsDefault(JsonResultUtils.Code.SUCCESS);
    }
    else{
        return JsonResultUtils.getCodeAndMesByString(JsonResultUtils.Code.ERROR.getCode(), "用户名已存在!");
    }
    }
}
