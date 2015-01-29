package com.huawei.smart.business.user.mapper;

import com.huawei.smart.business.user.entity.AuthorityPower;
import com.huawei.smart.orm.AbstractMapper;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 14-3-16
 * Time: 下午11:01
 * To change this template use File | Settings | File Templates.
 */
public interface AuthorityPowerMapper extends AbstractMapper<AuthorityPower> {
    public List<AuthorityPower> getAuthorityPowerList();
    public int deleteByAuthorityName(String name);
    public List<String> getResourcesByAuthorityName(String name);
    public int deleteByPowerResource(String powerResource);
}
