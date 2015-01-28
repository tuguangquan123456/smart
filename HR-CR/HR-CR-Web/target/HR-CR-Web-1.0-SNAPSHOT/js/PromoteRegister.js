// JScript 文件

//进入模态对话框页面，填写促报到信息
  function editPromoteRegister(o1,o2,o3)
  {
      var result = false;
        
      result=window.showModalDialog('AddPromoteInfo.aspx?ID=' + o1 + '&Name=' + escape(o2) + '&ComeID=' + o3 + '&rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=15cmpx;dialogHeight=9cm;center=yes;help=no");
      if(result==true)
      {
            // 刷新当前窗口 
           window.location.href="PromoteRegisterInfo.aspx";            
      }
  }
  
  //删除促报到记录
  function deleteItem(o1,o2) {
      var result = false;
        
      result=window.showModalDialog('DeletePromoteInfo.aspx?ID=' + o1 + '&ComeID=' + o2 + '&rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=15cmpx;dialogHeight=5cm;center=yes;help=no");
      if(result==true)
      {
            // 刷新当前窗口 
           window.location.href="PromoteRegisterInfo.aspx";            
      } 
//    jConfirm('确定执行操作?', '系统提示', function(r) {
//        if (r) {
//            $.post("../AjaxInterview.aspx", { type: "deletePromoteRegisterInfo", ComeID: o, rdom: Math.random() }, function(data) {
//                //alert(data);
//                if (data != "") {
//                    jAlert("删除成功", "删除成功");
//                    $("#tr_" + o).remove();
//                } 
//                else 
//                {
//                    jAlert("删除失败", "删除出错");
//                }
//            });
//        }
//    });
 }
 
    function callBack()
    {
        window.location.href=window.location.href;
    }
  
   function checkTitle() {
        var name = $("#txtName").val();
        var MobilePhone =  $("#txtMobilePhone").val();
        var Address = $("#txtAddress").val();
        var OralComeBeginDate = $("#txtOralComeBeginDate").val();
        var OralComeEndDate = $("#txtOralComeEndDate").val();
        var ComeBeginDate = $("#txtComeBeginDate").val();
        var ComeEndDate = $("#txtComeEndDate").val();
        var ResumeStatus = $("#ddlResumeStatus").val();
        if (name == "" && MobilePhone == "" && OralComeBeginDate == "" && OralComeEndDate == "" && ComeBeginDate == "" && ComeEndDate == "" && ResumeStatus == "" && Address == "") 
        {
            jAlert("请输入查询条件！","系统提示");
            return false
        }
        if((OralComeBeginDate != "" && OralComeEndDate == "")||(OralComeBeginDate == "" && OralComeEndDate != ""))
        {
            jAlert("请输入预约起始日期或结束日期！","系统提示");
            return false
        }
        if((ComeBeginDate != "" && ComeEndDate == "")||(ComeBeginDate == "" && ComeEndDate != ""))
        {
            jAlert("请输入更改后的起始日期或结束日期！","系统提示");
            return false
        }
  }
  
  
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
   
   //将所选中的面试结果记录送到模态对话框中进行批量处理 
  function BatchCheck()
  {
       var tableList = document.getElementById('tblist');
       var vCBList = tableList.getElementsByTagName("INPUT");
       var i = 0;
       var ResumeIDList = "";
       var ComeIDList = "";
       var flag = false;
        
        for(; i < vCBList.length; i++)
        {
            if(vCBList[i].type == "checkbox")
            {
                if(vCBList[i].checked == true)
                {
                    ComeIDList = ComeIDList +vCBList[i+1].value + ","; 
                    ResumeIDList=ResumeIDList+vCBList[i+2].value + ","; 
                    flag = true;
                }
            }
        }
        
//        alert(ComeIDList);
//        alert(ResumeIDList);
        
       if(flag == false)
       {
           jAlert("请选择要处理的记录！","系统提示");
           return;
       }
       
       var OperType=document.getElementById('ddlOperType').value;
       
       if(OperType=="-1")
       {
           jAlert("请选择要进行的批处理操作！","系统提示");
       }
       else if(OperType=="1")
       {
           jConfirm('确定要对所选记录执行批量转已报到操作吗?', '系统提示', function(r) {
               if(r)
               {
                       if(r)
                       {
                            var strFeatureInfo = "dialogHeight:300px;dialogWidth:500px;center:Yes;help:No;resizable:No;status:No "; 
                            var strURL ="BatchToAlRegister.aspx?ResumeIDList="+ResumeIDList + "&ComeIDList=" + ComeIDList;
                            var strpar;
                            window.showModalDialog(strURL,strpar,strFeatureInfo);
                            window.location.href =window.location.href; 
                       }      
               }      
           });
       }
//       else if(OperType=="2")
//       {
//           jConfirm('确定要对所选记录执行批量删除操作吗?', '系统提示', function(r) {
//             /*
//               var strFeatureInfo = "dialogHeight:350px;dialogWidth:600px;center:Yes;help:No;resizable:No;status:No "; 
//               var strURL ="AllocateResource.aspx?from="+from+"&ResumeIDList="+ResumeIDList;
//               var strpar;
//               window.showModalDialog(strURL,strpar,strFeatureInfo);
//               window.location.href =window.location.href; 
//             */
//                  
//           });
//       }
  }
  
  
  
  //转已报到处理，进入模态对话框页面
  function toAlRegister(o1,o2,o3)
  {
        if(o3 == "21")
        {
            jAlert("该记录处于放弃报到状态,无法转已报到！","转已报到出错");
            return;
        }
        var result = false;   
        result=window.showModalDialog('ToAlRegister.aspx?ID=' + o1 + '&ComeID='+ o2 + '&rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=12cmpx;dialogHeight=7cm;center=yes;help=no");
        if(result==true)
        {
            // 刷新当前窗口 
            window.location.href="PromoteRegisterInfo.aspx";            
        }
  }
  
  //查看待报到人员详细信息
  function lookItem(o1,o2)
  {
        location.href='PromoteDetail.aspx?ID='+o1+'&ComeID='+o2+'';
  }
  
  //放弃报到人员返回资源库
  function BackToResource(o1,o2)
  {
        if(o2 == "16")
        {
            jAlert("该记录处于待报到状态,无法返回资源库！","系统提示");
            return;
        }
        
        jConfirm('确定执行操作?', '系统提示', function(r) {
        if (r) {
            $.post("../AjaxInterview.aspx", { type: "BackToResource", ID: o1, rdom: Math.random() }, function(data) {
                //alert(data);
                if (data != "") {
                    jAlert("返回资源库成功", "返回资源库成功");
                    $("#tr_" + o1).remove();
                    // 刷新当前窗口 
                    window.location.href="PromoteRegisterInfo.aspx";
                } 
                else 
                {
                    jAlert("返回资源库失败", "返回资源库出错");
                }
            });
        }
    });
  }