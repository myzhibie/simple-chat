define(["utility","userinterface","chat"],function(util,ui,chat){return{login:function(){var oLogin=document.getElementById("loginBtn"),that=this;util.isTouchScreen(oLogin)?oLogin.ontouchstart=that.loginHandler:oLogin.onclick=that.loginHandler},loginHandler:function(){var oName=document.getElementById("username"),oPass=document.getElementById("password"),oMessage=document.getElementById("loginmessage"),reg=/^\s*$/gi;if(reg.test(oName.value)||reg.test(oPass.value))util.showMessage(oMessage,"登陆用户名密码不能为空","error_show");else{var user={username:oName.value,password:oPass.value};util.sendAjax("post","/login",user,doLogin)}},doLogin:function(xhr){var oMessage=document.getElementById("loginmessage");"no user"==xhr.responseText?util.showMessage(oMessage,"用户名不存在","error_show"):"fail"==xhr.responseText?util.showMessage(oMessage,"登陆失败","error_show"):"invalid password"==xhr.responseText?util.showMessage(oMessage,"密码错误","error_show"):(localStorage.setItem("currentUser",xhr.responseText),ui.initialUserPanel(),ui.initialUser(0),chat.connection(util.getCurrentUser()))},checkCurrentUser:function(){var user=localStorage.getItem("currentUser");user&&(ui.initialUserPanel(),ui.initialUser(1),chat.connection(util.getCurrentUser()))},logout:function(){var oLogoutBtn=document.getElementById("logoutbtn"),that=this;util.isTouchScreen(oLogoutBtn)?oLogoutBtn.ontouchstart=function(){window.confirm("确定退出当前用户？")&&(that.doLogout(),location.reload())}:oLogoutBtn.onclick=function(){window.confirm("确定退出当前用户？")&&(that.doLogout(),location.reload())}},doLogout:function(){var oLogin=document.getElementById("login"),oRegister=document.getElementById("register"),oUserDiv=document.getElementById("user_div");util.removeClass(oLogin,"hidden"),util.removeClass(oRegister,"hidden"),util.addClass(oUserDiv,"hidden"),util.clearUserDataCache()}}});