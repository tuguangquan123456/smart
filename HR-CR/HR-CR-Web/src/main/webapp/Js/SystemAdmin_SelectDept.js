//JS文件
function callBack()
{
    window.location.href=window.location.href;
}
    
//从模态对话框选择部门信息
function SelectDept()
{
  var result = false;
    
  result=window.showModalDialog('../Page/DepartmentSelect.aspx?rdom=' + Math.random() +"&InterviewerID=0", callBack, "resizable:no;scroll:no;status:no;dialogWidth=15cmpx;dialogHeight=7cm;center=yes;help=no;");
  if(result != null && result[0] != "" && result[0] != "0")
  {
      if(result[0] != "请选择--")
      {
        document.form1["txtInterviewDep"].value = result[1];
        document.form1["lbDep1Id"].value = result[0];
        document.form1["lbDep1Name"].value = result[1];
      }
      else 
      {
        document.form1["lbDep1Id"].value = "0";
        document.form1["lbDep1Name"].value = "0";
      }
      
      
      if(result[2] != "请选择--")
      {
        document.form1["txtInterviewDep"].value = document.form1["txtInterviewDep"].value + "-->" + result[3] ;
        document.form1["lbDep2Id"].value = result[2];
        document.form1["lbDep2Name"].value = result[3];
      }
       else 
      {
        document.form1["lbDep2Id"].value = "0";
        document.form1["lbDep2Name"].value = "0";
      }
      
      if(result[4] != "请选择--")
      {
        document.form1["txtInterviewDep"].value = document.form1["txtInterviewDep"].value + "-->" + result[5] ;
        document.form1["lbDep3Id"].value = result[4];
        document.form1["lbDep3Name"].value = result[5];
      }
       else 
      {
        document.form1["lbDep3Id"].value = "0";
        document.form1["lbDep3Name"].value = "0";
      }
//      
//      if(result[6] != "请选择--")
//      {
//        document.form1["txtInterviewDep"].value = document.form1["txtInterviewDep"].value + "-->" + result[7] ;
//        document.form1["lbDep4Id"].value = result[6];
//        document.form1["lbDep4Name"].value = result[7];
//      }
//       else 
//      {
//        document.form1["lbDep4Id"].value = "0";
//        document.form1["lbDep4Name"].value = "0";
//      }
 }
 return ;
  
}

//OperatorModify页面从模态对话框选择部门信息
function SelectDept_OperatorModify()
{
  var result = false;
    
  result=window.showModalDialog('../Page/DepartmentSelect.aspx?rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=15cmpx;dialogHeight=7cm;center=yes;help=no;");
  if(result != null && result[0] != "" && result[0] != "0")
  {
      if(result[0] != "请选择--")
      {
        document.form1["txtUserDep"].value = result[1];
        document.form1["lbDep1Id"].value = result[0];
        document.form1["lbDep1Name"].value = result[1];
      }
      else 
      {
        document.form1["lbDep1Id"].value = "0";
        document.form1["lbDep1Name"].value = "0";
      }
      
      
      if(result[2] != "请选择--")
      {
        document.form1["txtUserDep"].value = document.form1["txtUserDep"].value + "-->" + result[3] ;
        document.form1["lbDep2Id"].value = result[2];
        document.form1["lbDep2Name"].value = result[3];
      }
       else 
      {
        document.form1["lbDep2Id"].value = "0";
        document.form1["lbDep2Name"].value = "0";
      }
      
      if(result[4] != "请选择--")
      {
        document.form1["txtUserDep"].value = document.form1["txtUserDep"].value + "-->" + result[5] ;
        document.form1["lbDep3Id"].value = result[4];
        document.form1["lbDep3Name"].value = result[5];
      }
       else 
      {
        document.form1["lbDep3Id"].value = "0";
        document.form1["lbDep3Name"].value = "0";
      }
      
      if(result[6] != "请选择--")
      {
        document.form1["txtUserDep"].value = document.form1["txtUserDep"].value + "-->" + result[7] ;
        document.form1["lbDep4Id"].value = result[6];
        document.form1["lbDep4Name"].value = result[7];
      }
       else 
      {
        document.form1["lbDep4Id"].value = "0";
        document.form1["lbDep4Name"].value = "0";
      }
 }
 return ;
  
}



  
  function editItem(o1)
  {
      var result = false;
      result=window.showModalDialog('DepartmentSelect.aspx?rdom=' + Math.random()+'&InterviewerID=' + o1, callBack, "resizable:no;scroll:no;status:no;dialogWidth=15cmpx;dialogHeight=8cm;center=yes;help=no;");
      if(result != null && result[0] != "" && result[0] != "0")
      {
          if(result[0] != "请选择--")
          {
            document.form1["txtInterviewDep"].value = result[1];
            document.form1["lbDep1Id"].value = result[0];
            document.form1["lbDep1Name"].value = result[1];
          }
          else 
          {
            document.form1["lbDep1Id"].value = "0";
            document.form1["lbDep1Name"].value = "0";
          }
          
          
          if(result[2] != "请选择--")
          {
            document.form1["txtInterviewDep"].value = document.form1["txtInterviewDep"].value + "-->" + result[3] ;
            document.form1["lbDep2Id"].value = result[2];
            document.form1["lbDep2Name"].value = result[3];
          }
           else 
          {
            document.form1["lbDep2Id"].value = "0";
            document.form1["lbDep2Name"].value = "0";
          }
          
          if(result[4] != "请选择--")
          {
            document.form1["txtInterviewDep"].value = document.form1["txtInterviewDep"].value + "-->" + result[5] ;
            document.form1["lbDep3Id"].value = result[4];
            document.form1["lbDep3Name"].value = result[5];
            
          }
           else 
          {
            document.form1["lbDep3Id"].value = "0";
            document.form1["lbDep3Name"].value = "0";
          }
          
          if(result[6] != "请选择--")
          {
            document.form1["txtInterviewDep"].value = document.form1["txtInterviewDep"].value + "-->" + result[7] ;
            document.form1["lbDep4Id"].value = result[6];
            document.form1["lbDep4Name"].value = result[7];
          }
           else 
          {
            document.form1["lbDep4Id"].value = "0";
            document.form1["lbDep4Name"].value = "0";
          }
          document.form1["AllDeptName"].value = document.form1["txtInterviewDep"].value;
      }
      return ;
  }


//ddlFirstDep控件的onclick事件
 function T_ddlFirstDep()
 {     
    if(document.form1["ddlFirstDep"].value == "请选择--")
    {
        document.form1["ddlSecondDep"].value = "请选择--";
        document.form1["ddlThirdDep"].value = "请选择--";
        document.form1["ddlFourthDep"].value = "请选择--";
    }
        document.form1["ddlThirdDep"].options.length = 0;
        document.form1["ddlFourthDep"].options.length = 0;
 }
 
 //ddlSecondDep控件的onclick事件
 function T_ddlSecondDep()
 {
     if(document.form1["ddlSecondDep"].value == "请选择--")
     {
        document.form1["ddlThirdDep"].value = "请选择--";
        document.form1["ddlFourthDep"].value = "请选择--";
     }   
        document.form1["ddlFourthDep"].options.length = 0; 
 }
 
 //ddlThirdDep控件的onclick事件
 function T_ddlThirdDep()
 {
    if(document.form1["ddlThirdDep"].value == "请选择--")
    {
        document.form1["ddlFourthDep"].value = "请选择--";
    }      
}
  
//模态对话框跳回去的之前的页面  
function jump()
{

    var ret_array=["0","0","0","0","0","0","0","0"];
   
       if((document.form1["ddlFirstDep"].value == "请选择--")||(document.form1["ddlFirstDep"].options.length == 0))
       {
           ret_array[0]="请选择--";
           ret_array[1]="请选择--";
           alert("请至少选择一级部门！");
           return ;
       }
       else
       {
           ret_array[0]=document.getElementById('ddlFirstDep').options[document.getElementById('ddlFirstDep').selectedIndex].value;
           ret_array[1]=document.getElementById('ddlFirstDep').options[document.getElementById('ddlFirstDep').selectedIndex].text;
       }
           
       if((document.form1["ddlSecondDep"].value == "请选择--")||(document.form1["ddlSecondDep"].options.length == 0))
       {
           ret_array[2]="请选择--";
           ret_array[3]="请选择--";
       }
       else
       {
           ret_array[2]=document.getElementById('ddlSecondDep').options[document.getElementById('ddlSecondDep').selectedIndex].value;
           ret_array[3]=document.getElementById('ddlSecondDep').options[document.getElementById('ddlSecondDep').selectedIndex].text;
       }
       
        if((document.form1["ddlThirdDep"].value == "请选择--")||(document.form1["ddlThirdDep"].options.length == 0))
       {
           ret_array[4]="请选择--";
           ret_array[5]="请选择--";
       }
       else
       {
           ret_array[4]=document.getElementById('ddlThirdDep').options[document.getElementById('ddlThirdDep').selectedIndex].value;
           ret_array[5]=document.getElementById('ddlThirdDep').options[document.getElementById('ddlThirdDep').selectedIndex].text;
       }
       
        if((document.form1["ddlFourthDep"].value == "请选择--")||(document.form1["ddlFourthDep"].options.length == 0))
       {
           ret_array[6]="请选择--";
           ret_array[7]="请选择--";
       }
       else
       {
           ret_array[6]=document.getElementById('ddlFourthDep').options[document.getElementById('ddlFourthDep').selectedIndex].value;
           ret_array[7]=document.getElementById('ddlFourthDep').options[document.getElementById('ddlFourthDep').selectedIndex].text;
       }
                   
      window.returnValue=ret_array;
      window.close();
}