require(["userinterface","loginout","register","chat"],function(ui,log,register,chat){window.onload=function(){ui.hideUrlBar(),window.orientation=function(){ui.hideUrlBar()},this.doRegister=register.doRegister,this.goBack=register.goBack,this.setTabItem=ui.setTabItem,this.closeTalkPanel=ui.closeTalkPanel,this.showSearchPanel=ui.showSearchPanel,this.closeSearchPanel=ui.closeSearchPanel,this.showTalkPanel=ui.showTalkPanel,this.showTabNoticification=ui.showTabNoticification,this.toggleFaceRegion=ui.toggleFaceRegion,this.replaceEmotion=chat.replaceEmotion,this.showTalkPanelClick=ui.showTalkPanelClick,this.readTalkHistory=ui.readTalkHistory,this.sendMessage=chat.sendMessage,this.scrollToBottom=ui.scrollToBottom,this.hideUrlBar=ui.hideUrlBar,this.doLogin=log.doLogin,this.reveiveMessage=chat.reveiveMessage,this.toggleTabNoticification=ui.toggleTabNoticification,this.toggleFaceRegion=ui.toggleFaceRegion,register.goRegister(),register.register(),register.goBack(),log.login(),log.checkCurrentUser(),log.logout(),ui.bindInputChange(),ui.bindItemClick(),ui.bindSearchClose(),ui.bindCloseTalkPanel(),ui.bindShowEmotion(),ui.bindItemSwipe(),chat.bindEmotionClick(),chat.bindSendMessage()}});