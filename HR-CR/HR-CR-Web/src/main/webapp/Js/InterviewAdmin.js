// JScript 文件
 function checkTitle() {
        var interviewResultStatus = $("#ddlInterviewResultState").val();
        var MobilePhone = $("#txtMobilePhone").val();
        var name = $("#txtName").val();
        var BeginDate = $("#txtPassBeginDate").val();
        var EndDate = $("#txtPassEndDate").val();
        if (interviewResultStatus == "" && MobilePhone == "" && name == "" && BeginDate == "" && EndDate == "") {
            jAlert("请输入查询条件！","系统提示");
            return false
        }
        if((BeginDate != "" && EndDate == "")||(BeginDate == "" && EndDate != ""))
        {
            jAlert("请输入起始日期或结束日期！","系统提示");
            return false
        }
       // window.location.href="InterviewDetail.aspx?txtResumeID=" + txtResumeID;
    }

    function showPersonalResume(rid, type) {
       
        var url = '';
       
        if (type == '校园招聘') {
         
            url = "../AdminResource/ShowCampusResumeInfo.aspx?ID=" + rid;
        }
        if (type == '社会招聘') {
          
            url = "../AdminResource/ShowResumeInfo.aspx?ID=" + rid;
        }
        var weight = 0.9;
        
        window.showModalDialog(url, null, "scroll:yes;dialogWidth=" + screen.width * weight + "px;dialogHeight=" + screen.height * weight + "px;center=yes;help:No;resizable:No;scroll:Yes;status:No;minimize:yes;");
    }

  
  function callBack()
    {
        window.location.href=window.location.href;
    }
        
  function editItem1(o1,o2,o3)
  {
        var result = false;
        
        result=window.showModalDialog('FirstInterview.aspx?InterviewResultID=' + o1 + '&ID='+ o2 + '&ResumeStatus='+ o3 + '&rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=17.5cmpx;dialogHeight=10cm;center=yes;help=no");
        if(result==true)
        {
            // 刷新当前窗口 
            window.location.href="IntervieweeInfo.aspx";            
        }
      //location.href='InterviewResultAdd.aspx?UserID='+o1+'&UserType='+o2+' ';
  }
  function editItemAttend(o1,o2,o3)
  {
        var result = false;
        
        result=window.showModalDialog('FirstInterview.aspx?InterviewResultID=' + o1 + '&ID='+ o2 + '&ResumeStatus='+ o3 + '&rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=17.5cmpx;dialogHeight=10cm;center=yes;help=no");
        if(result==true)
        {
            // 刷新当前窗口 
            window.location.href="Attend.aspx";            
        }
      //location.href='InterviewResultAdd.aspx?UserID='+o1+'&UserType='+o2+' ';
  }
  
  function editItem2(o1,o2,o3)
  {
        var result = false;
        
        result=window.showModalDialog('SecondInterview.aspx?InterviewResultID=' + o1 + '&ID='+ o2 +'&ResumeStatus='+ o3 + '&rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=17.5cmpx;dialogHeight=12cm;center=yes;help=no");
        if(result==true)
        {
            // 刷新当前窗口 
            window.location.href="IntervieweeInfo.aspx";            
        }
  }
   function editItemPro(o1)
  {
        var result = false;
        var weight = 0.9;
        var strFeatureInfo = "scroll:yes;dialogWidth=" + screen.width*weight + "px;dialogHeight=" + screen.height*weight  + "px;center=yes;help:No;resizable:No;scroll:Yes;status:No;minimize:yes;";
        var strURL = "../Interviewer/BusinessInterviewResult.aspx?ResumeID=" + o1 + "&rdom='" + Math.random()+"'";
        var strpar = "callBack";
        result = window.showModalDialog(strURL, strpar, strFeatureInfo);
       // result = window.open(strURL, strpar, strFeatureInfo);
        //if(result==true)
        {
            // 刷新当前窗口 
        
            window.location.href = window.location.href        
        }
  }
  function editItem3(o1,o2,o3)
  {
        var result = false;

        result = window.showModalDialog('../Interviewer/ExpertiseInterviewResult.aspx?ResumeID=' + o1 + '&ID=' + o2 + '&ResumeStatus=' + o3 + '&rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=17.5cmpx;dialogHeight=10.5cm;center=yes;help=no");
        if(result==true)
        {
            // 刷新当前窗口 
            window.location.href="IntervieweeInfo.aspx";            
        }
  }
  function editItemGroup(o1,o2,o3)
  {
      var result = false;

      //必选参数，类型：字符串。用来指定对话框要显示的文档的URL

      //result=window.showModalDialog('ThirdInterview.aspx?InterviewResultID=' + o1 + '&ID='+ o2 +'&ResumeStatus='+ o3 + '&rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=21cmpx;dialogHeight=10.5cm;center=yes;help=no");

      result = window.showModalDialog('../Interviewer/GroupInterviewResult.aspx', callBack, "resizable:no;scroll:yes;status:no;dialogWidth=" + (screen.width / 9) * 8 + "px;dialogHeight=" + (screen.height / 4) * 3 + "px;center=yes;help=no");

      //alert("resizable:no;scroll:yes;status:no;dialogWidth=" + screen.width + "px;dialogHeight=" + screen.height + "px;center=yes;help=no");
      if(result==true)
      {
            // 刷新当前窗口 
          window.location.href="GroupInterview.aspx";            
       }
  }
  
   function editItem4(o1,o2,o3)
  {
        var result = false;
        
        result=window.showModalDialog('FourthInterview.aspx?InterviewResultID=' + o1 + '&ID='+ o2 +'&ResumeStatus='+ o3 + '&rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=12cmpx;dialogHeight=10cm;center=yes;help=no");
        if(result==true)
        {
            // 刷新当前窗口 
            window.location.href="IntervieweeInfo.aspx";            
        }
    }
    function editItemProgramScore(o1, o2, o3) {
        var result = false;

        result = window.showModalDialog('ProgramScore.aspx?InterviewResultID=' + o1 + '&ID=' + o2 + '&ResumeStatus=' + o3 + '&rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=800px;dialogHeight=400px;center=yes;help=no");
        //if (result == true)
         //{
            // 刷新当前窗口 
            window.location.href = "ProgramTest.aspx";
         //}
    }
    //给面试官分组
    function editGroupInterviewNum(o1, o2, o3) {
        var result = false;
        var strFeatureInfo = "scroll:no;dialogHeight:300px;dialogWidth:550px;center:Yes;help:No;resizable:No;status:No ";
        var strURL = "../AdminInterview/massGroInterview.aspx?ResumeIDList=" + o1 + "&InterviewIDList=" + o2;
        var strpar;
        result = window.showModalDialog(strURL, strpar, strFeatureInfo);

        //刷新当前窗口
           // window.location.href = window.location.href;
        
    }
  function editItemNetTest(o1,o2,o3)
  {
        var result = false;

        result = window.showModalDialog('FourthInterview.aspx?InterviewResultID=' + o1 + '&ID=' + o2 + '&ResumeStatus=' + o3 + '&rdom=' + Math.random(), callBack, "resizable:no;scroll:yes;status:no;dialogWidth=800px;dialogHeight=400px;center=yes;help=no");
        if (result == true) {
            //            window.location.href = window.location.href;
            document.getElementById("btnSearch").click();
        }
       
  }
  function editItemEnglishScore(o1,o2,o3)
  {
        var result = false;
        
        result=window.showModalDialog('EnglishScore.aspx?InterviewResultID=' + o1 + '&ID='+ o2 +'&ResumeStatus='+ o3 + '&rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=800px;dialogHeight=400px;center=yes;help=no");
        if(result==true)
        {
            // 刷新当前窗口 
            // window.location.href="NetTest.aspx";   
            document.getElementById("btnSearch").click();         
        }
  }
  
  
   function editItem5(o1,o2,o3)
  {
        var result = false;
        
        result=window.showModalDialog('FifthInterview.aspx?InterviewResultID=' + o1 + '&ID='+ o2 + '&ResumeStatus='+ o3 +'&rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=24cmpx;dialogHeight=14.5cm;center=yes;help=no");
        if(result==true)
        {
            // 刷新当前窗口 
            window.location.href="IntervieweeInfo.aspx";            
        }
  }
  function editItemFinal(o1,o2,o3)
  {
        var result = false;
        var strFeatureInfo = "scroll:yes;dialogWidth=" +screen.width+"px;dialogHeight="+(screen.height/5)*3+"px;center=yes;help:No;resizable:No;status:No ";
        var strURL = "ComprehensiveInterviewResult.aspx?InterviewResultID=' + o1 + '&ID=' + o2 + '&ResumeStatus=' + o3 + '&rdom='" + Math.random();
        var strpar="callBack";
        result = window.showModalDialog(strURL, strpar, strFeatureInfo);
//        result = window.showModalDialog('ComprehensiveInterviewResult.aspx?InterviewResultID=' + o1 + '&ID=' + o2 + '&ResumeStatus=' + o3 + '&rdom=' + Math.random(), callBack, "resizable:no;scroll:yes;status:no;dialogWidth=24cmpx;dialogHeight=10cm;center=yes;help=no");
        if(result==true)
        {
            // 刷新当前窗口 
            window.location.href="FinalInterview.aspx";            
        }
    }
    //给面试人员分配综面官
    function editItemFinalInterviewer(o1,o2,o3) {
        var result = false;
        var result = false;
        var strFeatureInfo = "scroll:yes;dialogWidth=12.5cm;dialogHeight=5cm;center=yes;help:No;resizable:No;status:No ";
        var strURL = "EditFinalInterviewer.aspx?InterviewResultID='" + o1 + "'&ID='" + o2 + "'&ResumeStatus='" + o3 + "'&rdom='" + Math.random()+"'";
        var strpar = "callBack";
        result = window.showModalDialog(strURL, strpar, strFeatureInfo);
        //        result = window.showModalDialog('ComprehensiveInterviewResult.aspx?InterviewResultID=' + o1 + '&ID=' + o2 + '&ResumeStatus=' + o3 + '&rdom=' + Math.random(), callBack, "resizable:no;scroll:yes;status:no;dialogWidth=24cmpx;dialogHeight=10cm;center=yes;help=no");
        if (result == true) {
            // 刷新当前窗口 
            //window.location.href = window.location.href;
            //window.location.reload();
            document.getElementById("btnSearch").click();
        }
    }
  function editItem6(o1,o2,o3)
  {
        var result = false;
        
        result=window.showModalDialog('EnglishTest.aspx?InterviewResultID=' + o1 + '&ID='+ o2 +'&ResumeStatus='+ o3 + '&rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=12cmpx;dialogHeight=10cm;center=yes;help=no");
        if(result==true)
        {
            // 刷新当前窗口 
            window.location.href="IntervieweeInfo.aspx";            
        }
  }
  function editItemEnglish(o1,o2,o3)
  {
        var result = false;
        
        result=window.showModalDialog('EnglishTest.aspx?InterviewResultID=' + o1 + '&ID='+ o2 +'&ResumeStatus='+ o3 + '&rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=12cmpx;dialogHeight=10cm;center=yes;help=no");
        if(result==true)
        {
            // 刷新当前窗口 
            window.location.href="English.aspx";            
        }
  }
  
   function lookItem(o1,o2,o3,o4,o5,o6)
   {
       location.href = '../AdminInterview/InterviewDetail.aspx?InterviewResultID=' + o1 + '&JobName=' + o2 + '&BelongManID=' + o3 + '&Name=' + o4 + '&Mobilephone=' + o5 + '&SecondJobName=' + o6 + '';
   }
   function lookItem(o1,o2,o3,o4)
   {
       location.href = '../AdminInterview/InterviewDetail.aspx?InterviewResultID=' + o1 + '&Name=' + o2 + '&Telephone=' + o3 + '&ID=' + o4 + '';
   }
   function lookItemRecruiterReview(o1) {
       var result = false;
       var strFeatureInfo = "scroll:yes;dialogWidth="+(screen.width/12)*8+"px;dialogHeight="+(screen.height/5)*3+"px;center=yes;help:No;resizable:No;status:No ";
       var strURL = "RecruiterReview.aspx?UserID=' + o1 + '&rdom='" + Math.random();
       var strpar = "callBack";
       result = window.showModalDialog(strURL, strpar, strFeatureInfo);
//       location.href = 'RecruiterReview.aspx?UserID=' + o1+ '';
   }
  
  
   function deleteItem(o1,o2) 
   {
      var result = false;
        
      result=window.showModalDialog('BackToResource.aspx?InterviewResultID=' + o1 + '&ID=' + o2 + '&rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=15cmpx;dialogHeight=5cm;center=yes;help=no");
      if(result==true)
      {
            // 刷新当前窗口 
           window.location.href="IntervieweeInfo.aspx";            
      }
//    jConfirm('确定执行操作?', '系统提示', function(r) {
//        if (r) {
//            $.post("../AjaxInterview.aspx", { type: "deleteInterviewInfo", ID: o, rdom: Math.random() }, function(data) {
//                //alert(data);
//                if (data != "") {
//                    jAlert("返回资源库成功", "返回资源库成功");
//                    $("#tr_" + o).remove();
//                } 
//                else 
//                {
//                    jAlert("返回资源库失败", "返回资源库出错");
//                }
//            });
//        }
//    });
 }

function toApprove(o1,o2,o3)
{
    if(o3 != "13")
    {
        jAlert("没有完成面试流程或未通过综合面试","转审核出错");
        return;
    }
    var result = false;   
    result=window.showModalDialog('ToApproveOper.aspx?InterviewResultID=' + o1 + '&ID='+ o2 + '&rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=12cmpx;dialogHeight=8.5cm;center=yes;help=no");
    if(result==true)
    {
        // 刷新当前窗口 
        window.location.href="IntervieweeInfo.aspx";            
    }
}


//function toPromoteRegister(o1,o2)
//{
//    jConfirm('确定执行转审核操作?', '系统提示', function(r) {
//        if (r) {
//            $.post("../AjaxInterview.aspx", { type: "toPromoteRegister", InterviewResultID: o1, ID: o2,rdom: Math.random() }, function(data) {
//                //alert(data);
//                if (data != "") {
//                    jAlert("转审核操作成功", "转审核操作成功");
//                    // 刷新当前窗口 
//                    window.location.href="IntervieweeInfo.aspx";  
//                } 
//                else 
//                {
//                    jAlert("转审核操作失败", "转审核操作出错");
//                }
//             });
//           }
//    });
//}

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
   
   
   function ta()
         {     
            if(document.form1["a"].value == "请选择--")
            {
                document.form1["b"].value = "请选择--";
                document.form1["c"].value = "请选择--";
                document.form1["d"].value = "请选择--";
            }
            document.form1["c"].options.length = 0;
            document.form1["d"].options.length = 0;
         }
         
         function tb()
         {
             if(document.form1["b"].value == "请选择--")
             {
                document.form1["c"].value = "请选择--";
                document.form1["d"].value = "请选择--";
             }
             document.form1["d"].options.length = 0;        
         }
         function tc()
         {
            if(document.form1["c"].value == "请选择--")
            {
                document.form1["d"].value = "请选择--";
            }      
        }
        
  
  function editItem(o1,o2,o3)
  {
      //location.href='PageAddData.aspx?ResumeID='+o1+'&Name='+o2+' ';
      var result = false;
        
      result=window.showModalDialog('PageAddData.aspx?ResumeID=' + o1 + '&Name='+ escape(o2) + '&ID='+ o3 + '&rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=15cmpx;dialogHeight=8cm;center=yes;help=no");
      if(result==true)
      {
            // 刷新当前窗口 
           window.location.href="IntervieweeInfo.aspx";            
      }
  }

  //将所选中的面试结果记录送到模态对话框中进行批量处理 
  function BatchCheck()
  {
       var tableList = document.getElementById('tblist');
       var vCBList = tableList.getElementsByTagName("INPUT");
       var i = 0;
       var ResumeIDList = "";
       var InterviewIDList = "";
       var flag = false;
        
        for(; i < vCBList.length; i++)
        {
            if(vCBList[i].type == "checkbox")
            {
                if(vCBList[i].checked == true)
                {
                    InterviewIDList = InterviewIDList +vCBList[i+1].value + ","; 
                    ResumeIDList=ResumeIDList+vCBList[i+2].value + ","; 
                    flag = true;
                }
            }
        }
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
           jConfirm('确定要对所选记录执行批量转审批操作吗?', '系统提示', function(r) {
               if(r)
               {
                    var strFeatureInfo = "dialogHeight:300px;dialogWidth:500px;center:Yes;help:No;resizable:No;status:No "; 
                    var strURL ="BatchToApproveOper.aspx?ResumeIDList="+ResumeIDList + "&InterviewIDList=" + InterviewIDList;
                    var strpar;
                    window.showModalDialog(strURL,strpar,strFeatureInfo);
                    window.location.href =window.location.href; 
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
  
  //综合面试中根据综合面试结果显示不同的控件
  function ResultChange()
  {
        var tr_1 = document.getElementById("tr_1");
        var tr_2 = document.getElementById("tr_2");
        var td_span_ComInterviewDate = document.getElementById("td_span_ComInterviewDate");
        var td_txtComInterviewDate = document.getElementById("td_txtComInterviewDate");
        var td_span_SuggestJob = document.getElementById("td_span_SuggestJob");
        var td_SuggestJob = document.getElementById("td_SuggestJob");
        
        var td_span_hireSuggestRadioButtonList = document.getElementById("td_span_hireSuggestRadioButtonList");
        var td_hireSuggestRadioButtonList = document.getElementById("td_hireSuggestRadioButtonList");
        
        var td_span_addressRadioButtonList = document.getElementById("td_span_addressRadioButtonList");
        var td_addressRadioButtonList = document.getElementById("td_addressRadioButtonList");
        
        var tr_FirstDept = document.getElementById("tr_FirstDept");
        var tr_ThirdDept = document.getElementById("tr_ThirdDept");
        var tr_3 = document.getElementById("tr_3");
        var tr_4 = document.getElementById("tr_4");
        var tr_5 = document.getElementById("tr_5");
        var td_span_ComInterviewComment = document.getElementById("td_span_ComInterviewComment");
        var td_ComInterviewComment = document.getElementById("td_ComInterviewComment");
        var td_span_txtRemark = document.getElementById("td_span_txtRemark");
        var td_txtRemark = document.getElementById("td_txtRemark");

        var hireSuggestRadioButtonList_1= document.getElementById("hireSuggestRadioButtonList_1");
        
        //获取面试结果值
        var selectValue = document.getElementById("dropDownListComInterviewResult").value;

        if(selectValue == "0")
        {
            tr_1.style.display = "block";
            tr_2.style.display = "block";
            td_span_ComInterviewDate.style.display = "block";
            td_txtComInterviewDate.style.display = "block";
            td_span_SuggestJob.style.display = "none";
            td_SuggestJob.style.display = "none";
            
            td_span_hireSuggestRadioButtonList.style.display = "block";
            td_hireSuggestRadioButtonList.style.display = "block";
            
            td_span_addressRadioButtonList.style.display = "none";
            td_addressRadioButtonList.style.display = "none";

            tr_FirstDept.style.display = "none";
            tr_ThirdDept.style.display = "none";
            tr_3.style.display = "none";
            tr_4.style.display = "none";
            tr_5.style.display = "none";
            td_span_ComInterviewComment.style.display = "block";
            td_ComInterviewComment.style.display = "block";
            td_span_txtRemark.style.display = "none";
            td_txtRemark.style.display = "none";
            hireSuggestRadioButtonList_1.style.dispaly = "none";
        }
        else
        {
            tr_1.style.display = "block";
            tr_2.style.display = "block";
            td_span_ComInterviewDate.style.display = "block";
            td_txtComInterviewDate.style.display = "block";
            td_span_SuggestJob.style.display = "block";
            td_SuggestJob.style.display = "block";
            
            td_span_hireSuggestRadioButtonList.style.display = "block";
            td_hireSuggestRadioButtonList.style.display = "block";
            
            td_span_addressRadioButtonList.style.display = "block";
            td_addressRadioButtonList.style.display = "block";

            tr_FirstDept.style.display = "block";
            tr_ThirdDept.style.display = "block";
            tr_3.style.display = "block";
            tr_4.style.display = "block";
            tr_5.style.display = "block";
            td_span_ComInterviewComment.style.display = "block";
            td_ComInterviewComment.style.display = "block";
            td_span_txtRemark.style.display = "block";
            td_txtRemark.style.display = "block";
        }
  }
  
  //专业面试和综合面试中根据应聘类型的不同在评价等级中选择不同的选项
  function TypeChange()
  {
        var ddlLevel = document.getElementById("ddlLevel");
        
        var selectValue = document.getElementById("ddlType").value;
        if(selectValue == "0")//市场类
        {
            ddlLevel.options.length = 0;
            ddlLevel.options[0] = new Option("助理工程师A","助理工程师A");
            ddlLevel.options[1] = new Option("助理工程师B","助理工程师B");
            ddlLevel.options[2] = new Option("助理工程师C","助理工程师C");
            ddlLevel.options[3] = new Option("营销工程师A","营销工程师A");
            ddlLevel.options[4] = new Option("营销工程师B","营销工程师B");
            ddlLevel.options[5] = new Option("营销工程师C","营销工程师C");
            ddlLevel.options[6] = new Option("营销经理A","营销经理A");
            ddlLevel.options[7] = new Option("营销经理B","营销经理B");
            ddlLevel.options[8] = new Option("营销经理C","营销经理C");
            ddlLevel.options[9] = new Option("高级营销经理A","高级营销经理A");
            ddlLevel.options[10] = new Option("高级营销经理B","高级营销经理B");
            ddlLevel.options[11] = new Option("高级营销经理C","高级营销经理C");
            ddlLevel.options[12] = new Option("营销专家A","营销专家A");
            ddlLevel.options[13] = new Option("营销专家B","营销专家B");
            ddlLevel.options[14] = new Option("营销专家C","营销专家C");
        }
        if(selectValue == "1")//研发类
        {
            ddlLevel.options.length = 0;
            ddlLevel.options[0] = new Option("助理工程师A","助理工程师A");
            ddlLevel.options[1] = new Option("助理工程师B","助理工程师B");
            ddlLevel.options[2] = new Option("助理工程师C","助理工程师C");
            ddlLevel.options[3] = new Option("工程师A","工程师A");
            ddlLevel.options[4] = new Option("工程师B","工程师B");
            ddlLevel.options[5] = new Option("工程师C","工程师C");
            ddlLevel.options[6] = new Option("高级工程师A","高级工程师A");
            ddlLevel.options[7] = new Option("高级工程师B","高级工程师B");
            ddlLevel.options[8] = new Option("高级工程师C","高级工程师C");
            ddlLevel.options[9] = new Option("主任工程师A","主任工程师A");
            ddlLevel.options[10] = new Option("主任工程师B","主任工程师B");
            ddlLevel.options[11] = new Option("主任工程师C","主任工程师C");
            ddlLevel.options[12] = new Option("技术专家A","技术专家A");
            ddlLevel.options[13] = new Option("技术专家B","技术专家B");
            ddlLevel.options[14] = new Option("技术专家C","技术专家C");
        }
        if(selectValue == "2")//专业组
        {
           ddlLevel.options.length = 0;
            ddlLevel.options[0] = new Option("助理专员/助理会计A","助理专员/助理会计A");
            ddlLevel.options[1] = new Option("助理专员/助理会计B","助理专员/助理会计B");
            ddlLevel.options[2] = new Option("助理专员/助理会计C","助理专员/助理会计C");
            ddlLevel.options[3] = new Option("专员/会计A","专员/会计A");
            ddlLevel.options[4] = new Option("专员/会计B","专员/会计B");
            ddlLevel.options[5] = new Option("专员/会计C","专员/会计C");
            ddlLevel.options[6] = new Option("高级专员/会计A","高级专员/会计A");
            ddlLevel.options[7] = new Option("高级专员/会计B","高级专员/会计B");
            ddlLevel.options[8] = new Option("高级专员/会计C","高级专员/会计C");
            ddlLevel.options[9] = new Option("资深专员A","资深专员A");
            ddlLevel.options[10] = new Option("资深专员B","资深专员B");
            ddlLevel.options[11] = new Option("资深专员C","资深专员C");
        }
  }
  
  //集面分组，分面试官
  function massDis()
  {
       var tableList = document.getElementById('tblist');
       var vCBList = tableList.getElementsByTagName("INPUT");
       var i = 0;
       var ResumeIDList = "";
       var InterviewIDList = "";
       var flag = false;
        
        for(; i < vCBList.length; i++)
        {
            if(vCBList[i].type == "checkbox")
            {
                if(vCBList[i].checked == true)
                {
                    InterviewIDList = InterviewIDList +vCBList[i+1].value + ","; 
                    ResumeIDList=ResumeIDList+vCBList[i+2].value + ","; 
                    flag = true;
                }
            }
        }
       if(flag == false)
       {
           jAlert("请选择要处理的记录!!","系统提示");
           return;
       }
       
//       var OperType=document.getElementById('ddlOperType').value;
//       
//       if(OperType=="-1")
//       {
//           jAlert("请选择要进行的批处理操作！","系统提示");
//       }
//       else if(OperType=="1")
//       {
//           jConfirm('确定要对所选记录执行批量转审批操作吗?', '系统提示', function(r) {
//               if(r)
//               {
                    var strFeatureInfo = "dialogHeight:300px;dialogWidth:550px;center:Yes;help:No;resizable:No;status:No "; 
                    var strURL ="massDis.aspx?ResumeIDList="+ResumeIDList + "&InterviewIDList=" + InterviewIDList;
                    var strpar;
                    window.showModalDialog(strURL,strpar,strFeatureInfo);
                    window.location.href =window.location.href; 
//               }      
//           });
//       }
  }
  function massOK()
  {
       var tableList = document.getElementById('tblist');
       var vCBList = tableList.getElementsByTagName("INPUT");
       var i = 0;
       var ResumeIDList = "";
       var InterviewIDList = "";
       var flag = false;
        
        for(; i < vCBList.length; i++)
        {
            if(vCBList[i].type == "checkbox")
            {
                if(vCBList[i].checked == true)
                {
                    InterviewIDList = InterviewIDList +vCBList[i+1].value + ","; 
                    ResumeIDList=ResumeIDList+vCBList[i+2].value + ","; 
                    var strFeatureInfo = "dialogHeight:10cmpx;dialogWidth=21cmpx;center:Yes;help:No;resizable:No;status:No "; 
                   var strURL ="massOK.aspx?ResumeIDList="+vCBList[i+2].value + "&InterviewIDList=" + vCBList[i+1].value;
                   var strpar;
                   window.showModalDialog(strURL,strpar,strFeatureInfo);
                   window.location.href =window.location.href; 
                    flag = true;
                }
            }
        }
       if(flag == false)
       {
           jAlert("请选择要处理的记录！","系统提示");
           return;
       }
       
 }
 function massNOK()
  {
       var tableList = document.getElementById('tblist');
       var vCBList = tableList.getElementsByTagName("INPUT");
       var i = 0;
       var ResumeIDList = "";
       var InterviewIDList = "";
       var flag = false;
        
        for(; i < vCBList.length; i++)
        {
            if(vCBList[i].checked == true)
                {
                    InterviewIDList = InterviewIDList +vCBList[i+1].value + ","; 
                    ResumeIDList=ResumeIDList+vCBList[i+2].value + ","; 
                    var strFeatureInfo = "dialogHeight:10cmpx;dialogWidth=21cmpx;center:Yes;help:No;resizable:No;status:No "; 
                   var strURL ="massNOK.aspx?ResumeIDList="+vCBList[i+2].value + "&InterviewIDList=" + vCBList[i+1].value;
                   var strpar;
                   window.showModalDialog(strURL,strpar,strFeatureInfo);
                   window.location.href =window.location.href; 
                    flag = true;
                }
        }
       if(flag == false)
       {
           jAlert("请选择要处理的记录！","系统提示");
           return;
       }
 }
 
 //集面分组，分面试官
  function editGroupNum(o1,o2,o3)
  {
                    var strFeatureInfo = "scroll:no;dialogHeight:300px;dialogWidth:550px;center:Yes;help:No;resizable:No;status:No "; 
                    var strURL ="massDis.aspx?ResumeIDList="+o1 + "&InterviewIDList=" + o2;
                    var strpar;
                    window.showModalDialog(strURL,strpar,strFeatureInfo);
                    window.location.href =window.location.href; 
  }

  function massPro()
  {
        var result = false;
        
        result=window.showModalDialog('massPro.aspx?rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=21cmpx;dialogHeight=14cm;center=yes;help=no");
        if(result==true)
        {
            // 刷新当前窗口 
            window.location.href="ProInterview.aspx";            
        }
  }
  function massGroup()
  {
        var result = false;
        
        result=window.showModalDialog('massGroup.aspx?rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=21cmpx;dialogHeight=14cm;center=yes;help=no");
        if(result==true)
        {
            // 刷新当前窗口 
            window.location.href="GroupInterview.aspx";            
        }
    }
    function massProgram() {
        var result = false;
        result = window.showModalDialog('massProgram.aspx?rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=21cmpx;dialogHeight=10cm;center=yes;help=no");
        if (result == true) {
            // 刷新当前窗口 
            window.location.href = "ProgramTest.aspx";
        }
    }
  function massNet()
  {
        var result = false;
        
        result=window.showModalDialog('massNet.aspx?rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=28cmpx;dialogHeight=16cm;center=yes;help=no");
        if(result==true)
        {
            // 刷新当前窗口 
            window.location.href="NetTest.aspx";            
        }
  }
  function massEnglish()
  {
        var result = false;
        
        result=window.showModalDialog('massEnglish.aspx?rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=25cmpx;dialogHeight=13cm;center=yes;help=no");
        if(result==true)
        {
            // 刷新当前窗口 
            window.location.href="NetTest.aspx";            
        }
  }
  function massFinal(o1,o2)
  {
        var result = false;
        
        result=window.showModalDialog('massFinal.aspx?JobName='+o1+'&SecondJobName='+o2+ '&rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=24cmpx;dialogHeight=14cm;center=yes;help=no");
        if(result==true)
        {
            // 刷新当前窗口 
            window.location.href="FinalInterview.aspx";            
        }
  }
  
    //   优先招聘批量通过
function massPriGroup(from)
  {
        if("" == from)
        {
            jAlert("资源接受人不能为空！","系统提示");
            return;
        }
        
        var tableList = document.getElementById('tblist');
        var vCBList = tableList.getElementsByTagName("INPUT");
        var i = 0;
 //     var resourcelist = "";
        var flag = false;
        var j=0;
        for(; i < vCBList.length; i++)
        {
            if(vCBList[i].type == "checkbox")
            {
                if(vCBList[i].checked == true)
                {
                    j++;
                    PriGroup(vCBList[i+1].value);
//                  resourcelist = resourcelist +vCBList[i+1].value + ","; 
                    flag = true;
                }
            }
        }
        
        alert("批量处理"+j+"条数据", "处理成功");
        if(flag == false)
        {
            jAlert("请选择资源！","系统提示");
            return;
        }
   }
   function PriGroup(o) {
//    jConfirm('确定执行操作?', '系统提示', function(r) {
//        if (r) {
          
            $.post("./Ajax_Data_Operate_Interview.aspx", { type: "PriGroup", ID: o}, function(data) {
//                if (data == "") {                  
//                    jAlert("删除成功", "删除成功");
//                    $("#tr_" + o).remove();                    
//                } 
//                else 
//                {
//                   jAlert("项删除失败", "删除出错");
//                }
        location.href='GroupInterview.aspx';
           });
        };
//    });  