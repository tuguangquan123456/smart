package com.huawei.smart.business.book.web;

import com.huawei.smart.business.book.entity.Books;
import com.huawei.smart.business.book.entity.Library;
import com.huawei.smart.business.book.service.BooksService;
import com.huawei.smart.business.book.service.LibraryService;
import com.huawei.smart.logger.SmartLogger;
import com.huawei.smart.util.json.JsonResultUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
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
    @Autowired
    private BooksService booksService;

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
        if(ResumeID.equals("")){
            ResumeID=null;
        }
        if(TextBox1.equals("")){
            TextBox1=null;
        }
        if(Cangku.equals("")||Cangku.equals("请选择书库")){
             Cangku=null;
         }
        if(Type.equals("")||Type.equals("请选择图书来源")){
            Type=null;
        }
        if(Category.equals("")||Category.equals("请选择图书类别")){
            Category=null;
        }
        int count= libraryService.search(ResumeID,TextBox1,Cangku,Type,Category);
        return JsonResultUtils.getObjectResultByStringAsDefault(count, JsonResultUtils.Code.SUCCESS);
    }

    @Path("/export/{ResumeID}/{TextBox1}/{Cangku}/{Type}/{Category}")
    @Produces(MediaType.APPLICATION_OCTET_STREAM)
    @GET
    public String export(@Context HttpServletResponse response,@PathParam("ResumeID") String ResumeID,@PathParam("TextBox1") String TextBox1,
                         @PathParam("Cangku") String Cangku,@PathParam("Type") String Type,@PathParam("Category") String Category){
        if(Cangku.equals("请选择书库")){
            Cangku="null";
        }
        if(Type.equals("请选择图书来源")){
            Type="null";
        }
        if(Category.equals("请选择图书类别")){
            Category="null";
        }
        try {
            List<Library> list=null;
            if(!ResumeID.equals("null")&&!TextBox1.equals("null")&&!Cangku.equals("null")&&!Type.equals("null")&&!Category.equals("null")){
                list = libraryService.export1(ResumeID,TextBox1,Cangku,Type,Category);
            }
            else if(!ResumeID.equals("null")&&!TextBox1.equals("null")&&!Cangku.equals("null")&&!Type.equals("null")){
                list = libraryService.export2(ResumeID,TextBox1,Cangku,Type);
            }
            else if(!ResumeID.equals("null")&&!TextBox1.equals("null")&&!Cangku.equals("null")){
                list = libraryService.export3(ResumeID,TextBox1,Cangku);
            }
            else if(!ResumeID.equals("null")&&!TextBox1.equals("null")){
                list = libraryService.export4(ResumeID,TextBox1);
            }
            else if(!ResumeID.equals("null")){
                list = libraryService.export5(ResumeID);
            }
            else  list = libraryService.export();

            System.out.println(list);
            StringBuffer buffer =  new StringBuffer("");
            for(Library library:list){
                buffer.append(library.getProductID());
                buffer.append(" ");
                buffer.append(library.getProductName());
                buffer.append(" ");
                buffer.append(library.getCategory());
                buffer.append("\r\n");
            }
            response.setHeader("Content-Disposition", "attachment;filename=" + "图书信息" + ".txt");
            return  buffer.toString();
        } catch (Exception e) {
            logger.error(e.getMessage());
            return JsonResultUtils.getCodeAndMesByStringAsDefault(JsonResultUtils.Code.ERROR);
        }
    }
}
