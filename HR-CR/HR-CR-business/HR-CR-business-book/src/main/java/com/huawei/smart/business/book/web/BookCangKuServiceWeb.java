package com.huawei.smart.business.book.web;

import com.huawei.smart.business.book.entity.BookCangKu;
import com.huawei.smart.business.book.entity.BookDonator;
import com.huawei.smart.business.book.entity.Books;
import com.huawei.smart.business.book.service.BookCangKuService;
import com.huawei.smart.business.book.service.BookDonatorService;
import com.huawei.smart.business.book.service.BooksService;
import com.huawei.smart.logger.SmartLogger;
import com.huawei.smart.util.json.JsonResultUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 15-2-8
 * Time: 下午6:31
 * To change this template use File | Settings | File Templates.
 */
@Component
@Path("/bookCK")
public class BookCangKuServiceWeb {
    private static SmartLogger logger = SmartLogger.getLogger(LibraryServiceWeb.class);
    @Autowired
    private BookCangKuService bookCangKuService;
    @Autowired
    private BooksService booksService;
    @Autowired
    private BookDonatorService bookDonatorService;

    @Produces(MediaType.APPLICATION_JSON+";charset=UTF-8")
    @Path("/selectCangku")
    @GET
    public String selectCangkuList(){
        List<BookCangKu> list = bookCangKuService.selectCangkuList();
        return JsonResultUtils.getObjectResultByStringAsDefault(list, JsonResultUtils.Code.SUCCESS);
    }

    @Produces(MediaType.APPLICATION_JSON+";charset=UTF-8")
    @Path("/add")
    @POST
    public String add(@FormParam("ProductsName") String ProductsName,@FormParam("ProductsID") String ProductsID,@FormParam("Cangku") String Cangku,@FormParam("SafeAmount") String SafeAmount,
                      @FormParam("Price") String Price,@FormParam("Amount") String Amount,@FormParam("addUser") String addUser){
        int amount=Integer.parseInt(Amount);
        float price=Float.parseFloat(Price);
        Date newtime = new Date();
        if(!ProductsID.equals("")){
            if (CheckIDCard(ProductsID, Cangku)){
                String[] auexit = addUser.split(",");
                for (int i = 0; i < auexit.length; i++)
                {
                    BookDonator bookDonator=new BookDonator();
                    bookDonator.setAddtime(newtime);
                    bookDonator.setAdduser(auexit[i]);
                    bookDonator.setPrice(Price);
                    bookDonator.setProductID(ProductsID);
                    bookDonator.setProductName(ProductsName);
                    bookDonator.setDamount(amount);
                    bookDonatorService.add(bookDonator);
                }
            }
        }
        Books books=new Books();
        books.setAddtime(newtime);
        books.setProductName(ProductsName);
        books.setProductID(ProductsID);
        books.setPrice(Price);
        books.setAdduser(addUser);
        books.setAmount(amount);
        books.setSafeamount(SafeAmount);
        books.setCategory(Cangku);
        booksService.add(books);
        return JsonResultUtils.getCodeAndMesByStringAsDefault(JsonResultUtils.Code.SUCCESS);
    }

    protected boolean CheckIDCard(String IDCard,String cangku){
      int count=booksService.findCountOfBooksByProductIDAndBelongStorage(IDCard,cangku);
      if (count>0)return true;
      else return false;
    }

}