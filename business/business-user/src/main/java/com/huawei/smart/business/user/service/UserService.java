package com.huawei.smart.business.user.service;

import com.huawei.smart.business.user.entity.User;
import com.huawei.smart.business.user.mapper.UserMapper;
import com.huawei.smart.business.user.security.MD5Encoder;
import com.huawei.smart.business.user.security.MyUserDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.HashMap;
import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: xiaozhujun
 * Date: 14-1-26
 * Time: 上午11:39
 * To change this template use File | Settings | File Templates.
 */
public class UserService {
    @Autowired
    private UserMapper userMapper;
    public UserService(){}
    public void add(User user){
        if(user.getPassword()!=null && !user.getPassword().equals("")){
            user.setPassword(MD5Encoder.GetMD5Code(user.getPassword()));
        }
        userMapper.add(user);
    }

    public Long getIdByName(String name){
        return userMapper.getIdByName(name);
    }
    public int update(User user){
        if(user.getPassword()!=null && !user.getPassword().equals("")){
            user.setPassword(MD5Encoder.GetMD5Code(user.getPassword()));
        }
        return userMapper.update(user);
    }

    public int delete(User user){
        return userMapper.delete(user);
    }

    public List<User> list(){
        return userMapper.findByCondition(new HashMap<String, Object>());
    }
    public User findByName(String name){
        if(name==null || name.trim().equals("")){
            return null;
        }
        List<User> list = userMapper.findByName(name);
        if(list.size()>=1){
            return list.get(0);
        }
        return null;
    }

    public User getById(long id)
    {
        return userMapper.getById(id);
    }

    public MyUserDetail getMyUserDetailFromSession(){
        MyUserDetail myUserDetail= (MyUserDetail)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return myUserDetail;
    }

    public void updateUserImage(User user){
        userMapper.updateUserImage(user);
    }
}
