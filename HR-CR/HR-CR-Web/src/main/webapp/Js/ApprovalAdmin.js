// JScript 文件

  function callBack()
  {
        window.location.href=window.location.href;
  }
  
  //转向显示所有详情页面
  function ShowDetailInfo(o)
  {
       location.href='ApprovalResultShow.aspx?ApprovalID='+o;
  }
  
  //删除台账号信息
  function deleteApprovalResult(o) {
    jConfirm('确定执行操作?', '系统提示', function(r) {
        if (r) {
          
            $.post("../Ajax_Qiujin.aspx", { type: "DeleteApproval", ApprovalID: o, rdom: Math.random() }, function(data) {
                if (data != "") {                  
                    jAlert("删除成功", "删除成功");
                    $("#tr_" + o).remove();                    
                } 
                else 
                {
                    jAlert("项删除失败", "删除出错");
                }
            });
        }
    });
 }
  
  //保存检索条件
    function SaveSqlCondition()
    {
        
    }
  
  //单条记录审核——干部部审核      
  function Approval1(o1,o2)
  {
        //保存当前的检索条件
        var ret_array=["0","0","0"];
        ret_array[0] = document.getElementById('ddlApproveState').value;
        ret_array[1] = document.getElementById('txtPassBeginDate').value;
        ret_array[2] = document.getElementById('txtPassEndDate').value;
        
        var SearchCondition = document.getElementById('SearchCondition').value;
        var CurrentPage = document.getElementById('currentPage').value; 
        var result = false;
        
        result=window.showModalDialog('ApprovalFirst.aspx?ApprovalID=' + o1 + '&ID=' + o2 + '&rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=17.5cmpx;dialogHeight=12cm;center=yes;help=no");
        if(result==true)
        {
            // 刷新当前窗口 
            window.location.href="ApproveResultInfo.aspx?RetArray="+ret_array+"&SearchCondition="+SearchCondition+"&CurrentPage="+CurrentPage;        
        }
  }
  
  //单条记录审核——一级部门审核
  function Approval2(o1,o2)
  {
        //保存当前的检索条件
        var ret_array=["0","0","0"];
        ret_array[0] = document.getElementById('ddlApproveState').value;
        ret_array[1] = document.getElementById('txtPassBeginDate').value;
        ret_array[2] = document.getElementById('txtPassEndDate').value;
        
        var SearchCondition = document.getElementById('SearchCondition').value;
        var CurrentPage = document.getElementById('currentPage').value; 
        var result = false;
        
        result=window.showModalDialog('ApprovalSecond.aspx?ApprovalID=' + o1 + '&ID=' + o2 + '&rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=17.5cmpx;dialogHeight=12cm;center=yes;help=no");
        if(result==true)
        {
            // 刷新当前窗口 
            window.location.href="ApproveResultInfo.aspx?RetArray="+ret_array+"&SearchCondition="+SearchCondition+"&CurrentPage="+CurrentPage;         
        }
  }
  
  //单条记录审核——匹配HC
  function ApprovalMatchHC(o1,o2)
  {
      
      window.location.href = "ApprovalThird.aspx?ApprovalID="+o1+"&ID="+o2; 
  }
  
  //单条记录审核——CHR审核
  function Approval4(o1,o2)
  {
        //保存当前的检索条件
        var ret_array=["0","0","0"];
        ret_array[0] = document.getElementById('ddlApproveState').value;
        ret_array[1] = document.getElementById('txtPassBeginDate').value;
        ret_array[2] = document.getElementById('txtPassEndDate').value;
        
        var SearchCondition = document.getElementById('SearchCondition').value;
        var CurrentPage = document.getElementById('currentPage').value; 
        var result = false;
        result=window.showModalDialog('ApprovalFourth.aspx?ApprovalID=' + o1 + '&ID=' + o2 + '&rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=17.5cmpx;dialogHeight=12cm;center=yes;help=no");
   
        if(result==true)
        {
            // 刷新当前窗口 
            window.location.href="ApproveResultInfo.aspx?RetArray="+ret_array+"&SearchCondition="+SearchCondition+"&CurrentPage="+CurrentPage;             
        }
  }
  
  //单条记录审核——
  function Approval5_1(o1,o2)
  {
        //保存当前的检索条件
        var ret_array=["0","0","0"];
        ret_array[0] = document.getElementById('ddlApproveState').value;
        ret_array[1] = document.getElementById('txtPassBeginDate').value;
        ret_array[2] = document.getElementById('txtPassEndDate').value;
        
        var SearchCondition = document.getElementById('SearchCondition').value;
        var CurrentPage = document.getElementById('currentPage').value; 
        
        var result = false;
        result=window.showModalDialog('ApprovalFifth.aspx?ApprovalID=' + o1 + '&ID=' + o2 + '&rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=17.5cmpx;dialogHeight=12cm;center=yes;help=no");
        
        if(result==true)
        {
            // 刷新当前窗口 
            window.location.href="ApproveResultInfo.aspx?RetArray="+ret_array+"&SearchCondition="+SearchCondition+"&CurrentPage="+CurrentPage;         
        }
  }
  
  //单条记录审核——转促报道
  function Approval5_2(o1,o2)
  {
        //保存当前的检索条件
        var ret_array=["0","0","0"];
        ret_array[0] = document.getElementById('ddlApproveState').value;
        ret_array[1] = document.getElementById('txtPassBeginDate').value;
        ret_array[2] = document.getElementById('txtPassEndDate').value;
        
        var SearchCondition = document.getElementById('SearchCondition').value;
        var CurrentPage = document.getElementById('currentPage').value; 
        
        var result = false;
        result=window.showModalDialog('ApprovalSixth.aspx?ApprovalID=' + o1 + '&ID=' + o2 + '&rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=17.5cmpx;dialogHeight=12cm;center=yes;help=no");
        
        if(result==true)
        {
            // 刷新当前窗口 
            window.location.href="ApproveResultInfo.aspx?RetArray="+ret_array+"&SearchCondition="+SearchCondition+"&CurrentPage="+CurrentPage;              
        }
  }
  
  //单条记录审核——退回到综合面试
  function ReturnToInterviewPass(o1,o2)
  {
        //保存当前的检索条件
        var ret_array=["0","0","0"];
        ret_array[0] = document.getElementById('ddlApproveState').value;
        ret_array[1] = document.getElementById('txtPassBeginDate').value;
        ret_array[2] = document.getElementById('txtPassEndDate').value;
        
        var SearchCondition = document.getElementById('SearchCondition').value;
        var CurrentPage = document.getElementById('currentPage').value; 
        
        var result = false;
        result=window.showModalDialog('ReturnToInterviewPass.aspx?ApprovalID=' + o1 + '&ID=' + o2 + '&rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=17.5cmpx;dialogHeight=12cm;center=yes;help=no");
        
        if(result==true)
        {
            // 刷新当前窗口 
            window.location.href="ApproveResultInfo.aspx?RetArray="+ret_array+"&SearchCondition="+SearchCondition+"&CurrentPage="+CurrentPage;            
        }
  }
  
  //全选按钮，选中所有checkbox
  function chooseAll()
   {
        var tableList = document.getElementById('tblist');
        var vCBList = tableList.getElementsByTagName("INPUT");
        for(var i  = 0; i < vCBList.length; i++)
        {
            if(vCBList[i].type == "checkbox")
            {
                vCBList[i].checked = true;
            }
        }
   }
   
   //反选按钮，取消选中的所有checkbox
   function reverseSelect()
   {
        var tableList = document.getElementById('tblist');
        var vCBList = tableList.getElementsByTagName("INPUT");
        for(var i  = 0; i < vCBList.length; i++)
        {
            if(vCBList[i].type == "checkbox" )
            {
                vCBList[i].checked = !vCBList[i].checked;
            }
        }
   }
   
   //选择查询部门
   function chooseDept()
   {
      var result = false;
        
      result=window.showModalDialog('../AdminSystem/DepartmentSelect.aspx?rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=15cmpx;dialogHeight=8cm;center=yes;help=no");
      if(result==true)
      {
           
      }
   }
   
   //检查检索条件是否为空
   function CheckSearchBox() 
   {
        var ApproveState = $("#ddlApproveState").val();
        var PassBeginDate = $("#txtPassBeginDate").val();
        var PassEndDate = $("#txtPassEndDate").val();
        var InterviewDep = $("#txtInterviewDep").val();
        if (ApproveState == "" && PassBeginDate == "" && PassEndDate == ""&&InterviewDep=="") {
            jAlert("请输入查询条件！","系统提示");
            return false;
        }
        return true;
  }
  
  //将所选中的待审核记录送到模态对话框中进行批量处理 
  function BatchCheck()
  {
       var tableList = document.getElementById('tblist');
       var vCBList = tableList.getElementsByTagName("INPUT");
       var i = 0;
       var ApprovalIDList = "";
       var IDList = "";
       var flag = false;
        
        for(; i < vCBList.length; i++)
        {
            if(vCBList[i].type == "checkbox")
            {
                if(vCBList[i].checked == true)
                {
                    ApprovalIDList = ApprovalIDList +vCBList[i+1].value + ","; 
                    IDList = IDList +vCBList[i+2].value + ","; 
                    flag = true;
                }
            }
        }
       if(flag == false)
       {
           jAlert("请选择要审核的记录！","系统提示");
           return;
       }
       
       var OperType=document.getElementById('ddlOperType').value;
       
       if(OperType=="-1")
       {
           jAlert("请选择要进行的审核操作！","系统提示");
       }
       else if(OperType=="1") //批量处理：干部部审核
       {
           jConfirm('确定要对所选记录执行批量审核操作吗?', '系统提示', function(r) {
               if(r)
               {
                   var strFeatureInfo = "dialogHeight:305px;dialogWidth:610px;center:Yes;help:No;resizable:No;status:No "; 
                   var strURL ="BatchCheckFirst.aspx?ApprovalIDList="+ApprovalIDList + "&IDList=" + IDList;
                   var strpar;
                   window.showModalDialog(strURL,strpar,strFeatureInfo);
                   window.location.href =window.location.href; 
               }      
           });
       }
       else if(OperType=="2") //批量处理：一级部门审核
       {
           jConfirm('确定要对所选记录执行批量审核操作吗?', '系统提示', function(r) {
             if(r)
                 {
                       var strFeatureInfo = "dialogHeight:305px;dialogWidth:610px;center:Yes;help:No;resizable:No;status:No "; 
                       var strURL ="BatchCheckSecond.aspx?ApprovalIDList="+ApprovalIDList + "&IDList=" + IDList;
                       var strpar;
                       window.showModalDialog(strURL,strpar,strFeatureInfo);
                       window.location.href =window.location.href; 
                } 
           });
       }
       
       else if(OperType=="4")  //批量处理：CHR审核
       {
           jConfirm('确定要对所选记录执行批量审核操作吗?', '系统提示', function(r) {
             if(r)
                 {
                       var strFeatureInfo = "dialogHeight:305px;dialogWidth:610px;center:Yes;help:No;resizable:No;status:No "; 
                       var strURL ="BatchCheckCHR.aspx?ApprovalIDList="+ApprovalIDList + "&IDList=" + IDList;
                       var strpar;
                       window.showModalDialog(strURL,strpar,strFeatureInfo);
                       window.location.href =window.location.href; 
                } 
           });
       }
       else if(OperType=="5")  //批量处理：填写录用日期
       {
           jConfirm('确定要对所选记录执行批量审核操作吗?', '系统提示', function(r) {
             if(r)
                 {
                       var strFeatureInfo = "dialogHeight:305px;dialogWidth:610px;center:Yes;help:No;resizable:No;status:No "; 
                       var strURL ="BatchCheckLast.aspx?ApprovalIDList="+ApprovalIDList + "&IDList=" + IDList;
                       var strpar;
                       window.showModalDialog(strURL,strpar,strFeatureInfo);
                       window.location.href =window.location.href; 
                } 
           });
       }
  }
  
  //通过获取HCID查询台帐号详情
   function QueryHCDetail()
   {
       var HCID=document.getElementById('txtHCID').value;
       if(HCID=="")
           alert("请填写台帐号");
       else
            window.showModalDialog('HeadCountDetail.aspx?HCID=' + HCID + '&rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=17.5cmpx;dialogHeight=12cm;center=yes;help=no");
   }
   
   //弹出HCID列表模态对话框，获取HCID
   function GetHCID()
   {
       //在window.showModalDialog方法能够返回returnValue，即为子窗口中的HCID
       ResultHCID= window.showModalDialog('../Page/HeadCountSelect.aspx?rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=27.5cmpx;dialogHeight=15cm;center=yes;help=no");
       document.getElementById("txtHCID").value=ResultHCID;
       document.getElementById("txtHCName").value="";
   }
   
   //将选中的台帐号传回匹配HC页面(ApprovalThird.aspx)
   function SelectValidHCID()
    {
        var num=document.getElementsByName('ckb');
       
        for(var i=0;i<num.length;i++)
        {
            if(num[i].checked)
            {
                var HCID = num[i].value;
                //alert(HCID);
            }
        }
        //将子窗口中的返回值通过window.returnValue返回到父窗口
        window.returnValue = HCID;
        window.close();
    }
    
    //申请免HC
    function ApplyNullHCID()
    {
        jConfirm('确定要申请免HC号吗?', '系统提示', function(r) {
               if(r)
               {
                   document.getElementById('txtHCID').value="－10000"; 
                   document.getElementById('txtHCName').value="免用HC";
                   //document.getElementById('txtHCID').style.enable=false;
                       
               }      
          });
    }
    
    //用JS脚本校验RadioButtonList是否为空
    function CheckRblIsNull()
    {
          //判断是否选择了录用结果
          var vRbtid=document.getElementById("Radiobtn_Result");
          //得到所有radio，其中vRbtidList是所有Tag为input的对象数组，其中vRbtidList[0]表示第一个input对象
          var vResultList= vRbtid.getElementsByTagName("INPUT");
          var ValueResult;
          var i = 0;
          for(; i < vResultList.length; i++)
          {
            if(vResultList[i].checked)
            {
                ValueResult=vResultList[i].value;
                break;
            }
          }
          if( i == vResultList.length)
          {
              jAlert("请选择录用结果！","系统提示");
              return false;
          }
          
          //判断是否选择了币种结果
          var vRbtid=document.getElementById("Radiobtn_Type");
          //得到所有radio
          var vTypeList= vRbtid.getElementsByTagName("INPUT");
          var ValueType;
          var i = 0;
          for(; i < vTypeList.length; i++)
          {
            if(vTypeList[i].checked)
            {
                ValueType=vTypeList[i].value;
                break;
            }
          }
          if( i == vTypeList.length)
          {
              jAlert("请选择币种！","系统提示");
              return false;
          }
          
          //判断是否选择了聘用协议地
          var vRbtid=document.getElementById("Radiobtn_EmployAgreeLocation");
          //得到所有radio
          var vEmpList= vRbtid.getElementsByTagName("INPUT");
          var ValueEmp;
          var i = 0;
          for(; i < vEmpList.length; i++)
          {
            if(vEmpList[i].checked)
            {
                checkedIndex = i;
                ValueEmp=vEmpList[i].value;
                break;
            }
          }
          if( i == vEmpList.length)
          {
              jAlert("请选择聘用协议地！","系统提示");
              return false;
          }  
    }
    
    