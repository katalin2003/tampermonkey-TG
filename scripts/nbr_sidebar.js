// ==UserScript==
// @name         NBR_sidebar
// @version      1.2
// @description  show hide side menu on http://forum.notebookreview.com
// @author       katalin_2003
// @include      http://forum.notebookreview.com/*
// @match        http://forum.notebookreview.com/
// @grant        none
// ==/UserScript==

// Let's make it easier to add global styles
function addStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

// change font style in messages
//addStyle('.messageText { font-family: sans-serif !important; }');
addStyle('* { font-family: sans-serif !important; }');

// reduce the min-height of messages to gain some vertical space in the case of small messages.
// or you can get the size of .messageUserInfo and use that value as the min-height for messages, though the former might not always have a fixed height for all users.
addStyle('.messageContent { min-height: 2em !important; }');

// add the missing right border..OCD much :)
addStyle('ol#forums { border-right: 1px solid #7B7B7B !important; }');
addStyle('div.sectionMain { border-right: 1px solid #7B7B7B !important; }');

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// Toggle visibility function
function toggle(obj) {
    //  var el = document.getElementById(obj);
    var el = document.getElementsByClassName(obj)[0],
        mainContent = document.getElementsByClassName('mainContent')[0];
    if ( el.style.display != 'none' ) {
        el.style.display = 'none';
        sideTgl.innerHTML = '<<';
        mainContent.style.width = '100%';
        
        var elWidth = el.offsetWidth,
            mainContentWidth = mainContent.offsetWidth;
        console.log('katalin_2003: sidebar hidden');
        console.log('katalin_2003: mainContent width is: ' + mainContentWidth + 'px');
    }
    else {
        el.style.display = '';
        sideTgl.innerHTML = '>>';
        
        var elWidth = el.offsetWidth,
            mainContentWidth = mainContent.offsetWidth;
        mainContent.style.width = (mainContentWidth - elWidth-10) +'px';
        
        console.log('katalin_2003: sidebar visible');
        console.log('katalin_2003: mainContent width is: ' + (mainContentWidth-elWidth-10) + 'px');
    }
}

var sideTgl = document.createElement('div');
sideTgl.setAttribute('id', "sidebarToggle");
sideTgl.style.cssFloat = 'right';
sideTgl.style.color = '#000000';

sideTgl.innerHTML = ">>";
//var div = document.getElementsByClassName("blockLinksList")[0];
var div = document.getElementsByClassName("breadBoxTop")[0];
insertAfter(div, sideTgl);

addStyle('div#sidebarToggle { border: 1px solid #7B7B7B; }');
addStyle('div#sidebarToggle { border-radius: 2px; }');
addStyle('div#sidebarToggle { padding: 1px 10px; }');
addStyle('div#sidebarToggle { margin-top: 3px; }');
//addStyle('div#sidebarToggle { margin-right: 20px; }');
addStyle('div#sidebarToggle:hover { cursor: pointer; }');
addStyle('div#sidebarToggle:hover { background-color: #F0F0F0; }');

var sidebarToggle = document.getElementById('sidebarToggle');
sidebarToggle.setAttribute('title' , 'Toggle sidebar visibility');

// Hide the sidebar by default
(function() {
    toggle('sidebar');
    console.log('hidden');
    return false;  
})();

// Toggle sidebar's visibility on click
sidebarToggle.onclick = function () {
    toggle('sidebar');
    return false;
}

// remove "Latest" string in front of thread titles
addStyle('span.lastThreadTitle > span { display:none; }');
// increase the width of the element containig the latest thread in a sub forum
addStyle('.node .nodeLastPost { width: 30%; }');
// push the nodeControl icons (RSS etc..) to the left to compensate
addStyle('.node .nodeControls { right: 32%; }');
