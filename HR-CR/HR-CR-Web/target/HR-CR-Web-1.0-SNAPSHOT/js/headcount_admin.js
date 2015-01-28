// JScript 文件
  
  //进入修改台账号信息页面
  function editHC(o1)
  {
      location.href='HeadCountModity.aspx?HCID='+o1;
  }
  
  //删除台账号信息
  function deleteHC(o) {
    jConfirm('确定执行操作?', '系统提示', function(r) {
        if (r) {
          
            $.post("../Ajax_Qiujin.aspx", { type: "DeleteHC", HCID: o, rdom: Math.random() }, function(data) {
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
 
 function callBack()
 {
        window.location.href=window.location.href;
 }
 
 //弹出选择部门对话框
 function chooseDept()
 {
     window.showModalDialog('../AdminSystem/DepartmentSelect.aspx?rdom=' + Math.random(), callBack, "resizable:no;scroll:no;status:no;dialogWidth=15cmpx;dialogHeight=8cm;center=yes;help=no");
 }
  
     
 function selectA()
 {     
    if(document.form1["ddlFirstDept"].value == "请选择--")
    {
        document.form1["ddlSecondDept"].value = "请选择--";
        document.form1["ddlThirdDept"].value = "请选择--";
        document.form1["ddlFourthDept"].value = "请选择--";
    }
 }
 
 function selectB()
 {
     if(document.form1["ddlSecondDept"].value == "请选择--")
     {
        document.form1["ddlThirdDept"].value = "请选择--";
        document.form1["ddlFourthDept"].value = "请选择--";
    }        
 }
 
 function selectC()
 {
    if(document.form1["ddlThirdDept"].value == "请选择--")
    {
        document.form1["ddlFourthDept"].value = "请选择--";
    }      
 }
 
 //在前台获取四级部门的ID值
 function GetDeptID()
 {
     var FirstDept=document.getElementById('ddlFirstDept').value;
     if(FirstDept=="请选择--")
     {
         jAlert("请选择一级部门！","系统提示");
         return;
     }
     else
     {
         var FirstDept = document.getElementById("ddlFirstDept").value;
         var SecondDept = document.getElementById("ddlSecondDept").value;
         var ThirdDept = document.getElementById("ddlThirdDept").value;
         var FourthDept = document.getElementById("ddlFourthDept").value;
         if(SecondDept=="请选择--"||SecondDept=="")
         {
             SecondDept==null;
         }
         
         if(ThirdDept=="请选择--"||ThirdDept=="")
         {
             ThirdDept==null;
         }
         
         if(FourthDept=="请选择--"||FourthDept=="")
         {
             FourthDept==null;
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
 }

 
