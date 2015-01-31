var isIe = (document.all) ? true : false;
//设置select的可见状态
function setSelectState(state) {
    var objl = document.getElementsByTagName('select');
    for (var i = 0; i < objl.length; i++) {
        objl[i].style.visibility = state;
    }
}
function mousePosition(ev) {
    if (ev.pageX || ev.pageY) {
        return { x: ev.pageX, y: ev.pageY };
    }
    return {
        x: ev.clientX + document.body.scrollLeft - document.body.clientLeft, y: ev.clientY + document.body.scrollTop - document.body.clientTop
    };
}
//弹出方法
function showMessageBox(wTitle, content, pos, wWidth) {
    closeWindow();
    var bWidth = parseInt(document.documentElement.clientWidth);
    var bHeight = parseInt(document.documentElement.clientHeight);
    if (isIe) {
        setSelectState('hidden');
    }
    var back = document.createElement("div");
    back.id = "back";
    var styleStr = "top:0px;left:0px;position:absolute;background:#666;width:" + bWidth + "px;height:" + bHeight + "px;";
    styleStr += (isIe) ? "filter:alpha(opacity=40);" : "opacity:0.40;";
    back.style.cssText = styleStr;
    document.body.appendChild(back);
    var left = "left:" + (bWidth - 500) / 2 + "px;";
    var top="top :"+(bHeight-500)/2+"px;"
    var mesW = document.createElement("div");
    mesW.id = "mesWindow";
    mesW.className = "mesWindow";
    mesW.style.left = ""+(bWidth - 500) / 2+"px";
    mesW.style.top = ""+(bHeight - 500) / 2+"px";
    var text = "<div class='mesWindowTop' style='" + left + top + "'><table width='100%' height='100%'><tr><td>" + wTitle + "</td><td style='width:1px;'><input id='closebutton' type='button' onclick='closeWindow();window.location.reload();' title='关闭窗口' class='close' value='关闭' /></td></tr></table></div><div class='mesWindowContent' id='mesWindowContent'>" + content + "</div><div class='mesWindowBottom'></div>";

    mesW.innerHTML = text;
     //styleStr="left:"+(((pos.x-wWidth)>0)?(pos.x-wWidth):pos.x)+"px;top:"+(pos.y)+"px;position:absolute;width:"+wWidth+"px;";
    //mesW.style.cssText=styleStr;
     document.body.appendChild(mesW);
    
}
function showBackground(obj, endInt) {
    obj.filters.alpha.opacity += 1;
    if (obj.filters.alpha.opacity < endInt) {
        setTimeout(function () { showBackground(obj, endInt) }, 8);
    }
}
//关闭窗口
function closeWindow() {
    if (document.getElementById('back') != null) {
        document.getElementById('back').parentNode.removeChild(document.getElementById('back'));
    }
    if (document.getElementById('mesWindow') != null) {
        document.getElementById('mesWindow').parentNode.removeChild(document.getElementById('mesWindow'));
    }
    if (isIe) {
        setSelectState('');
    }
}
//测试弹出
function testMessageBox(ev,action,id) {
    var objPos = mousePosition(ev);
    var src;
    if (action == 0) {//新建
        src = "AddOrEdit.aspx?action=0";
    }
    else if (action == 1) {//修改
        src = "AddOrEdit.aspx?action=1&id="+id;
    }
    else {//浏览事件
        src = "Detail.aspx";
    }
    messContent = "<iframe class='closeable' width='500px' height='500px;' src='"+src+"'></iframe>";
    //padding是控制弹出窗口内消息正文与边框之间的距离大小
    showMessageBox('', messContent, objPos, 350);

    //350控制弹出窗口的宽度
}
