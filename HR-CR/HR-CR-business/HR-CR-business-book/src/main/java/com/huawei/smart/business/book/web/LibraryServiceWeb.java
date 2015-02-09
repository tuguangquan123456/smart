package com.huawei.smart.business.book.web;

import com.huawei.smart.business.book.entity.Library;
import com.huawei.smart.business.book.service.LibraryService;
import com.huawei.smart.logger.SmartLogger;
import com.huawei.smart.util.json.JsonResultUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 15-2-9
 * Time: 上午10:59
 * To change this template use File | Settings | File Templates.
 */
@Component
@Path("/library")
public class LibraryServiceWeb {
    private static SmartLogger logger = SmartLogger.getLogger(LibraryServiceWeb.class);
    @Autowired
    private LibraryService libraryService;
    @Produces(MediaType.APPLICATION_JSON+";charset=UTF-8")
    @Path("/selectCangku")
    @GET
    public String selectCangkuList(){
        System.out.println("hhhhhhhhh");
        List<Library> list = libraryService.selectCangkuList();
        return JsonResultUtils.getObjectResultByStringAsDefault(list, JsonResultUtils.Code.SUCCESS);
    }
    @Produces(MediaType.APPLICATION_JSON+";charset=UTF-8")
    @Path("/selectType")
    @GET
    public String selectTypeList(){
        System.out.println("hhhhhhhhh");
        List<Library> list = libraryService.selectTypeList();
        return JsonResultUtils.getObjectResultByStringAsDefault(list, JsonResultUtils.Code.SUCCESS);
    }
    @Produces(MediaType.APPLICATION_JSON+";charset=UTF-8")
    @Path("/selectCategory")
    @GET
    public String selectCategoryList(){
        System.out.println("hhhhhhhhh");
        List<Library> list = libraryService.selectCategoryList();
        return JsonResultUtils.getObjectResultByStringAsDefault(list, JsonResultUtils.Code.SUCCESS);
    }
}
