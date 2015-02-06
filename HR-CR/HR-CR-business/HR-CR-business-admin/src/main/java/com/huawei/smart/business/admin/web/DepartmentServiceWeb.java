package com.huawei.smart.business.admin.web;

import com.huawei.smart.business.admin.entity.Department;
import com.huawei.smart.business.admin.entity.Role;
import com.huawei.smart.business.admin.service.DepartmentService;
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
 * Date: 15-1-31
 * Time: 上午10:47
 * To change this template use File | Settings | File Templates.
 */
@Component
@Path("/department")
public class DepartmentServiceWeb {

    private static SmartLogger logger = SmartLogger.getLogger(RoleServiceWeb.class);

    @Autowired
    private DepartmentService departmentService;

    @Produces(MediaType.APPLICATION_JSON+";charset=UTF-8")
    @Path("/departmentListBydepartmentLevel")
    @POST
    public String departmentList(@FormParam("departmentSX") String departmentSX){
        int  DepartmentLevel=0;
        if (departmentSX.equals("一级属性"))
             DepartmentLevel=1;
        else if (departmentSX.equals("二级属性"))
            DepartmentLevel=2;
        else if (departmentSX.equals("三级属性"))
            DepartmentLevel=3;

        List<Department> list = departmentService.list(DepartmentLevel);
        return JsonResultUtils.getObjectResultByStringAsDefault(list, JsonResultUtils.Code.SUCCESS);
    }

}
