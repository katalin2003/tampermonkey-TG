// ==UserScript==
// @name         nbr_dark-theme.js
// @author       katalin_2003
// @version      0.3.6
// @downloadURL  https://raw.githubusercontent.com/katalin2003/tampermonkey-TG/master/scripts/themes/NBR_xenFoogle-dark.js
// @description  theme script for http://forum.notebookreview.com/ based on the NBR_xenFoogle theme
// @include      http://forum.notebookreview.com/*
// @grant        none
// ==/UserScript==

// colors
var wW = '#FFFFFF'; // white
var lG = '#2DBE2D'; // light green - #94CA18
var dG = '#2C2C2C';	// dark gray - #2C2C2C
var gG = '#888888'; // gray
var bK = '#000000'; // black



function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

// Top nav bar
addGlobalStyle('html { background: url("http://www.vbstyles.com/vbstyles_images/header-bg.png") repeat scroll !important; }');
addGlobalStyle('div.navTabs { background: '+ dG +'; border-bottom: 3px solid '+ lG +'; }');	//#1F5263
// Text color
addGlobalStyle('.navTabs .navTab.selected .navLink, .navTabs .navTab.PopupClosed .navLink, .navTabs .navTab.PopupClosed .navLink:hover, .navTabs .navTab.PopupOpen .navLink, .navTabs .navTab.PopupOpen .navLink:hover, .nodeList .categoryStrip .nodeTitle a { color: '+ lG +' !important; }');
//addGlobalStyle('li.navTab a:hover { color: '+ lG +' !important; }');
// active navTab
// addGlobalStyle('.navTabs .navTab.selected .navLink { border-bottom: 3px solid #000000 !important; }');

// Content menu
addGlobalStyle('.Menu { border: 0; border-top: 3px solid '+ lG +'; box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5); }');
addGlobalStyle('.Menu .primaryContent, .Menu .secondaryContent { background: '+ dG +';}');
// Content menu header
addGlobalStyle('.Menu .menuHeader h3 { color: '+ wW +'; }');
// Content menu sub title
addGlobalStyle('.Menu .menuHeader .muted { color: '+ gG +'; }');


addGlobalStyle('a.navLink:hover { background-color: #000000 !important; }');  // #96291E
addGlobalStyle('div#content .pageContent { background: url("http://www.vbstyles.com/vbstyles_images/header-bg.png") repeat scroll !important; color: '+ lG +' !important; border: 0px !important; padding-right: 0px !important; padding-left: 0px !important; }');
addGlobalStyle('div.tabLinks.forumsTabLinks { border: 0px !important; }');
addGlobalStyle('ul.blockLinksList { margin-left: 0px !important; }');
addGlobalStyle('ol#forums { background-color: #000000 !important; border: 0 !important; padding: 1px !important; }');
addGlobalStyle('fieldset.breadcrumb { background: '+ dG +'; border: 0; border-bottom: 3px solid '+ lG +'; }');

// login bar border #loginBar
addGlobalStyle('div#loginBar { border: 0px !important; }');

// avatar container
addGlobalStyle('.avatar img { background: none; border: 0; }');

// lower nav bar tabs ("Mark Forums Read" etc..)
addGlobalStyle('.blockLinksList a { border-radius: 0; background-color: '+ dG +' !important; color: '+ lG +' !important; }');  // #688A9D
addGlobalStyle('.navTabs .navTab.selected .tabLinks a:hover, .navTabs .navTab.selected .tabLinks a:focus { text-shadow: none; background-color: #000000 !important; border: 1px solid #000000; }');  //#96291E

// breadcrumbs navigation
addGlobalStyle('span.arrow { background: rgba(0, 0, 0, 0) url("styles/xenfoogle/xenforo/xenforo-ui-sprite.png") no-repeat -140px 0.1px !important; transform:rotate(270deg) !important; }');
addGlobalStyle('.crust:first-child>a.crumb, .crust>a.crumb, .crust:last-child>a.crumb { color: '+ lG +' !important; }');
//addGlobalStyle('.crust>a.crumb { color: #FFFFFF !important; }');
//addGlobalStyle('.crust:last-child>a.crumb { color: #FFFFFF !important; }'); //#2C8DAE

// search input and buttons
addGlobalStyle('input#QuickSearchQuery { background-color: '+ dG +' !important; }');
addGlobalStyle('input#QuickSearchQuery:focus { background-image: none !important; }');
// Button style & {{username}}, Inbox, Alerts
addGlobalStyle('.button, .button.primary, a.moreOptions { background-color: '+ lG +'; border: 1px solid '+ lG +'; }');
//addGlobalStyle('a.NoPopupGadget { background-color: #96291E !important; border: 1px solid #96291E !important; }');

// page description
addGlobalStyle('p#pageDescription { color: #777C80 !important; }');

// change thread icon
addGlobalStyle('span.nodeIcon { background-image: url("http://www.pixentral.com/pics/1EcJUwKESRgzSX9U1jxUr1ibIwnbXe.png") !important; }');
addGlobalStyle('div.linkNodeInfo>span.nodeIcon { background-image: url("styles/xenfoogle/xenforo/node-sprite.png") !important; }');

// change RSS icon
addGlobalStyle('a.feedIcon { background: url("http://creativity-online.com/assets/images/social/dd-rss_hover.png") !important; width: 18px !important; height: 18px !important; }');

// hide sidebar and increase the forum list width
// addGlobalStyle('div.sidebar { display: none !important; }');
// addGlobalStyle('div.mainContent { margin-right: 0px !important; }');

// forum list background-color
addGlobalStyle('div.nodeInfo.forumNodeInfo.primaryContent { background-color: '+ dG +' !important; color: #FFFFFF !important; }');
// border between subforums in the list
addGlobalStyle('.nodeList .categoryForumNodeInfo, .nodeList .forumNodeInfo, .nodeList .pageNodeInfo, .nodeList .linkNodeInfo { border-bottom: 3px solid '+ bK +'; }');

// change hover color for each forum in the list
addGlobalStyle('div.nodeInfo.forumNodeInfo.primaryContent:hover { background-color: #96291E !important; }');

// Subforum title style
addGlobalStyle('div.nodeInfo.forumNodeInfo.primaryContent>div>h3>a { color: '+ lG +' !important; font-weight: 300; }');

// "Discussions" & "Messages" strings color (counter text color under each sub-forum title)
addGlobalStyle('div.nodeStats.pairsInline>dl>dt { color: '+ gG +'; }');
// "Sub-Forums"
addGlobalStyle('span.dt { color: '+ gG +' !important; }');	//#278DAE

// color for the sidebar toggle button created by the nbr_sidebar.js script
addGlobalStyle('#sidebarToggle { color: #278DAE; }');

// Styles for linked forums (e.g. NBR Marketplace)
addGlobalStyle('div.nodeInfo.linkNodeInfo { background-color: '+ dG +' !important;}');
addGlobalStyle('div.nodeInfo.linkNodeInfo>div>h3>a { color: '+ lG +'; }');

// text color under linked forums, latest threads etc..
addGlobalStyle('body .muted, body a.muted, body .muted a { color: '+ gG +'; }');

// forum category title background ("Hardware, Software and Accessories", "Notebook Manufacturers" etc..)
addGlobalStyle('div.nodeInfo.categoryNodeInfo.categoryStrip { background-color: '+ dG +'; border-radius: 0; border-top-left-radius: 2px; border-top-right-radius: 2px; border-bottom: 3px solid '+ lG +';}'); //#1F5263

// bottom copyright text
addGlobalStyle('#waindigoCopyrightNotice>div.pageContent>span.muted { color: #FFFFFF; }');
addGlobalStyle('div#copyright { color: #FFFFFF; }');

// Latest thread container styles
addGlobalStyle('.node .nodeLastPost { background-color: '+ bK +'; border: 1px solid '+ bK +';}');
addGlobalStyle('span.lastThreadMeta abbr.DateTime, span.lastThreadMeta span.DateTime { color: '+ gG +'; }');
// No content message
addGlobalStyle('span.noMessages { color: '+ bK +'; }');

// Link hover style
addGlobalStyle('a[href]:hover { text-decoration: underline; color: '+ lG +'; }');


// change header logo and link to point to the forum's home page
var hLogo = document.getElementById('logo');
hLogo.innerHTML = '<a href="http://forum.notebookreview.com"><img src="http://forum.notebookreview.com/styles/default/xenforo/logo.png" alt="NotebookReview"></a>';

// sidebar widgets
// titlebar background
addGlobalStyle('.sidebar .section .primaryContent h3, .sidebar .section .secondaryContent h3, .profilePage .mast .section.infoBlock { background: #688A9D; }');
// background
addGlobalStyle('.sidebar .section .primaryContent, .sidebar .section .secondaryContent, .profilePage .mast .section.infoBlock { background: '+ dG +'; }');

// user widget
addGlobalStyle('div.stats>dl.pairsJustified dt, div.stats>dl.pairsJustified dd { color: #FFFFFF; }');

// Most Active Threads widget
addGlobalStyle('.secondaryContent a { color: '+ lG +'; }');
addGlobalStyle('div.userTitle abbr.DateTime { color: #FFFFFF; }');
addGlobalStyle('.sidebar .avatarList .userTitle { color: #FFFFFF; }');


// THREAD styles
// Sub-title username
addGlobalStyle('p#pageDescription>a.username { color: #4D96BA; }');
addGlobalStyle('p#pageDescription>a.username:hover { color: #96291E; }');

// Likes popup style
addGlobalStyle('.message .likesSummary { background: none !important; border: 1px solid #008000; border-radius: 0 !important; display: block; }');
// Moderator banner
addGlobalStyle('.userBanner.bannerRed { background: #008000; border: 1px solid #008000; border-radius: 0 !important; }');

// message list
addGlobalStyle('#messageList .message, .message .messageInfo { background-color: '+ dG +'; color: #FFFFFF; }');
// remove the "triangle next to posts"
addGlobalStyle('.messageUserBlock .arrow { display: none; }');
// message styles
//addGlobalStyle('.message .messageInfo { background-color: '+ dG +'; color: #F80000; }');



// hide user's avatar next to the reply area.
addGlobalStyle('div.quickReply > div.messageUserInfo { display: none; }');
// let the reply form fill its container
addGlobalStyle('form#QuickReply { margin-left: 0; }');




/*var uzr = document.getElementsByClassName("accountUsername")[0];
    uzr.innerHTML = "userImg!";
    console.log(uzr);*/



// change footer logo
setTimeout(function() {
    var footerLogoContainer = document.getElementsByClassName("ttForumFooterLogo")[0];
    var imgLogo = footerLogoContainer.children[0];
    imgLogo.src="http://forum.notebookreview.com/styles/default/xenforo/logo.png";
},500);
