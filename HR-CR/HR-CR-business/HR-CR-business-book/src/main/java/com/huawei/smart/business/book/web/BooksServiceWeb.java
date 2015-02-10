package com.huawei.smart.business.book.web;

import com.huawei.smart.business.book.entity.Books;
import com.huawei.smart.business.book.service.BooksService;
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
 * Date: 15-2-8
 * Time: 下午6:28
 * To change this template use File | Settings | File Templates.
 */
@Component
@Path("/books")
public class BooksServiceWeb {
    private static SmartLogger logger = SmartLogger.getLogger(LibraryServiceWeb.class);
    @Autowired
    private BooksService booksService;
    @Produces(MediaType.APPLICATION_JSON+";charset=UTF-8")
    @Path("/searchAllBooks")
    @POST
    public String searchAllBooks(@FormParam("ResumeID") String ResumeID,@FormParam("TextBox1") String TextBox1,
                         @FormParam("Cangku") String Cangku,@FormParam("Type") String Type,@FormParam("Category") String Category){
       List<Books> list= booksService.searchAllBooks(ResumeID,TextBox1,Cangku,Type,Category);
        return JsonResultUtils.getObjectResultByStringAsDefault(list, JsonResultUtils.Code.SUCCESS);
    }
}
