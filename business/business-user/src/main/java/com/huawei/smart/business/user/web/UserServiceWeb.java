package com.huawei.smart.business.user.web;

import com.huawei.smart.business.user.entity.SubUser;
import com.huawei.smart.business.user.entity.User;
import com.huawei.smart.business.user.entity.UserAuthority;
import com.huawei.smart.business.user.security.UserContext;
import com.huawei.smart.business.user.service.AuthorityService;
import com.huawei.smart.business.user.service.UserAuthorityService;
import com.huawei.smart.business.user.service.UserService;
import com.huawei.smart.logger.SmartLogger;
import com.huawei.smart.util.json.JsonMapper;
import com.huawei.smart.util.json.JsonResultUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;


/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 14-1-26
 * Time: 上午11:53
 * To change this template use File | Settings | File Templates.
 */
@Component
@Path("/user")
public class UserServiceWeb {

    private static SmartLogger logger = SmartLogger.getLogger(UserServiceWeb.class);

    final String STATUS="启用";
    @Autowired
    private UserService userService;
    @Autowired
    private AuthorityService authorityService;

    @Autowired
    private UserAuthorityService userAuthorityService;

    @Produces( MediaType.APPLICATION_JSON + ";charset=UTF-8")
    @Path("/getIdByName")
    @POST
    public String getIdByName(@FormParam("name") String name){
        if (name == null) {
            return JsonResultUtils
                    .getCodeAndMesByStringAsDefault(JsonResultUtils.Code.ERROR);
        }
        long id;
        try {
            id  = userService.getIdByName(name);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            logger.error(e.getMessage());
            return JsonResultUtils.getCodeAndMesByStringAsDefault(JsonResultUtils.Code.ERROR);
        }
        // 新增操作时，返回操作状态和状态码给客户端，数据区是为空的
        return JsonResultUtils.getObjectResultByStringAsDefault(id,JsonResultUtils.Code.SUCCESS);
    }

    @Produces( MediaType.APPLICATION_JSON + ";charset=UTF-8")
    @Path("findByName/{name}")
    @GET
    public String findByName(@PathParam("name") String name){
        if (name == null) {
            return JsonResultUtils
                    .getCodeAndMesByStringAsDefault(JsonResultUtils.Code.ERROR);
        }
        User user;
        try {
            user = userService.findByName(name);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            logger.error(e.getMessage());
            return JsonResultUtils.getCodeAndMesByStringAsDefault(JsonResultUtils.Code.ERROR);
        }
        // 新增操作时，返回操作状态和状态码给客户端，数据区是为空的
        return JsonResultUtils.getObjectResultByStringAsDefault(user, JsonResultUtils.Code.SUCCESS);
    }
    @Produces( MediaType.APPLICATION_JSON + ";charset=UTF-8")
    @Path("/currentUser")
    @GET
    public String  currentUser(){
        String username = null;
        Object credential = SecurityContextHolder.getContext()
                .getAuthentication()
                .getPrincipal();
        if(credential instanceof UserDetails){
            UserDetails userDetails = (UserDetails) credential;
            username = userDetails.getUsername();
        }else{
            username = (String)credential;
        }
        logger.info("current user is "+username);
        User user;
        try {
            user = userService.findByName(username);
            user.setPassword("");
        } catch (Exception e) {
            e.printStackTrace();
            logger.error(e.getMessage());
            return JsonResultUtils.getCodeAndMesByStringAsDefault(JsonResultUtils.Code.ERROR);
        }
        return JsonResultUtils.getObjectResultByStringAsDefault(user,JsonResultUtils.Code.SUCCESS);
    }

    @Produces( MediaType.APPLICATION_JSON + ";charset=UTF-8")
    @Path("/currentUserName")
    @GET
    public String  currentUserName() throws Exception {
        String userName = UserContext.currentUserName();
        return JsonResultUtils.getObjectResultByStringAsDefault(userName,JsonResultUtils.Code.SUCCESS);
    }

    @Produces( MediaType.APPLICATION_JSON + ";charset=UTF-8")
    @Path("/currentUserId")
    @GET
    public String  currentUserId() throws Exception {
        long userId = UserContext.currentUserId();
        return JsonResultUtils.getObjectResultByStringAsDefault(userId,JsonResultUtils.Code.SUCCESS);
    }

    @Produces( MediaType.APPLICATION_JSON + ";charset=UTF-8")
    @Path("/currentUserAppId")
    @GET
    public String  currentUserAppId() throws Exception {
        long userAppId = UserContext.currentUserAppId();
        return JsonResultUtils.getObjectResultByStringAsDefault(userAppId,JsonResultUtils.Code.SUCCESS);
    }

    @Produces( MediaType.APPLICATION_JSON + ";charset=UTF-8")
    @Path("/add")
    @POST
    public String add(@FormParam("name") String name,@FormParam("password") String password,@FormParam("sex") String sex,@FormParam("role") String role){
        if(name==null ||name.trim().equals("")|| password==null|| password.trim().equals("") ||sex==null|| sex.trim().equals("")||role==null|| role.trim().equals("")){
            return JsonResultUtils.getCodeAndMesByString(JsonResultUtils.Code.ERROR.getCode(), "参数不能为空!");
        }

        long id;
        try{
            id = userService.getIdByName(name);
        }
        catch (Exception ex){
            id=0;
        }
        if(id==0){
            User user = new User();
            user.setName(name);
            user.setPassword(password);
            user.setSex(sex);
            user.setRole(role);
            user.setStatus(STATUS);
            userService.add(user);

            long userId =  userService.getIdByName(name);
            String[] roleArray = role.split(";");

            for(int i = 0;i<roleArray.length; i++){
                long authorityId = authorityService.getIdByName(roleArray[i]);
                UserAuthority userAuthority = new UserAuthority();
                userAuthority.setUserId(userId);
                userAuthority.setAuthorityId(authorityId);
                userAuthority.setUserName(name);
                userAuthority.setAuthorityName(roleArray[i]);
                userAuthorityService.add(userAuthority);
            }


            return JsonResultUtils.getCodeAndMesByStringAsDefault(JsonResultUtils.Code.SUCCESS);
        }
        else{
            return JsonResultUtils.getCodeAndMesByString(JsonResultUtils.Code.ERROR.getCode(), "用户名已存在!");
        }
    }

    @Produces( MediaType.APPLICATION_JSON + ";charset=UTF-8")
    @Path("/list")
    @GET
    public String list(){




        return "";
    }

    @Produces( MediaType.APPLICATION_JSON + ";charset=UTF-8")
    @Path("/delete")
    @POST
    public String delete(@FormParam("jsonString") String jsonString){
        User user = JsonMapper.buildNonDefaultMapper().fromJson(jsonString,User.class);
        String userName = user.getName();
        //删除用户角色表数据
        int userAuthorityDeleted = userAuthorityService.deleteByUserName(userName);

        //删除用户表数据
        int userDeleted = userService.delete(user);
        if((userAuthorityDeleted>0)&&(userDeleted>=0)){
            return JsonResultUtils.getCodeAndMesByStringAsDefault(JsonResultUtils.Code.SUCCESS);
        }
        else{
            return JsonResultUtils.getCodeAndMesByStringAsDefault(JsonResultUtils.Code.ERROR);
        }
    }

    @Produces( MediaType.APPLICATION_JSON + ";charset=UTF-8")
    @Path("/update")
    @POST
    public String update(@FormParam("jsonString") String jsonString){
        User user = JsonMapper.buildNonDefaultMapper().fromJson(jsonString,User.class);
        SubUser subUser = JsonMapper.buildNonDefaultMapper().fromJson(jsonString,SubUser.class);
        String userName = user.getName();
        int userAuthorityDeleted = userAuthorityService.deleteByUserName(userName);

        if(userAuthorityDeleted>=0){
            long userId = userService.getIdByName(userName);
            //更新用户角色表
            String role = user.getRole();
            String[] roleArray = role.split(";");
            int length= roleArray.length;
            for(int i=0;i<length;i++){
                UserAuthority userAuthority = new UserAuthority();
                long authorityId= authorityService.getIdByName(roleArray[i]);
                userAuthority.setUserId(userId);
                userAuthority.setAuthorityId(authorityId);
                userAuthority.setUserName(userName);
                userAuthority.setAuthorityName(roleArray[i]);
                userAuthorityService.add(userAuthority);
            }

            //更新用户表
            int  result = userService.update(user);
            if(result>0){
                return JsonResultUtils.getCodeAndMesByStringAsDefault(JsonResultUtils.Code.SUCCESS);
            }
            else{
                return JsonResultUtils.getCodeAndMesByStringAsDefault(JsonResultUtils.Code.ERROR);
            }
        }
        else{
            return JsonResultUtils.getCodeAndMesByStringAsDefault(JsonResultUtils.Code.ERROR);
        }
    }
}
