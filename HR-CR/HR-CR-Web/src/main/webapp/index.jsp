<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page language="java" pageEncoding="UTF-8"%>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Smart_管理系统</title>
<link rel="stylesheet" type="text/css" href="Css/menu.css" />
<script type="text/javascript" src="Js/jquery/jquery-1.10.2.js" language="javascript"></script>
<script src="Js/jquery/jquery.json-2.4.min.js" type="text/javascript"></script>
<script type="text/javascript" src="Js/menu.js"></script>
<base target="_self" />
<style type="text/css">
    *{margin:0px;padding:0px;}
    body{margin:0px;padding:0px;font-size:12px;}


    img{
        border:0px;
    }

    #header
    {
        width:100%;
        background-image:url(Images/header_right.jpg);
        background-repeat: repeat-x;
    }

    #left {

        width: 195px;
        overflow:hidden;
    }


    #right
    {

    }
    #iframe_left{
        width: 100%; height: 100%;
    }

    #iframe_main{
        width:100%;
        /*height:1500px;*/
        z-index:5;
    }

    #tb_center
    {
        width:100%;
        margin:0px;
        padding:0px;
        border:0;
    }
    .bottom{
        margin:5px 0;
        min-width:1250px;
    }

    #header_navigation{
        vertical-align:bottom;
        height: 30px;
    }
    #header_navigation ul li{
        float:left;
        list-style:none;
        padding:8px 8px 2px 8px;
        margin:0px 2px 0px 2px;
        cursor:pointer;
        font-size:14px;
        line-height:18px;
    }
    #header_navigation ul li a{
        text-decoration:none;
        color: #333333;
    }
    #header_navigation ul li:hover{
        /*text-decoration:underline;*/
    }
    #header_navigation ul li.selected{
        background-color:#990000;
        color:#FFFFFF;
    }
    #header_navigation ul li.selected a{
        background-color:#990000;
        color:#FFFFFF;
    }
    #header_navigation ul li.over{
        background-color:#dbc0b5;
    }
    #myInfo a{
        color:#1B6294;
        text-decoration:none;
    }

    .second_links span{
        padding:4px;
    }
    .second_links span a{
        font-size:12px;
        text-decoration:none;
        color:#333333;
    }
    .second_links span a:hover{
        font-size:12px;
        text-decoration:none;
        color:#990000;
        border-bottom:3px solid #990000;
    }
    #interview ul li
    {
        visibility:hidden;
        display:block;
        padding-top:2px;
    }
    #interview ul:hover li
    {
        visibility:visible;
    }
    #slink1 a:visited
    {
        color:Black;
    }
    .style1
    {
        font-family: Arial;
        font-size: x-large;
    }
    .style2
    {
        width: 757px;
        height: 67px;
    }
    .style3
    {
        height: 67px;
    }
</style>

<script type="text/javascript" language="javascript">
    $(function () {
        $("#header_navigation ul li.selected").corner();
        $("#header_navigation ul li").click(function () {
            alert("123");
            $("#header_navigation ul li").removeClass("selected");
            $(this).addClass("selected");
            $("#header_navigation ul li.selected").corner();
        });

    });

    function changeTab(id) {
        $("#slinks div").each(function () {
            $(this).hide();
        });
        $("#" + id).show();
        $("#Div1").children("div").css("display", "none");
        //
        //触发二级菜单，如果二级菜单下面没有三级，直接链接到；如果有三级菜单，触发onclick事件，再触发第一个三级的链接
        //
        var url = $("#" + id).find("span:first a").attr("href");
        if (url == undefined || url == "") {
            $("#" + id).find("span:first a").trigger("click");

            if ($("#Div1").children("div:visible").length > 0) {
                var url2 = $("#Div1").children("div:visible").find("span:first a").attr("href");
                top.document.getElementById("iframe_main").src = url2;
            }
            else { }
        }
        else {
            top.document.getElementById("iframe_main").src = url
        }

    }

    function ClearThirdMenu(url) {
        $("#Div1").css("display", "none");
        top.document.getElementById("iframe_main").src = url;
    }



    function changeTab1(id) {
        $("#Div1 div").each(function () {
            $(this).hide();
        });
        $("#" + id).show();

        var url = $("#" + id).find("span:first a").attr("href");
        if (url == undefined || url == "") {
            $("#" + id).find("span:first a").trigger("click");
        }
        else {
            top.document.getElementById("iframe_main").src = url
        }
    }

    window.onload = function () {
        for (var i = 0; i < document.links.length; i++) {
            var thisLink = document.links[i];
            thisLink.onclick = function () {
                for (var i = 0; i < document.links.length; i++) {
                    document.links[i].style.color = "";
                }
                this.style.color = "#990000";
            }
        }
    }

</script>

</head>
<body style="clear: both; display: block; height:auto; ">

<table cellpadding="0" cellspacing="0" border="0" height="58" style="border-bottom:5px #990000 solid; width:100%; min-width:1500px;"><!--原来min-width为 1250px-->
    <tr>
        <td width="100" class="style3">
            <img src="Images/logo.jpg" width="80" />
        </td>
        <td align="left" style="vertical-align:bottom;" class="style2">
            <div style="padding-bottom:10px;">
                <span style="margin-left:3px;" class="style1"><strong>Smart</strong></span>
            </div>
            <div id="header_navigation">
                <ul>
                    <li class="selected" id="lilink1" onclick="changeTab('slink1');displayHideUI();" >系统用户管理</li>

                    <li id="lilink2" onclick="changeTab('slink2');displayHideUI();">人员信息管理</li>

                    <li id="lilink4"  onclick="changeTab('slink4');displayHideUI();">企业沟通</li><!--离职信息-->


                    <li id="lilink5" onclick="changeTab('slink5');displayHideUI();">导入数据</li>
                    <li id="lilink8" onclick="changeTab('slink8');displayHideUI();">OEC管理</li>
                    <li id="lilink7" onclick="changeTab('slink7');">办公文具管理</li>
                    <li id="li1ink9" onclick="changeTab('slink9');">图书借阅管理</li>
                </ul>
            </div>
        </td>

        <td align="right" valign=top class="style3">
            <div id="myInfo" style="margin:0; padding:0;">
                <div style="margin:5px 10px 0px 0px;">
					<span style="font-size: 12px">当前用户：
                        <!--<asp:Label runat="server" ID="lCurrentUser"></asp:Label>&nbsp;&nbsp;&nbsp;<asp:Label runat="server"-->
                                                                                                             <!--ID="lRoleName"></asp:Label>&nbsp;&nbsp;&nbsp;<asp:Label runat="server"-->
                  </span>                                                                                                                                              <!--ID="lStatusName"></asp:Label>-->
                    &nbsp;&nbsp;
                    <a target="iframe_main" style="cursor:pointer;" onclick="ShowUserInfo()">用户信息&nbsp; </a>
                    <a target="iframe_main" href="AdminSystem/Help.html">技术支持&nbsp; </a>
                    <a style="cursor:pointer;"  onclick="Logout()" >退出系统 &nbsp;</a>
                </div>
            </div>
        </td>
    </tr>
</table>
<div id="slinks"
     style="position:relative; padding:10px 0 10px 80px; top: 0px; left: 0px;"
     style="margin-left:19px;">
    <div id="slink1" class="second_links" >
        <span><a target="iframe_main" href="AdminSystem/roleManage.html">权限管理</a></span>
        <span><a target="iframe_main" href="AdminSystem/OperatorManage.html">用户管理</a></span>
        <span><a target="iframe_main" href="AdminSystem/DepartmentManage.html">属性管理</a></span>
        <span><a target="iframe_main" href="HrResource/secretaryChange.html">秘书轮岗</a></span>
        <span><a target="iframe_main" href="HrResource/UsernumberChange.html">员工切工号</a></span>
        <span><a target="iframe_main" href="HrResource/EmailManage.html">系统邮箱设置</a></span>
        <span><a target="iframe_main" href="HrResource/LeaveConfirmList.html">离职（待确认）</a></span>
        <span><a target="iframe_main" href="HrResource/DeleteConfirmList.html">删除（待确认）</a></span>
        <span><a target="iframe_main" href="AdminSystem/PersonExportComfirm.html">转移（待确认）</a></span>
        <span><a target="iframe_main" href="AdminSystem/HistoryList.html">最近使用记录</a></span>

    </div>

    <div id="slink2" class="second_links" style="display:none;">
        <span><a target="iframe_main" href="HrResource/GeneralList.html">人员信息管理</a></span>
        <span><a target="iframe_main" href="HrResource/BasicList.html">基础名单管理</a></span>
        <span><a target="iframe_main" href="HrResource/FamilyList.html">家庭信息管理</a></span>
        <span><a target="iframe_main" href="HrResource/PerformanceList.html">绩效信息查询</a></span>
        <span><a target="iframe_main" href="HrResource/OfficeList.html">任职信息查询</a></span>
        <span><a target="iframe_main" href="HrResource/PostList.html">职位信息查询</a></span>
        <span><a target="iframe_main" href="HrResource/OtherList.html">其他信息</a></span>
        <span><a target="iframe_main" href="HrResource/OffsiteClockOut.html">异地打卡信息</a></span>
    </div>



    <div id="slink4" class="second_links" style="display:none; ">

        <span><a target="iframe_main" onclick="ClearThirdMenu('CompanySolvePlan/AwardMain_All.html')" >荣誉激励</a></span>

        <span><a target="iframe_main" onclick="changeTab1('Div10');displayShowUI();">压力测试管理</a></span>

        <span><a target="iframe_main" onclick="changeTab1('Div6');displayShowUI();">离职信息</a></span>

        <span><a target="iframe_main" onclick="ClearThirdMenu('CompanySolvePlan/PhysicalExamine.html')" >体检数据管理</a></span>

    </div>
    <div id="slink5" class="second_links" style="display:none;">

        <span><a target="iframe_main" href="HrImport/GeneralInfoImport.html">导入常用信息表</a></span>
        <span><a target="iframe_main" href="HrImport/GeneralInfoUpdate.html">更新常用信息表</a></span>
        <span><a target="iframe_main" href="HrImport/LeaveInfoImport.html">导入离职信息表</a></span>
        <span><a target="iframe_main" href="HrImport/FamilyInfoImport.html">导入家庭信息表</a></span>

        <span><a target="iframe_main" href="HrImport/PressureTestInfoImport.html">导入压力测试表</a></span>
        <span><a target="iframe_main" href="CompanySolvePlan/PhysicalExamineImport.html">导入体检数据表</a></span>
        <span><a target="iframe_main" href="HrImport/OffsiteClockOutImport.html">导入异地打卡信息表</a></span>

    </div>



    <div id="slink8" class="second_links" style="display:none;">
        <span><a target="iframe_main" href="HrResource/OECManage.html">OEC学习</a></span>
        <span><a target="iframe_main" href="HrResource/MeetingTheme.html">学习主题</a></span>
        <span><a target="iframe_main" href="HrResource/OECReviewManage.html">OEC心得</a></span>
        <span><a target="iframe_main" href="AdminSystem/OecManage.html">OEC管理</a></span>
        <span><a target="iframe_main" href="HrResource/OECGeneralList.html">OEC人员分配</a></span>
    </div>
    <div id="slink7" class="second_links" style="display:none;">
        <span><a target="iframe_main" href="HrStorge/ResourceList.html">库存信息</a></span>
        <span><a target="iframe_main" href="HrStorge/GoodOut.html">出库管理</a></span>
        <span><a target="iframe_main" href="HrStorge/GoodImport.html">入库管理</a></span>

        <span><a target="iframe_main" href="HrStorge/HistoryList.html">入库历史记录</a></span>
        <span><a target="iframe_main" href="HrStorge/HistoryOutList.html">出库历史记录</a></span>
        <span><a target="iframe_main" href="HrStorge/cangku.html">仓库管理</a></span>
        <span><a target="iframe_main" href="HrImport/ProductImport.html">导入物品信息表</a></span>
        <span><a target="iframe_main" href="HrStorge/StorgeEmailList.html">仓库邮箱管理</a></span>
    </div>

    <div id="slink9" class="second_links" style="display:none;">
        <%-- <span><a target="iframe_main" href="Hrbook/BookList.aspx">图书信息</a></span>--%>
        <span><a target="iframe_main" href="Hrbook/BookList.html">书籍查询</a></span>
        <span><a target="iframe_main" href="Hrbook/LoanBook.html">外借图书信息</a></span>
        <span><a target="iframe_main" href="Hrbook/Bookdonator.html">图书捐赠者名单</a></span>
        <span><a target="iframe_main" href="Hrbook/DonatorBillboard.html">图书捐赠排行</a></span>
        <span><a target="iframe_main" href="Hrbook/BookOut.html">借书</a></span>
        <span><a target="iframe_main" href="Hrbook/BookImport.html">还书</a></span>
        <span><a target="iframe_main" href="Hrbook/HistoryOutBook.html">借书历史记录</a></span>
        <span><a target="iframe_main" href="Hrbook/HistoryInBook.html">还书历史记录</a></span>
        <span><a target="iframe_main" href="Hrbook/Bookcangku.html">仓库管理</a></span>
        <span><a target="iframe_main" href="HrImport/BookInfoImport.html">导入书籍信息表</a></span>
        <span><a target="iframe_main" href="Hrbook/FeedBack.html">问题反馈</a></span>
        <span><a target="iframe_main" href="Hrbook/MyLoanBook.html">我的借书</a></span>
    </div>




</div>
<div id="Div1" style="position:relative; padding:10px 0 10px 80px;" style="margin-left:19px;">
    <div id="Div6" class="second_links" style="display:none;">
        <span><a target="iframe_main" href="HrResource/LeaveList.html">离职信息</a></span>
        <span><a target="iframe_main" href="HrResource/HumanTotalLeaveRateList.html">整体离职率</a></span>
        <span><a target="iframe_main" href="HrResource/HumanKey_empLeaveRateList.html">关键员工离职率</a></span>
        <span><a target="iframe_main" href="HrResource/HumanLeaveRateList.html">离职率</a></span>
    </div>





    <div id="Div8" class="second_links" style="display:none;">


    </div>


    <div id="Div10" class="second_links" style="display:none;">
        <span><a target="iframe_main" href="CompanySolvePlan/PressureTestList.html">压力测试信息表</a></span>
        <span><a target="iframe_main" href="CompanySolvePlan/PTList.html">压力测试统计</a></span>
        <span><a target="iframe_main" href="CompanySolvePlan/PTListYujing.html">压力测试预警</a></span>
        <span><a target="iframe_main" href="CompanySolvePlan/PTList_NoPT.html">未测试名单</a></span>
    </div>




</div>




<div id="container" style="text-align:left;width:86%;margin:0 auto;">
    <table cellpadding="0" cellspacing="0" id="tb_center" style="width: 100%;">
        <tr>
            <td>
                <div id="right">
                    <div style="width: auto;">
                        <iframe frameborder="0" scrolling="auto" name="iframe_main" id="iframe_main" src="" onload="initHeight();" >
                        </iframe>
                    </div>
                </div>
            </td>
        </tr>
    </table>

</div>
<!--bottom-->
<div class="bottom">
    <div>
        <div style="background-color:#ebebeb; height:1px;"></div>
        <div style="height:1px;"></div>
        <div style="background-color:#ebebeb; height:25px;">
            <div style=" margin-top:5px; margin-right:25px; text-align:right; font-size:12px;">版权所有@ 华为技术有限公司</div>
        </div>
    </div>
</div>
</body>
</html>

<script type="text/javascript">
    $(document).ready(function () {
        //刷新
        $("#goref").click(function () {
            iframe_main.window.location.reload();
        });
    });

    function Logout() {
        if (confirm("确定退出系统")) {

            window.parent.location.href = "Default.aspx?act=out";

        }

    }
    function refresh() {
        url = location.href; //把当前页面的地址赋给变量 url
        //分切变量 url 分隔符号为 "#"
        if (url.indexOf("#") == -1) { //如果url后没有#
            url += "#"; //加入 #
            self.location.replace(url); //刷新页面
        }
    }
    function callBack() {
        window.location.href = window.location.href;
    }


    //显示并修改用户详细信息
    function ShowUserInfo() {
        var result = false;

        result = window.showModalDialog('AdminSystem/OperatorDetail.html?rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=15cm;dialogHeight=10cm;center=yes;help=no;");

    }
    function Help() {
        var result = false;

        result = window.showModalDialog('AdminSystem/Help.html?rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=15cm;dialogHeight=10cm;center=yes;help=no;");

    }

    //iframe size auto change

</script>
<script type="text/javascript">
    function initHeight() {
        var iframe = document.getElementById("iframe_main");
        //iframe.contentWindow.document.body.scrollHeight=0;
        iframe.height = 0;
    }
    function reinitIframe() {
        var iframe = document.getElementById("iframe_main");
        try {
            var bHeight = iframe.contentWindow.document.body.scrollHeight;
            var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
            //alert(iframe.contentWindow.document.body.offsetHeight);
            //alert("iframe.contentWindow.document.body.scrollHeight="+bHeight+"  iframe.contentWindow.document.documentElement.scrollHeight="+dHeight);
            var height = Math.max(bHeight, dHeight);
            iframe.height = height;
        } catch (ex) { }
    }
    window.setInterval("reinitIframe()", 20);

    function displayHideUI() {
        var ui = document.getElementById("Div1");
        ui.style.display = "none";
    }

    function displayShowUI() {
        var ui = document.getElementById("Div1");
        ui.style.display = "block";
    }



</script>
