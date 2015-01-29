// ==UserScript==
// @name         nbr_dark-theme.js
// @author       katalin_2003
// @version      0.2
// @downloadURL  https://raw.githubusercontent.com/katalin2003/tampermonkey-TG/master/scripts/themes/NBR_xenFoogle-dark.js
// @description  theme script for http://forum.notebookreview.com/ based on the NBR_xenFoogle theme
// @include      http://forum.notebookreview.com/*
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('html { background: url("http://www.vbstyles.com/vbstyles_images/header-bg.png") repeat scroll !important; }');
addGlobalStyle('div.navTabs { background-color: #1F5263 !important; background-image: none !important; }');
addGlobalStyle('a.navLink:hover { background-color: #96291E !important; }');
addGlobalStyle('div.pageContent { background: url("http://www.vbstyles.com/vbstyles_images/header-bg.png") repeat scroll !important; color: #FFFFFF !important; border: 0px !important; padding-right: 0px !important; padding-left: 0px !important; }');
addGlobalStyle('div.tabLinks.forumsTabLinks { border: 0px !important; }');
addGlobalStyle('ul.blockLinksList { margin-left: 0px !important; }');
addGlobalStyle('ol#forums { background-color: #000 !important; border: 0px !important; padding: 1px !important; }');
addGlobalStyle('fieldset.breadcrumb { background-color: #1F5263 !important; border: 1px solid #000000 !important; }');

// login bar border #loginBar
addGlobalStyle('div#loginBar { border: 0px !important; }');

// breadcrumbs navigation
addGlobalStyle('span.arrow { background: rgba(0, 0, 0, 0) url("styles/xenfoogle/xenforo/xenforo-ui-sprite.png") no-repeat -140px 0.1px !important; transform:rotate(270deg) !important; }');
addGlobalStyle('.crust:first-child>a.crumb { color: #FFFFFF !important; }');
addGlobalStyle('.crust>a.crumb { color: #FFFFFF !important; }');
addGlobalStyle('.crust:last-child>a.crumb { color: #2C8DAE !important; }');

// search input and buttons
addGlobalStyle('input#QuickSearchQuery { background-color: #2C2C2C !important; }');
addGlobalStyle('input#QuickSearchQuery:focus { background-image: none !important; }');
addGlobalStyle('input[value="Search"] { background-color: #96291E !important; border: 1px solid #96291E !important; }');
addGlobalStyle('a.moreOptions { background-color: #96291E !important; border: 1px solid #96291E !important; }');
addGlobalStyle('a.NoPopupGadget { background-color: #96291E !important; border: 1px solid #96291E !important; }');

// page description
addGlobalStyle('p#pageDescription { color: #FFFFFF !important; }');

// change thread icon
addGlobalStyle('span.nodeIcon { background-image: url("http://www.pixentral.com/pics/1EcJUwKESRgzSX9U1jxUr1ibIwnbXe.png") !important; }');
addGlobalStyle('div.linkNodeInfo>span.nodeIcon { background-image: url("styles/xenfoogle/xenforo/node-sprite.png") !important; }');

// change RSS icon
addGlobalStyle('a.feedIcon { background: url("http://www.damonhayhow.com/wp-content/uploads/2013/07/rss-hover.png") !important; }');

// hide sidebar and increase the forum list width
// addGlobalStyle('div.sidebar { display: none !important; }');
// addGlobalStyle('div.mainContent { margin-right: 0px !important; }');

// forum list background-color
addGlobalStyle('div.nodeInfo.forumNodeInfo.primaryContent { background-color: #2C2C2C !important; color: #FFFFFF !important; }');

// change hover color for each forum in the list
addGlobalStyle('div.nodeInfo.forumNodeInfo.primaryContent:hover { background-color: #96291E !important; }');

// Subforum title style
addGlobalStyle('div.nodeInfo.forumNodeInfo.primaryContent>div>h3>a { color: #FFFFFF !important; font-weight: 300; }');

// "Discussions" & "Messages" strings color (counter text color under each sub-forum title)
addGlobalStyle('div.nodeStats.pairsInline>dl>dt { color: #278DAE !important; }');
addGlobalStyle('span.dt { color: #278DAE !important; }');

// color for the sidebar toggle button created by the nbr_sidebar.js script
addGlobalStyle('#sidebarToggle { color: #278DAE; }');

// Styles for linked forums (e.g. NBR Marketplace)
addGlobalStyle('div.nodeInfo.linkNodeInfo { background-color: #2C2C2C !important;}');
addGlobalStyle('div.nodeInfo.linkNodeInfo>div>h3>a { color: #FFFFFF !important; }');

// text color under linked forums, latest threads etc..
addGlobalStyle('body .muted, body a.muted, body .muted a { color: #FFFFFF; }');

// forum category title background ("Hardware, Software and Accessories", "Notebook Manufacturers" etc..)
addGlobalStyle('div.nodeInfo.categoryNodeInfo.categoryStrip { background-color: #1F5263 !important; }');

// bottom copyright text
addGlobalStyle('span.muted { color: #FFFFFF !important; }');
addGlobalStyle('div#copyright { color: #FFFFFF !important; }');

// change header logo and link to point to the forum's home page
var hLogo = document.getElementById('logo');
hLogo.innerHTML = '<a href="http://forum.notebookreview.com"><img src="http://forum.notebookreview.com/styles/default/xenforo/logo.png" alt="NotebookReview"></a>';


// THREAD styles
// message list
addGlobalStyle('#messageList .message, .message .messageInfo { background-color: #2C2C2C; color: #FFFFFF; }');
// remove the "triangle next to posts"
addGlobalStyle('.messageUserBlock .arrow { display: none; }');
// message styles
//addGlobalStyle('.message .messageInfo { background-color: #2C2C2C; color: #F80000; }');


// change footer logo
setTimeout(function() {
    var footerLogoContainer = document.getElementsByClassName("ttForumFooterLogo")[0];
    var imgLogo = footerLogoContainer.children[0];
    imgLogo.src="http://forum.notebookreview.com/styles/default/xenforo/logo.png";
},500);
