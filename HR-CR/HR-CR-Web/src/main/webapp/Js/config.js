/**
 * Created with IntelliJ IDEA.
 * User: tgq
 * Date: 15-1-29
 * Time: 下午7:41
 * To change this template use File | Settings | File Templates.
 */
(function($){
    $.URL = {
        "user":{
            "findByName":"rs/user/findByName",
            "userInfo":"rs/user/userInfo"
        },
        "role":{
            "list":"rs/role/list",
            "add":"rs/role/add",
            "delete":"rs/role/delete"
        },
        "department":{
            "departmentListBydepartmentLevel":"rs/department/departmentListBydepartmentLevel"
        },
        "general":{
            "depList":"rs/general/depList" ,
            "roleList":"rs/general/roleList"
        },
        "library":{
            "selectCangku":"rs/library/selectCangku",
            "selectType":"rs/library/selectType",
            "selectCategory":"rs/library/selectCategory",
            "search":"rs/library/search"
        } ,
        "bookCK":{
            "selectCangku":"rs/bookCK/selectCangku",
            "add":"rs/bookCK/add"
        }
    }
})(jQuery);