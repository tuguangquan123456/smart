package com.huawei.smart.business.book.web;

import com.huawei.smart.business.book.entity.Library;
import com.huawei.smart.business.book.service.LibraryService;
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
        List<Library> list = libraryService.selectCangkuList();
        return JsonResultUtils.getObjectResultByStringAsDefault(list, JsonResultUtils.Code.SUCCESS);
    }

    @Produces(MediaType.APPLICATION_JSON+";charset=UTF-8")
    @Path("/selectType")
    @GET
    public String selectTypeList(){
        List<Library> list = libraryService.selectTypeList();
        return JsonResultUtils.getObjectResultByStringAsDefault(list, JsonResultUtils.Code.SUCCESS);
    }

    @Produces(MediaType.APPLICATION_JSON+";charset=UTF-8")
    @Path("/selectCategory")
    @GET
    public String selectCategoryList(){
        List<Library> list = libraryService.selectCategoryList();
        return JsonResultUtils.getObjectResultByStringAsDefault(list, JsonResultUtils.Code.SUCCESS);
    }

    @Produces(MediaType.APPLICATION_JSON+";charset=UTF-8")
    @Path("/search")
    @POST
    public String search(@FormParam("ResumeID") String ResumeID,@FormParam("TextBox1") String TextBox1,
                         @FormParam("Cangku") String Cangku,@FormParam("Type") String Type,@FormParam("Category") String Category){
        System.out.println("ResumeID为"+ResumeID) ;
        System.out.println("RTextBox1为"+TextBox1);
        System.out.println("Cangku为"+Cangku);
        System.out.println("Type为"+Type);
        System.out.println("Category为"+Category);
        int count= libraryService.search(ResumeID,TextBox1,Cangku,Type,Category);
        return JsonResultUtils.getObjectResultByStringAsDefault(count, JsonResultUtils.Code.SUCCESS);
    }
}
