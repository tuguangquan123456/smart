// JScript 文件
//资源管理部分用的js脚本

//关闭模态窗口
function PageClose()
{
    window.close();
}

//处理应聘来源下拉列表选项改变的事件
    function ApplyChannelSelectChange()
    { 
       var selectIndex = document.getElementById("ApplyChannel").selectedIndex;
       var spanApplyChannel = document.getElementById("span_ApplyChannelRemark");
       var spanReferID = document.getElementById("span_ReferID");
       var spanReferName = document.getElementById("span_ReferName");
       //选择"网络"
       if(2 == selectIndex)
       {            
            spanApplyChannel.innerHTML = "";
            spanReferID.innerHTML = "";
            spanReferName.innerHTML = "";
            spanApplyChannel.innerHTML = "具 体 来 源：<input type='text' ID='ApplyChannelRemark' name='ApplyChannelRemark' />";
           
       }
       else if(3 == selectIndex)
       {
            spanApplyChannel.innerHTML = "";
            spanReferID.innerHTML = "";
            spanReferName.innerHTML = "";
            spanReferID.innerHTML = "推 荐 人 工 号：<input type='text' ID='ReferID' name='ReferID'/>";            
            spanReferName.innerHTML = "推 荐 人 姓 名：<input type='text' ID='ReferName' name='ReferName' />";
       }
       else if(4 == selectIndex)
       {
            spanApplyChannel.innerHTML = "";
            spanReferID.innerHTML = "";
            spanReferName.innerHTML = "";
            spanApplyChannel.innerHTML = "备 注：<input type='text' ID='ApplyChannelRemark' name='ApplyChannelRemark' />";
       }
       else
       {
            spanApplyChannel.innerHTML = "";
            spanReferID.innerHTML = "";
            spanReferName.innerHTML = "";
       }
    }
    //
    function checkApplyChannel()
    {
         var selectIndex = document.getElementById("ApplyChannel").selectedIndex;
         if(0 == selectIndex)
         {
            jAlert("请选择应聘渠道！","系统提示");
            return false;
         }
         else if(2 == selectIndex )
         {
            var remark = document.getElementById("ApplyChannelRemark").value;
            if("" == remark)
            {
                jAlert("请输入具体来源！","系统提示");
                return false;
            }
           
         }
         else if(3 == selectIndex)
         {
            var ReferID = document.getElementById("ReferID").value;
            var ReferName = document.getElementById("ReferName").value;
            if("" == ReferID || "" == ReferName)
            {
                jAlert("请输入推荐人工号和姓名！","系统提示");
                return false;
            }
            
         }
         
         document.getElementById("hForeignLanguage").value = document.getElementById("ForeignLanguage").value;
         document.getElementById("hForeignLanguageLevel").value = document.getElementById("ForeignLanguageLevel").value;
         //获得职位ID
         var JobName =  document.getElementById("JobName");
         var JobNameSecondLevel = document.getElementById("JobNameSecondLevel");
         document.getElementById("hJobID").value = JobName.value;
         document.getElementById("hJobIDSecondLevel").value = JobNameSecondLevel.value;
         //获得一二级职位名称
         if(JobName.value == "-1")
         {
            document.getElementById("hJobName").value = "";
         }
         else
         {
             document.getElementById("hJobName").value = JobName[JobName.selectedIndex].innerText;
         }
         
         if(JobNameSecondLevel.value == "-1")
         {
            document.getElementById("hJobNameSecondLevel").value = "";
         }
         else
         {
            document.getElementById("hJobNameSecondLevel").value =JobNameSecondLevel[JobNameSecondLevel.selectedIndex].innerText;
         }
         
         return true;
    }
    
    
    
    //
    function loadApplyChannel()
    {

       var selectIndex = document.getElementById("ApplyChannel").selectedIndex;
       var spanApplyChannel = document.getElementById("span_ApplyChannelRemark");
       var spanReferID = document.getElementById("span_ReferID");
       var spanReferName = document.getElementById("span_ReferName");
       if(2 == selectIndex)
       {            
            spanApplyChannel.innerHTML = "";
            spanReferID.innerHTML = "";
            spanReferName.innerHTML = "";
            spanApplyChannel.innerHTML = "具 体 来 源：<input type='text' ID='ApplyChannelRemark' name='ApplyChannelRemark' />";
            document.getElementById("ApplyChannelRemark").value = document.getElementById("lApplyChannelRemark").value;          
       }
       else if(3 == selectIndex)
       {
            spanApplyChannel.innerHTML = "";
            spanReferID.innerHTML = "";
            spanReferName.innerHTML = "";
            spanReferID.innerHTML = "推 荐 人 工 号：<input type='text' ID='ReferID' name='ReferID' />";           
            spanReferName.innerHTML = "推 荐 人 姓 名：<input type='text' ID='ReferName' name='ReferName'  />";
            document.getElementById("ReferID").value = document.getElementById("lReferID").value; 
            document.getElementById("ReferName").value = document.getElementById("lReferName").value; 
       }
       else if(4 == selectIndex)
       {
            spanApplyChannel.innerHTML = "";
            spanReferID.innerHTML = "";
            spanReferName.innerHTML = "";
            spanApplyChannel.innerHTML = "备 注：<input type='text' ID='ApplyChannelRemark' name='ApplyChannelRemark' />";
            document.getElementById("ApplyChannelRemark").value = document.getElementById("lApplyChannelRemark").value;          

       }
       else
       {
            spanApplyChannel.innerHTML = "";
            spanReferID.innerHTML = "";
            spanReferName.innerHTML = "";
       }
       
    }
    //
    function loadApplyChannelForShowDetailInfo()
    {

       var applyChannel = document.getElementById("lApplyChannel").value;
       var spanApplyChannel = document.getElementById("span_ApplyChannelRemark");
       var spanReferID = document.getElementById("span_ReferID");
       var spanReferName = document.getElementById("span_ReferName");
       if(2 == applyChannel)
       {            
            spanApplyChannel.innerHTML = "";
            spanReferID.innerHTML = "";
            spanReferName.innerHTML = "";
            spanApplyChannel.innerHTML = "<span style=\"color: Red\">"+generateBlanks(10)+"具 体 来 源：</span> <span >"+generateBlanks(5)+document.getElementById("lApplyChannelRemark").value+"</span>";
            //document.getElementById("ApplyChannelRemark").value = document.getElementById("lApplyChannelRemark").value;          
       }
       else if(3 == applyChannel)
       {
            spanApplyChannel.innerHTML = "";
            spanReferID.innerHTML = "";
            spanReferName.innerHTML = "";
            spanReferID.innerHTML = "<span style=\"color: Red\">"+generateBlanks(10)+"推 荐 人 工 号：</span><span >"+generateBlanks(5)+document.getElementById("lReferID").value+"</span>";           
            spanReferName.innerHTML = "<span style=\"color: Red\">"+generateBlanks(10)+"推 荐 人 姓 名：</span><span >"+generateBlanks(5)+document.getElementById("lReferName").value+"</span>";  
            //document.getElementById("ReferID").value = document.getElementById("lReferID").value; 
            //document.getElementById("ReferName").value = document.getElementById("lReferName").value; 
       }
       else if(4 == applyChannel)
       {
            spanApplyChannel.innerHTML = "";
            spanReferID.innerHTML = "";
            spanReferName.innerHTML = "";
            spanApplyChannel.innerHTML = "<span style=\"color: Red\">"+generateBlanks(10)+"备 注：</span><span >"+generateBlanks(5)+ document.getElementById("lApplyChannelRemark").value+"</span>";
            //document.getElementById("ApplyChannelRemark").value = document.getElementById("lApplyChannelRemark").value;          

       }
       else
       {
            spanApplyChannel.innerHTML = "";
            spanReferID.innerHTML = "";
            spanReferName.innerHTML = "";
       }
    }
    //分配OEC
    function allocateOEC(from) {
      if ("" == from) {
          jAlert("资源接受人不能为空！", "系统提示");
          return;
      }

      var vCBList = document.getElementsByName("GVchk");
      var i = 0;
      var resourcelist = "";
      var flag = false;
      for (; i < vCBList.length; i++) {
          if (vCBList[i].type == "checkbox") {
              if (vCBList[i].checked == true) {
                  resourcelist = resourcelist + vCBList[i].value + ",";
                  flag = true;
              }
          }
      }
      if (flag == false) {
          jAlert("请选择资源！", "系统提示");
          return;
      }
      //保存当前的检索条件
      var ret_array = ["0", "0", "0"];
      //ret_array[0] = document.getElementById('ResumeStatus').value;
      ret_array[1] = document.getElementById('Name').value;
      //ret_array[2] = document.getElementById('Mobilephone').value;

      var SearchCondition = document.getElementById('SearchCondition').value;
      var CurrentPage = document.getElementById('currentPage').value;

      var strFeatureInfo = "dialogHeight:600px;dialogWidth:800px;center:Yes;help:No;resizable:No;status:No ";
      //var strURL = "Invitation.aspx?InvitationInterviewID="+ InvitationInterviewID + "&ResumeID=" + ResumeID + "&InvitationResultName=" + escape(InvitationResultName) + "&InterviewTime=" + escape(InterviewTime) + "&Remark=" + escape(Remark) + "";
      var strURL = "AllocateOec.aspx?Rnd=" + Math.random() + "&from=" + from + "&resourcelist=" + resourcelist;
      var strpar;
      window.showModalDialog(strURL, strpar, strFeatureInfo);
      window.location.href = "OECGeneralList.aspx?Rnd=" + Math.random() + "&RetArray=" + ret_array + "&SearchCondition=" + SearchCondition + "&CurrentPage=" + CurrentPage;
  }
    //分配角色
    function allocateRole(from) {
        if ("" == from) {
            jAlert("资源接受人不能为空！", "系统提示");
            return;
        }

        var vCBList = document.getElementsByName("GVchk");
        var i = 0;
        var resourcelist = "";
        var flag = false;
        for (; i < vCBList.length; i++) {
            if (vCBList[i].type == "checkbox") {
                if (vCBList[i].checked == true) {
                    resourcelist = resourcelist + vCBList[i].value + ",";
                    flag = true;
                }
            }
        }


        if (flag == false) {
            jAlert("请选择资源！", "系统提示");
            return;
        }
        //保存当前的检索条件
        var ret_array = ["0", "0", "0"];
        //ret_array[0] = document.getElementById('ResumeStatus').value;
        ret_array[1] = document.getElementById('Name').value;
        //ret_array[2] = document.getElementById('Mobilephone').value;

        var SearchCondition = document.getElementById('SearchCondition').value;
        var CurrentPage = document.getElementById('currentPage').value;

        var strFeatureInfo = "dialogHeight:600px;dialogWidth:800px;center:Yes;help:No;resizable:No;status:No ";
        //var strURL = "Invitation.aspx?InvitationInterviewID="+ InvitationInterviewID + "&ResumeID=" + ResumeID + "&InvitationResultName=" + escape(InvitationResultName) + "&InterviewTime=" + escape(InterviewTime) + "&Remark=" + escape(Remark) + "";
        var strURL = "AllocateRole.aspx?Rnd=" + Math.random() + "&from=" + from + "&resourcelist=" + resourcelist;
        var strpar;
        window.showModalDialog(strURL, strpar, strFeatureInfo);
        window.location.href = "GeneralList.aspx?Rnd=" + Math.random() + "&RetArray=" + ret_array + "&SearchCondition=" + SearchCondition + "&CurrentPage=" + CurrentPage;
    }

    //  秘书轮岗
    function mslungang() {


        function allocateResource(from) {
         

            var vCBList = document.getElementsByName("GVchk");
            var i = 0;
            var resourcelist = "";
            var flag = false;
            for (; i < vCBList.length; i++) {
                if (vCBList[i].type == "checkbox") {
                    if (vCBList[i].checked == true) {
                        resourcelist = resourcelist + vCBList[i].value + ",";
                        flag = true;
                    }
                }
            }


            //保存当前的检索条件
            var ret_array = ["0", "0", "0"];
            //ret_array[0] = document.getElementById('ResumeStatus').value;
            ret_array[1] = document.getElementById('Name').value;
            //ret_array[2] = document.getElementById('Mobilephone').value;

            var SearchCondition = document.getElementById('SearchCondition').value;
            var CurrentPage = document.getElementById('currentPage').value;

            var strFeatureInfo = "dialogHeight:600px;dialogWidth:800px;center:Yes;help:No;resizable:No;status:No ";
            //var strURL = "Invitation.aspx?InvitationInterviewID="+ InvitationInterviewID + "&ResumeID=" + ResumeID + "&InvitationResultName=" + escape(InvitationResultName) + "&InterviewTime=" + escape(InterviewTime) + "&Remark=" + escape(Remark) + "";
            var strURL = "secretaryChange.aspx?Rnd=" + Math.random() + "&from=" + from + "&resourcelist=" + resourcelist;
            var strpar;
            window.showModalDialog(strURL, strpar, strFeatureInfo);
            window.location.href = "OperatorManage.aspx?Rnd=" + Math.random() + "&RetArray=" + ret_array + "&SearchCondition=" + SearchCondition + "&CurrentPage=" + CurrentPage;
        }
    }


  //  分配秘书
  function allocateResource(from)
  {
      if ("" == from) {
          jAlert("资源接受人不能为空！", "系统提示");
          return;
      }

      var vCBList = document.getElementsByName("GVchk");
      var i = 0;
      var resourcelist = "";
      var flag = false;
      for (; i < vCBList.length; i++) {
          if (vCBList[i].type == "checkbox") {
              if (vCBList[i].checked == true) {
                  resourcelist = resourcelist + vCBList[i].value + ",";
                  flag = true;
              }
          }
      }


      if (flag == false) {
          jAlert("请选择资源！", "系统提示");
          return;
      }
      //保存当前的检索条件
      var ret_array = ["0", "0", "0"];
      //ret_array[0] = document.getElementById('ResumeStatus').value;
      ret_array[1] = document.getElementById('Name').value;
      //ret_array[2] = document.getElementById('Mobilephone').value;

      var SearchCondition = document.getElementById('SearchCondition').value;
      var CurrentPage = document.getElementById('currentPage').value;

      var strFeatureInfo = "dialogHeight:600px;dialogWidth:800px;center:Yes;help:No;resizable:No;status:No ";
      //var strURL = "Invitation.aspx?InvitationInterviewID="+ InvitationInterviewID + "&ResumeID=" + ResumeID + "&InvitationResultName=" + escape(InvitationResultName) + "&InterviewTime=" + escape(InterviewTime) + "&Remark=" + escape(Remark) + "";
      var strURL = "AllocateResource.aspx?Rnd=" + Math.random() + "&from=" + from + "&resourcelist=" + resourcelist;
      var strpar;
      window.showModalDialog(strURL, strpar, strFeatureInfo);
      window.location.href = "GeneralList.aspx?Rnd=" + Math.random() + "&RetArray=" + ret_array + "&SearchCondition=" + SearchCondition + "&CurrentPage=" + CurrentPage;
  }



  //  部门调度
  function allocateDep(from) {
      if ("" == from) {
          jAlert("资源接受人不能为空！", "系统提示");
          return;
      }

      var vCBList = document.getElementsByName("GVchk");
      var i = 0;
      var resourcelist = "";
      var flag = false;
      for (; i < vCBList.length; i++) {
          if (vCBList[i].type == "checkbox") {
              if (vCBList[i].checked == true) {
                  resourcelist = resourcelist + vCBList[i].value + ",";
                  flag = true;
              }
          }
      }


      if (flag == false) {
          jAlert("请选择资源！", "系统提示");
          return;
      }
      //保存当前的检索条件
      var ret_array = ["0", "0", "0"];
      //ret_array[0] = document.getElementById('ResumeStatus').value;
      ret_array[1] = document.getElementById('Name').value;
      //ret_array[2] = document.getElementById('Mobilephone').value;

      var SearchCondition = document.getElementById('SearchCondition').value;
      var CurrentPage = document.getElementById('currentPage').value;

      var strFeatureInfo = "dialogHeight:600px;dialogWidth:800px;center:Yes;help:No;resizable:No;status:No ";
      //var strURL = "Invitation.aspx?InvitationInterviewID="+ InvitationInterviewID + "&ResumeID=" + ResumeID + "&InvitationResultName=" + escape(InvitationResultName) + "&InterviewTime=" + escape(InterviewTime) + "&Remark=" + escape(Remark) + "";
      var strURL = "AllocateDep.aspx?Rnd=" + Math.random() + "&from=" + from + "&resourcelist=" + resourcelist;
      var strpar;
      window.showModalDialog(strURL, strpar, strFeatureInfo);
      window.location.href = "GeneralList.aspx?Rnd=" + Math.random() + "&RetArray=" + ret_array + "&SearchCondition=" + SearchCondition + "&CurrentPage=" + CurrentPage;
  }
   //  
  function invitationItem(InvitationInterviewID,ResumeID,InvitationResultName,InterviewTime,Remark,FirstDept,SecondDept,ThirdDept,FourthDept)
  {
        //保存当前的检索条件
        var ret_array=["0","0","0"];
        ret_array[0] = document.getElementById('InvitationStatus').value;
        ret_array[1] = document.getElementById('Name').value;
        ret_array[2] = document.getElementById('Mobilephone').value;
        
        var SearchCondition = document.getElementById('SearchCondition').value;
        var CurrentPage = document.getElementById('currentPage').value; 
       
       var strFeatureInfo = "dialogHeight:900px;dialogWidth:1100px;center:Yes;help:No;resizable:No;status:No "; 
       var strURL = "Invitation.aspx?Rnd="+Math.random()+"&InvitationInterviewID="+ InvitationInterviewID + "&ResumeID=" + ResumeID + "&InvitationResultName=" + escape(InvitationResultName) + "&InterviewTime=" + escape(InterviewTime) + "&Remark=" + escape(Remark) + "&FirstDept=" + FirstDept + "&SecondDept=" + SecondDept + "&ThirdDept=" + ThirdDept + "&FourthDept=" + FourthDept;
       var strpar;
       window.showModalDialog(strURL,strpar,strFeatureInfo);
       window.location.href = "InvitationResultList.aspx?RetArray="+ret_array+"&SearchCondition="+SearchCondition+"&CurrentPage="+CurrentPage; 
       //window.location.href = "Test.aspx?InvitationInterviewID="+ InvitationInterviewID + "&ResumeID=" + ResumeID + "&InvitationResultName=" + escape(InvitationResultName) + "&InterviewTime=" + escape(InterviewTime) + "&Remark=" + escape(Remark) + "&FirstDept=" + FirstDept + "&SecondDept=" + SecondDept + "&ThirdDept=" + ThirdDept + "&FourthDept=" + FourthDept;
  }
  //转向编辑页面
  function editItem(o)
  {
       location.href='ResourceModify.aspx?ID='+o;
  }
  //转向显示所有详情页面
  function showDetailInfo(o)
  {
      location.href = '../AdminResource/ShowDetailInfo.aspx?ID=' + o;
  }
  //
  //转向显示简历详情页面
  function ShowResumeInfo(o)
  {
      location.href = '../AdminResource/ShowResumeInfo.aspx?ID=' + o;
  }
  //
  function deleteItem(o) {
    jConfirm('确定执行操作?', '系统提示', function(r) {
        if (r) {
          
            $.post("./Ajax_Data_Operate.aspx", { type: "deleteResource", ID: o}, function(data) {
                if (data == "") {                  
                //    jAlert("删除成功", "删除成功");
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
 
 //
 function checkFilePath() {
 
        var filePath = $("#fileUpload").val();            
        if (filePath == "") {
            jAlert("请选择导入的文件！","系统提示");
            return false;
        }
        else {
          
            
             if(filePath.lastIndexOf(".") != -1){  
                var ext = new String (filePath.substring(filePath.lastIndexOf(".")+1,filePath.length));//文件扩展名
                ext = ext.toLowerCase();
                if(ext == "xls" || ext == "xlsx"){
                    return true;
                }            
                jAlert("只支持xls文件格式！","系统提示");
                return false;
             }
             else{
                jAlert("只支持xls文件格式！","系统提示");
                return false;
            }
        }
  }
  //
  function InvitationResultSelectChange()
   { 
       //得到tr对象
      var tr_InterviewTime = document.getElementById('tr_InterviewTime');
      var tr_FirstDept = document.getElementById('tr_FirstDept');
      var tr_SecondDept = document.getElementById('tr_SecondDept');
      var tr_ThirdDept = document.getElementById('tr_ThirdDept');
      var tr_FourthDept = document.getElementById('tr_FourthDept');
      var tr_TecRevRemark = document.getElementById('tr_TecRevRemark');
      var tr_UnwillingRemark = document.getElementById('tr_UnwillingRemark');
      var tr_Mobilephone = document.getElementById('tr_Mobilephone');
      var tr_TelRevRemark = document.getElementById('tr_TelRevRemark');
      var tr_NotSuitRemark = document.getElementById('tr_NotSuitRemark');
      var tr_TelRevFailRemark = document.getElementById('tr_TelRevFailRemark');
      
      var vRbtid=document.getElementById("InvitationResult");
      //得到所有radio
      var vRbtidList= vRbtid.getElementsByTagName("INPUT");
      for(var i = 0; i < vRbtidList.length; i++)
      {
        if(vRbtidList[i].checked)
        {
           var value=vRbtidList[i].value;
           if("1" == value)
           {               
                tr_InterviewTime.style.display='block'; 
                tr_FirstDept.style.display='block'; 
                tr_SecondDept.style.display='block'; 
                tr_ThirdDept.style.display='block'; 
                tr_FourthDept.style.display='block';
                tr_TecRevRemark.style.display='block';
                tr_UnwillingRemark.style.display='none'; 
                tr_Mobilephone.style.display='none'; 
                tr_TelRevRemark.style.display='none';
                tr_NotSuitRemark.style.display='none';
                tr_TelRevFailRemark.style.display='none'; 
           }
           else if("2" == value)
           {
                tr_InterviewTime.style.display='none'; 
                tr_FirstDept.style.display='none'; 
                tr_SecondDept.style.display='none'; 
                tr_ThirdDept.style.display='none'; 
                tr_FourthDept.style.display='none'; 
                tr_TecRevRemark.style.display='none'; 
                tr_UnwillingRemark.style.display='block';  
                tr_Mobilephone.style.display='none'; 
                tr_TelRevRemark.style.display='none';
                tr_NotSuitRemark.style.display='none';
                tr_TelRevFailRemark.style.display='none';
                 
           }
           else if("3" == value)
           {
                tr_InterviewTime.style.display='none'; 
                tr_FirstDept.style.display='none'; 
                tr_SecondDept.style.display='none'; 
                tr_ThirdDept.style.display='none'; 
                tr_FourthDept.style.display='none'; 
                tr_TecRevRemark.style.display='none'; 
                tr_UnwillingRemark.style.display='none'; 
                tr_Mobilephone.style.display='block';  
                tr_TelRevRemark.style.display='none';
                tr_NotSuitRemark.style.display='none';
                tr_TelRevFailRemark.style.display='none';    
           }
           else if("4" == value)
           {
                tr_InterviewTime.style.display='none'; 
                tr_FirstDept.style.display='none'; 
                tr_SecondDept.style.display='none'; 
                tr_ThirdDept.style.display='none'; 
                tr_FourthDept.style.display='none'; 
                tr_TecRevRemark.style.display='none'; 
                tr_UnwillingRemark.style.display='none'; 
                tr_Mobilephone.style.display='none';  
                tr_TelRevRemark.style.display='block';
                tr_NotSuitRemark.style.display='none';
                tr_TelRevFailRemark.style.display='none'; 
           }
           else if("20" == value)
           {
                tr_InterviewTime.style.display='none'; 
                tr_FirstDept.style.display='none'; 
                tr_SecondDept.style.display='none'; 
                tr_ThirdDept.style.display='none'; 
                tr_FourthDept.style.display='none'; 
                tr_TecRevRemark.style.display='none'; 
                tr_UnwillingRemark.style.display='none';  
                tr_Mobilephone.style.display='none'; 
                tr_TelRevRemark.style.display='none';
                tr_NotSuitRemark.style.display='block';
                tr_TelRevFailRemark.style.display='none'; 
           }
           else if("30" == value)
           {
                tr_InterviewTime.style.display='none'; 
                tr_FirstDept.style.display='none'; 
                tr_SecondDept.style.display='none'; 
                tr_ThirdDept.style.display='none'; 
                tr_FourthDept.style.display='none'; 
                tr_TecRevRemark.style.display='none'; 
                tr_UnwillingRemark.style.display='none';  
                tr_Mobilephone.style.display='none'; 
                tr_TelRevRemark.style.display='none';
                tr_NotSuitRemark.style.display='none';
                tr_TelRevFailRemark.style.display='block'; 
           }
           break;
        }
      }
    }
    
    //
   function checkInvitationResult()
   { 
      var vRbtid=document.getElementById("InvitationResult");
      //得到所有radio
      var vRbtidList= vRbtid.getElementsByTagName("INPUT");
      var value;
      var i = 0;
      for(; i < vRbtidList.length; i++)
      {
        if(vRbtidList[i].checked)
        {
            checkedIndex = i;
            value=vRbtidList[i].value;
            break;
        }
      }
      if( i == vRbtidList.length)
      {
          jAlert("请选择邀约结果！","系统提示");
          return false;
      }
      if("1" == value)
      {
           var InvitationTime = document.getElementById("tbInterviewTime").value;

           var FirstDept = document.getElementById("ddlFirstDept").value;
           var SecondDept = document.getElementById("ddlSecondDept").value;
           var ThirdDept = document.getElementById("ddlThirdDept").value;
           var FourthDept = document.getElementById("ddlFourthDept").value;
           var hFirstDept = document.getElementById("hFirstDept");
           var hSecondDept = document.getElementById("hSecondDept");
           var hThirdDept = document.getElementById("hThirdDept");
           var hFourthDept = document.getElementById("hFourthDept");
           
           if("" == InvitationTime)
           {
                 jAlert("请选择面试时间！","系统提示");
                 return false;
           }
           
           if("请选择--" == FirstDept || "-1" == FirstDept  )
           {
                jAlert("请选择一级部门部门！","系统提示");
                return false;
           }
           
           hFirstDept.value = FirstDept;
           hSecondDept.value = SecondDept;
           hThirdDept.value = ThirdDept;
           hFourthDept.value =FourthDept;
           
           if(SecondDept == "请选择--")
           {
                hSecondDept.value = "";
           }
           
           if(ThirdDept == "请选择--")
           {
                hThirdDept.value = "";
           }
           
           if(FourthDept == "请选择--")
           {
                hFourthDept.value = "";
           }
          
           
          
      }
      else if("2" == value)
      {
      
      }
      else if("3" == value)
      {
           var selectedIndex = document.getElementById("ddlMobilephoneProblem").selectedIndex;
           //var MobilephoneProblem = document.getElementById("MobilephoneProblem").value;
           if(0 == selectedIndex)
           {
                 jAlert("请选择具体电话问题！","系统提示");
                 return false;
           }
      }
      else if("4" ==value)
      {
        
      }
      else if("20" ==value)
      {
        
      }
      else if("30" ==value)
      {
        
      }
      return true;
    }
   
   // 
   function loadInvitationResult()
   {
       //得到tr对象
      var tr_InterviewTime = document.getElementById('tr_InterviewTime');
      var tr_FirstDept = document.getElementById('tr_FirstDept');
      var tr_SecondDept = document.getElementById('tr_SecondDept');
      var tr_ThirdDept = document.getElementById('tr_ThirdDept');
      var tr_FourthDept = document.getElementById('tr_FourthDept');
      var tr_TecRevRemark = document.getElementById('tr_TecRevRemark');
      var tr_UnwillingRemark = document.getElementById('tr_UnwillingRemark');
      var tr_Mobilephone = document.getElementById('tr_Mobilephone');
      var tr_TelRevRemark = document.getElementById('tr_TelRevRemark');
      var tr_NotSuitRemark = document.getElementById('tr_NotSuitRemark');
      var tr_TelRevFailRemark = document.getElementById('tr_TelRevFailRemark');
      
      //得到当前选择的邀约结果
      var vRbtid=document.getElementById("InvitationResult");
      //得到所有radio
      var vRbtidList= vRbtid.getElementsByTagName("INPUT");
      var value;
      var i = 0;
      for(; i < vRbtidList.length; i++)
      {
        if(vRbtidList[i].checked)
        {
            checkedIndex = i;
            value=vRbtidList[i].value;
            break;
        }
      }
      if( i != vRbtidList.length)//如果用户选择了某个邀约结果
      {
          if("1" == value)//待技术面试
           {
                document.getElementById("tbInterviewTime").value = document.getElementById("lInterviewTime").value;
                document.getElementById("tbTecRevRemark").value = document.getElementById("lTecRevRemark").value;
                tr_InterviewTime.style.display='block'; 
                tr_FirstDept.style.display='block'; 
                tr_SecondDept.style.display='block'; 
                tr_ThirdDept.style.display='block'; 
                tr_FourthDept.style.display='block';
                tr_TecRevRemark.style.display='block';
                tr_UnwillingRemark.style.display='none'; 
                tr_Mobilephone.style.display='none'; 
                tr_TelRevRemark.style.display='none';
                tr_NotSuitRemark.style.display='none'; 
                tr_TelRevFailRemark.style.display='none'; 
           }
           else if("2" == value)//不愿意来公司
           { 
                document.getElementById("tbUnwillingRemark").value = document.getElementById("lUnwillingRemark").value;
                tr_InterviewTime.style.display='none'; 
                tr_FirstDept.style.display='none'; 
                tr_SecondDept.style.display='none'; 
                tr_ThirdDept.style.display='none'; 
                tr_FourthDept.style.display='none'; 
                tr_TecRevRemark.style.display='none'; 
                tr_UnwillingRemark.style.display='block';  
                tr_Mobilephone.style.display='none'; 
                tr_TelRevRemark.style.display='none';
                tr_NotSuitRemark.style.display='none'; 
                tr_TelRevFailRemark.style.display='none'; 
           }
           else if("3" == value)//电话问题
           {
                document.getElementById("ddlMobilephoneProblem").value = document.getElementById("lMobilephone").value;
                tr_InterviewTime.style.display='none'; 
                tr_FirstDept.style.display='none'; 
                tr_SecondDept.style.display='none'; 
                tr_ThirdDept.style.display='none'; 
                tr_FourthDept.style.display='none'; 
                tr_TecRevRemark.style.display='none'; 
                tr_UnwillingRemark.style.display='none'; 
                tr_Mobilephone.style.display='block';  
                tr_TelRevRemark.style.display='none';
                tr_NotSuitRemark.style.display='none'; 
                tr_TelRevFailRemark.style.display='none';  
           }
           else if("4" == value)//待电话面试
           {
                document.getElementById("tbTelRevRemark").value = document.getElementById("lTelRevRemark").value;
                //alert(document.getElementById("tbTelRevRemark").value);
                tr_InterviewTime.style.display='none'; 
                tr_FirstDept.style.display='none'; 
                tr_SecondDept.style.display='none'; 
                tr_ThirdDept.style.display='none'; 
                tr_FourthDept.style.display='none'; 
                tr_TecRevRemark.style.display='none'; 
                tr_UnwillingRemark.style.display='none'; 
                tr_Mobilephone.style.display='none';  
                tr_TelRevRemark.style.display='block';
                tr_NotSuitRemark.style.display='none'; 
                tr_TelRevFailRemark.style.display='none'; 
           }
           else if("20" == value)//不符合要求
           {
                document.getElementById("tbNotSuitRemark").value = document.getElementById("lNotSuitRemark").value;
                tr_InterviewTime.style.display='none'; 
                tr_FirstDept.style.display='none'; 
                tr_SecondDept.style.display='none'; 
                tr_ThirdDept.style.display='none'; 
                tr_FourthDept.style.display='none'; 
                tr_TecRevRemark.style.display='none'; 
                tr_UnwillingRemark.style.display='none'; 
                tr_Mobilephone.style.display='none';  
                tr_TelRevRemark.style.display='none';
                tr_NotSuitRemark.style.display='block'; 
                tr_TelRevFailRemark.style.display='none';
           }
           else if("30" == value)//电话面试不通过
           {
                document.getElementById("tbTelRevFailRemark").value = document.getElementById("lTelRevFailRemark").value;
                tr_InterviewTime.style.display='none'; 
                tr_FirstDept.style.display='none'; 
                tr_SecondDept.style.display='none'; 
                tr_ThirdDept.style.display='none'; 
                tr_FourthDept.style.display='none'; 
                tr_TecRevRemark.style.display='none'; 
                tr_UnwillingRemark.style.display='none'; 
                tr_Mobilephone.style.display='none';  
                tr_TelRevRemark.style.display='none';
                tr_NotSuitRemark.style.display='none'; 
                tr_TelRevFailRemark.style.display='block'; 
           }
           
      }
      else//没有选择邀约结果
      {
           
            tr_InterviewTime.style.display='none'; 
            tr_FirstDept.style.display='none'; 
            tr_SecondDept.style.display='none'; 
            tr_ThirdDept.style.display='none'; 
            tr_FourthDept.style.display='none'; 
            tr_TecRevRemark.style.display='none'; 
            tr_UnwillingRemark.style.display='none'; 
            tr_Mobilephone.style.display='none';  
            tr_TelRevRemark.style.display='none';
            tr_NotSuitRemark.style.display='none'; 
            tr_TelRevFailRemark.style.display='none';
             
      }
      
    }
   // 
   function chooseAll()
   {
        /*var tableList = document.getElementById('tblist');
        var vCBList = tableList.getElementsByTagName("INPUT");
        for(var i  = 0; i < vCBList.length; i++)
        {
            if(vCBList[i].type == "checkbox")
            {
                vCBList[i].checked = true;
            }
        }*/
       var chks = document.getElementsByName("GVchk");
       for (var i = 0; i < chks.length; i++) 
       {
           chks[i].checked = true;
       
       }
   }
   //
   function clearAll()
   {
        var tableList = document.getElementById('tblist');
        var vCBList = tableList.getElementsByTagName("INPUT");
        for(var i  = 0; i < vCBList.length; i++)
        {
            if(vCBList[i].type == "checkbox")
            {
                vCBList[i].checked = false;
            }
        }
   }
   
   //
   function reverseSelect()
   {
        /*var tableList = document.getElementById('tblist');
        var vCBList = tableList.getElementsByTagName("INPUT");
        for(var i  = 0; i < vCBList.length; i++)
        {
            if(vCBList[i].type == "checkbox" )
            {
                vCBList[i].checked = !vCBList[i].checked;
            }
        }*/
       var chks = document.getElementsByName("GVchk");
       for (var i = 0; i < chks.length; i++) {
           chks[i].checked = !chks[i].checked;

       }
   }
   
   //在资源分配的时候,检查是否选择了一个资源接受人
   function checkHRList()
   {
      var vRbtid=document.getElementById("HRList");
      //得到所有radio
      var vRbtidList= vRbtid.getElementsByTagName("INPUT");
      var value;
      var i = 0;
      for(; i < vRbtidList.length; i++)
      {
        if(vRbtidList[i].checked)
        {
            checkedIndex = i;
            value=vRbtidList[i].value;
            break;
        }
      }
      if( i == vRbtidList.length)
      {
          jAlert("请选择资源接收人！","系统提示");
          return false;
      }
   }
   
   //生成指定数量的空格
   function generateBlanks(n)
   {
        var blanks = "";
        for(var i = 1; i <= n ;i++)
        {
            blanks += "&nbsp;"
        }
        
        return blanks;
   }
   
   //检查高级检索的条件
   function checkAdvSearchCondition()
   {
      //必须选择一项条件，毕业时间必须选择开始时间和结束时间
      var ResumeStatus = document.getElementById('ResumeStatus').selectedIndex;
      var Location = document.getElementById('Location').value;
      var School = document.getElementById('School').value;
      var GraduateTimeBegin = document.getElementById('GraduateTimeBegin').value;
      var GraduateTimeEnd = document.getElementById('GraduateTimeEnd').value;
      var Degree = document.getElementById('Degree').selectedIndex;
      var Specialty = document.getElementById('Specialty').value;
      var Company = document.getElementById('Company').value;
      var Position = document.getElementById('Position').value;
      var JobName = document.getElementById('JobName').selectedIndex;
      var SecondJobName = document.getElementById('JobNameSecondLevel').selectedIndex;
      var JobObjective = document.getElementById('JobObjective').selectedIndex;
      var FirstDept = document.getElementById("ddlFirstDept").value;
      var SecondDept = document.getElementById("ddlSecondDept").value;
      var ThirdDept = document.getElementById("ddlThirdDept").value;
      var FourthDept = document.getElementById("ddlFourthDept").value;
      var EnterTime = document.getElementById("EnterTime").value;
      var BelongManID = document.getElementById("BelongManID").value;
      
      
      //必须选择一项查询条件
      if(ResumeStatus == 0 && Location == "" && School == "" && GraduateTimeBegin == "" &&
            GraduateTimeEnd == "" && Degree == 0 && Specialty == "" &&
            Company == "" && Position == "" && JobName == 0 && SecondJobName == 0 && JobObjective == 0
            && ("" == FirstDept || FirstDept == "-1") && EnterTime == "" && BelongManID == "-1")
      {
            jAlert("请选择一项查询条件！","系统提示");
            return false;
      }
      
     //必须同时选择起始时间和结束时间 
      if((GraduateTimeBegin != "" &&  GraduateTimeEnd == "") ||
            (GraduateTimeBegin == "" &&  GraduateTimeEnd != "")) 
      {
            jAlert("请同时选择起始时间和结束时间！","系统提示");
            return false;
      }
      
    //获得职位ID
         JobName =  document.getElementById("JobName");
         var JobNameSecondLevel = document.getElementById("JobNameSecondLevel");
         document.getElementById("hJobID").value = JobName.value;
         document.getElementById("hJobIDSecondLevel").value = JobNameSecondLevel.value;
         //获得一二级职位名称
         if(JobName.value == "-1")
         {
            document.getElementById("hJobName").value = "";
         }
         else
         {
             document.getElementById("hJobName").value = JobName[JobName.selectedIndex].innerText;
         }
         
         if(JobNameSecondLevel.value == "-1")
         {
            document.getElementById("hJobNameSecondLevel").value = "";
         }
         else
         {
            document.getElementById("hJobNameSecondLevel").value =JobNameSecondLevel[JobNameSecondLevel.selectedIndex].innerText;
         }
         
           
           var hFirstDept = document.getElementById("hFirstDept");
           var hSecondDept = document.getElementById("hSecondDept");
           var hThirdDept = document.getElementById("hThirdDept");
           var hFourthDept = document.getElementById("hFourthDept");
           
           hFirstDept.value = FirstDept;
           hSecondDept.value = SecondDept;
           hThirdDept.value = ThirdDept;
           hFourthDept.value =FourthDept;
   }
   
   
    //高级检索中点击分配资源按钮的处理函数
      function allocateResourceForAdvSearch(from)
      {
            //检查是否至少选择一个资源 
            var tableList = document.getElementById('tblist');
            var vCBList = tableList.getElementsByTagName("INPUT");
            var i = 0;
            var resourcelist = "";
            var flag = false;
            
            for(; i < vCBList.length; i++)
            {
                if(vCBList[i].type == "checkbox")
                {
                    if(vCBList[i].checked == true)
                    {
                        resourcelist = resourcelist +vCBList[i+1].value + ","; 
                        flag = true;
                    }
                }
            }
            //没有选择一个资源 
            if(flag == false)
            {
                jAlert("请选择资源！","系统提示");
                return false;
            }
            //保存当前的检索条件
            var ret_array=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
            ret_array[0] = document.getElementById('ResumeStatus').value;
            ret_array[1] = document.getElementById('Location').value;
            ret_array[2] = document.getElementById('School').value;
            ret_array[3] = document.getElementById('GraduateTimeBegin').value;
            ret_array[4] = document.getElementById('GraduateTimeEnd').value;
            ret_array[5] = document.getElementById('Degree').value;
            ret_array[6] = document.getElementById('Specialty').value;
            ret_array[7] = document.getElementById('Company').value;
            ret_array[8] = document.getElementById('Position').value;
            ret_array[9] = document.getElementById('JobName').value;
            ret_array[10] = document.getElementById('JobNameSecondLevel').value;
            ret_array[11] = document.getElementById('JobObjective').value;
            ret_array[12] = document.getElementById('ddlFirstDept').value;
            if("" == ret_array[12])
            {
                ret_array[12] = "-1";
            }
            ret_array[13] = document.getElementById('ddlSecondDept').value;
            if("" == ret_array[13])
            {
                ret_array[13] = "-1";
            }
            ret_array[14] = document.getElementById('ddlThirdDept').value;
            if("" == ret_array[14])
            {
                ret_array[14] = "-1";
            }
            ret_array[15] = document.getElementById('ddlFourthDept').value;
            if("" == ret_array[15])
            {
                ret_array[15] = "-1";
            }
            ret_array[16] = document.getElementById('EnterTime').value;
            ret_array[17] = document.getElementById('BelongManID').value;
                 //获得职位ID
             var JobName =  document.getElementById("JobName");
             var JobNameSecondLevel = document.getElementById("JobNameSecondLevel");
             document.getElementById("hJobID").value = JobName.value;
             document.getElementById("hJobIDSecondLevel").value = JobNameSecondLevel.value;
             //获得一二级职位名称
             if(JobName.value == "-1")
             {
                document.getElementById("hJobName").value = "";
             }
             else
             {
                 document.getElementById("hJobName").value = JobName[JobName.selectedIndex].innerText;
             }
             
             if(JobNameSecondLevel.value == "-1")
             {
                document.getElementById("hJobNameSecondLevel").value = "";
             }
             else
             {
                document.getElementById("hJobNameSecondLevel").value =JobNameSecondLevel[JobNameSecondLevel.selectedIndex].innerText;
             }
             
            var SearchCondition = document.getElementById('SearchCondition').value;
            var CurrentPage = document.getElementById('currentPage').value; 
        
           var strFeatureInfo = "dialogHeight:650px;dialogWidth:500px;center:Yes;help:No;resizable:No;status:No ";
           var strURL ="AllocateResource.aspx?Rnd="+Math.random()+"&from="+from+"&resourcelist="+resourcelist;
           var strpar;
           window.showModalDialog(strURL,strpar,strFeatureInfo);
           
           window.location.href = "AdvanceSearch.aspx?AdvSearCond="+ret_array+"&SearchCondition="+SearchCondition+"&CurrentPage="+CurrentPage;  
      }
      
       //批量查询中分配资源的js函数  
  function allocateResourceForBatchQuery(from)
  {
        if("" == from)
        {
            jAlert("资源接受人不能为空！","系统提示");
            return;
        }
        
        var tableList = document.getElementById('tblist');
        var vCBList = tableList.getElementsByTagName("INPUT");
        var i = 0;
        var resourcelist = "";
        var flag = false;
        
        for(; i < vCBList.length; i++)
        {
            if(vCBList[i].type == "checkbox")
            {
                if(vCBList[i].checked == true)
                {
                    resourcelist = resourcelist +vCBList[i+1].value + ","; 
                    flag = true;
                }
            }
        }
        
        if(flag == false)
        {
            jAlert("请选择资源！","系统提示");
            return;
        }
        
        //保存当前的检索条件
       var mobilephones =  document.getElementById('Mobilephones').value;  
       var mp =  mobilephones.split('\r\n');
       var mps = "";
       for(i = 0; i < mp.length; i++)
       {
            mps = mps + mp[i] + ",";
       }
      
       var strFeatureInfo = "dialogHeight:650px;dialogWidth:500px;center:Yes;help:No;resizable:No;status:No "; 
       //var strURL = "Invitation.aspx?InvitationInterviewID="+ InvitationInterviewID + "&ResumeID=" + ResumeID + "&InvitationResultName=" + escape(InvitationResultName) + "&InterviewTime=" + escape(InterviewTime) + "&Remark=" + escape(Remark) + "";
       var strURL ="AllocateResource.aspx?Rnd="+Math.random()+"&from="+from+"&resourcelist="+resourcelist;
       var strpar;
       window.showModalDialog(strURL,strpar,strFeatureInfo);
       window.location.href = "BatchQueryResource.aspx?Mobilephones="+mps; 
  }
  
  
   function loadInvitationAndApplyChannel()
  {
        
        loadApplyChannel();
        loadInvitationResult();
  }
  
  
  function checkInvitationAndResume()
  {
        var retVal = checkInvitationResult();
        if(retVal == false)
        {
            return false;
        }
        //return checkApplyChannel();没起作用？
        var name = document.getElementById('Name').value;
        var mobilephone = document.getElementById('Mobilephone').value;
        if("" == name || "" == mobilephone )
        {
            jAlert("姓名和手机号不能为空！","系统提示");
            return false;
        }
        
        var selectIndex = document.getElementById("ApplyChannel").selectedIndex;
         if(0 == selectIndex)
         {
            jAlert("请选择应聘渠道！","系统提示");
            return false;
         }
         else if(2 == selectIndex )
         {
            var remark = document.getElementById("ApplyChannelRemark").value;
            if("" == remark)
            {
                jAlert("请输入具体来源！","系统提示");
                return false;
            }
           
         }
         else if(3 == selectIndex)
         {
            var ReferID = document.getElementById("ReferID").value;
            var ReferName = document.getElementById("ReferName").value;
            if("" == ReferID || "" == ReferName)
            {
                jAlert("请输入推荐人工号和姓名！","系统提示");
                return false;
            }
            
         }
         
         document.getElementById("hForeignLanguage").value = document.getElementById("ForeignLanguage").value;
         document.getElementById("hForeignLanguageLevel").value = document.getElementById("ForeignLanguageLevel").value;
           //获得职位ID
         var JobName =  document.getElementById("JobName");
         var JobNameSecondLevel = document.getElementById("JobNameSecondLevel");
         document.getElementById("hJobID").value = JobName.value;
         document.getElementById("hJobIDSecondLevel").value = JobNameSecondLevel.value;
         //获得一二级职位名称
         if(JobName.value == "-1")
         {
            document.getElementById("hJobName").value = "";
         }
         else
         {
             document.getElementById("hJobName").value = JobName[JobName.selectedIndex].innerText;
         }
         
         if(JobNameSecondLevel.value == "-1")
         {
            document.getElementById("hJobNameSecondLevel").value = "";
         }
         else
         {
            document.getElementById("hJobNameSecondLevel").value =JobNameSecondLevel[JobNameSecondLevel.selectedIndex].innerText;
         }
           
         return true;
  }
     
     
     
     
     
     
//   批量删除
function delall(from)
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
                    deleteItem(vCBList[i+1].value);
//                  resourcelist = resourcelist +vCBList[i+1].value + ","; 
                    flag = true;
                }
            }
        }
        alert("批量删除"+j+"条数据", "删除成功");
        if(flag == false)
        {
            jAlert("请选择资源！","系统提示");
            return;
        }
     //   window.location.href = "../AdminResource/ResourceList.aspx"; 
        setTimeout("window.location.reload();", "3000");
   }
   //
   function allInvitation() {
       var strFeatureInfo = "dialogHeight:300px;dialogWidth:450px;center:Yes;help:No;resizable:No;status:No ";
       var strURL = "AllInvitation.aspx";
       
       window.showModalDialog(strURL, null, strFeatureInfo);
       window.location.href = window.location.href;




   }

  function massInvitation(from)
  {
        if("" == from)
        {
            jAlert("资源接受人不能为空！","系统提示");
            return;
        }
        
        var tableList = document.getElementById('tblist');
        var vCBList = tableList.getElementsByTagName("INPUT");
        var i = 0;
        var resourcelist = "";
        var flag = false;
        for(; i < vCBList.length; i++)
        {
            if(vCBList[i].type == "checkbox")
            {
                if(vCBList[i].checked == true)
                {
                    resourcelist = resourcelist +vCBList[i+1].value + ","; 
                    flag = true;
                }
            }
        }

        
        if(flag == false)
        {
            jAlert("请选择资源！","系统提示");
            return;
        }
        
        //保存当前的检索条件
        var ret_array=["0","0","0"];
        ret_array[0] = document.getElementById('ResumeStatus').value;
        ret_array[1] = document.getElementById('Name').value;
        ret_array[2] = document.getElementById('Telephone').value;
        
        var SearchCondition = document.getElementById('SearchCondition').value;
        var CurrentPage = document.getElementById('currentPage').value; 
               
       var strFeatureInfo = "dialogHeight:300px;dialogWidth:450px;center:Yes;help:No;resizable:No;status:No "; 
       //var strURL = "Invitation.aspx?InvitationInterviewID="+ InvitationInterviewID + "&ResumeID=" + ResumeID + "&InvitationResultName=" + escape(InvitationResultName) + "&InterviewTime=" + escape(InterviewTime) + "&Remark=" + escape(Remark) + "";
       var strURL ="massInvitation.aspx?Rnd="+Math.random()+"&from="+from+"&resourcelist="+resourcelist;
       var strpar;
       window.showModalDialog(strURL,strpar,strFeatureInfo);
       window.location.href = "ResourceList.aspx?Rnd="+Math.random()+"&RetArray="+ret_array+"&SearchCondition="+SearchCondition+"&CurrentPage="+CurrentPage;
   }



  function massChange(from)
  {
        if("" == from)
        {
            jAlert("资源接受人不能为空！","系统提示");
            return;
        }
        
        var tableList = document.getElementById('tblist');
        var vCBList = tableList.getElementsByTagName("INPUT");
        var i = 0;
        var resourcelist = "";
        var flag = false;
        for(; i < vCBList.length; i++)
        {
            if(vCBList[i].type == "checkbox")
            {
                if(vCBList[i].checked == true)
                {
                    resourcelist = resourcelist +vCBList[i+1].value + ","; 
                    flag = true;
                }
            }
        }

        
        if(flag == false)
        {
            jAlert("请选择资源！","系统提示");
            return;
        }
        
        //保存当前的检索条件
        var ret_array=["0","0","0"];
        ret_array[0] = document.getElementById('ResumeStatus').value;
        ret_array[1] = document.getElementById('Name').value;
        ret_array[2] = document.getElementById('Telephone').value;
        
        var SearchCondition = document.getElementById('SearchCondition').value;
        var CurrentPage = document.getElementById('currentPage').value; 
               
       var strFeatureInfo = "dialogHeight:600px;dialogWidth:800px;center:Yes;help:No;resizable:No;status:No "; 
       //var strURL = "Invitation.aspx?InvitationInterviewID="+ InvitationInterviewID + "&ResumeID=" + ResumeID + "&InvitationResultName=" + escape(InvitationResultName) + "&InterviewTime=" + escape(InterviewTime) + "&Remark=" + escape(Remark) + "";
       var strURL ="massChange.aspx?Rnd="+Math.random()+"&from="+from+"&resourcelist="+resourcelist;
       var strpar;
       window.showModalDialog(strURL,strpar,strFeatureInfo);
       window.location.href = "ResourceList.aspx?Rnd="+Math.random()+"&RetArray="+ret_array+"&SearchCondition="+SearchCondition+"&CurrentPage="+CurrentPage; 
  }
   
   function massAdvanceInvitation(from)
  {
        if("" == from)
        {
            jAlert("资源接受人不能为空！","系统提示");
            return;
        }
        
        var tableList = document.getElementById('tblist');
        var vCBList = tableList.getElementsByTagName("INPUT");
        var i = 0;
        var resourcelist = "";
        var flag = false;
        for(; i < vCBList.length; i++)
        {
            if(vCBList[i].type == "checkbox")
            {
                if(vCBList[i].checked == true)
                {
                    resourcelist = resourcelist +vCBList[i+1].value + ","; 
                    flag = true;
                }
            }
        }

        
        if(flag == false)
        {
            jAlert("请选择资源！","系统提示");
            return;
        }
       
       var strFeatureInfo = "dialogHeight:600px;dialogWidth:800px;center:Yes;help:No;resizable:No;status:No "; 
       //var strURL = "Invitation.aspx?InvitationInterviewID="+ InvitationInterviewID + "&ResumeID=" + ResumeID + "&InvitationResultName=" + escape(InvitationResultName) + "&InterviewTime=" + escape(InterviewTime) + "&Remark=" + escape(Remark) + "";
       var strURL ="massInvitation.aspx?Rnd="+Math.random()+"&from="+from+"&resourcelist="+resourcelist;
       var strpar;
       window.showModalDialog(strURL,strpar,strFeatureInfo);
       window.location.href = "AdvanceSearch.aspx?Rnd="+Math.random(); 
  }
  function massAdvanceChange(from)
  {
        if("" == from)
        {
            jAlert("资源接受人不能为空！","系统提示");
            return;
        }
        
        var tableList = document.getElementById('tblist');
        var vCBList = tableList.getElementsByTagName("INPUT");
        var i = 0;
        var resourcelist = "";
        var flag = false;
        for(; i < vCBList.length; i++)
        {
            if(vCBList[i].type == "checkbox")
            {
                if(vCBList[i].checked == true)
                {
                    resourcelist = resourcelist +vCBList[i+1].value + ","; 
                    flag = true;
                }
            }
        }

        
        if(flag == false)
        {
            jAlert("请选择资源！","系统提示");
            return;
        }
        
        
       var strFeatureInfo = "dialogHeight:600px;dialogWidth:800px;center:Yes;help:No;resizable:No;status:No "; 
       //var strURL = "Invitation.aspx?InvitationInterviewID="+ InvitationInterviewID + "&ResumeID=" + ResumeID + "&InvitationResultName=" + escape(InvitationResultName) + "&InterviewTime=" + escape(InterviewTime) + "&Remark=" + escape(Remark) + "";
       var strURL ="massChange.aspx?Rnd="+Math.random()+"&from="+from+"&resourcelist="+resourcelist;
       var strpar;
       window.showModalDialog(strURL,strpar,strFeatureInfo);
       window.location.href = "AdvanceSearch.aspx?Rnd="+Math.random(); 
  }