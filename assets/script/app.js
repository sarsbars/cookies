'use strict';

/*----------------------------------------------------------*/
/*          Essential functions from utils.js               */
/*----------------------------------------------------------*/

function select(selector, scope = document) {
    return scope.querySelector(selector);
}
  
function listen(event, selector, callback) {
    return selector.addEventListener(event, callback);
}
  
/*----------------------------------------------------------*/
/*             Setting and Getting the Cookies              */
/*----------------------------------------------------------*/


function setCookie(name, value) {
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; path=/";
}

function getCookie(name) {
    const cookies = document.cookie.split(";");

    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split("=").map(c => c.trim());

        if (decodeURIComponent(cookieName) === name) {
            return decodeURIComponent(cookieValue);
        }
    }

    return null;
}

function setUserCookies() {
    const browser = getBrowser();
    const os = getOS();
    const screenWidth = screen.width;
    const screenHeight = screen.height;

    setCookie("browser", browser);
    setCookie("os", os);
    setCookie("screenWidth", screenWidth);
    setCookie("screenHeight", screenHeight);
}

window.onload = function() {
    setUserCookies();
};

/*----------------------------------------------------------*/
/*           Get Browser and Get Operating System           */
/*       Copied from Final Project in Javascript Basic      */
/*----------------------------------------------------------*/
const userAgent = window.navigator.userAgent;
function getBrowser() {
    let browser = 'Unknown Browser';
  
    if (userAgent.indexOf('Chrome') > -1) {
      browser = 'Google Chrome';
    } else if (userAgent.indexOf('Safari') > -1) {
      browser = 'Apple Safari';
    } else if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
      browser = 'Opera';
    } else if (userAgent.indexOf('Firefox') > -1) {
      browser = 'Mozilla Firefox';
    } else if (userAgent.indexOf('MSIE') > -1 || !!document.documentMode) {
      browser = 'Internet Explorer';
    } else if (userAgent.indexOf('Edge') > -1) {
      browser = 'Microsoft Edge';
    }
  
    return browser;
  }

  function getOS() {
    let os = "Unknown OS";
  
    if (userAgent.indexOf("Windows") !== -1) {
      os = "Windows";
    } else if (userAgent.indexOf("Macintosh") !== -1 || userAgent.indexOf("Mac OS X") !== -1) {
      os = "Mac OS";
    } else if (userAgent.indexOf("Linux") !== -1) {
      os = "Linux";
    } else if (userAgent.indexOf("Android") !== -1) {
      os = "Android";
    } else if (userAgent.indexOf("iP") !== -1) {
      os = "iOS";
    }
    return os;
  }

/*----------------------------------------------------------*/
/*               Dialog Box Functionality                   */
/*----------------------------------------------------------*/

const settingsDialog = select('.settings-dialog');
const cookiesDialog = select('.cookies-dialog');
const accept = select('.accept-button');
const settings = select('.settings-button');
const save = select('.save-button');

listen('click', accept, () => {
    cookiesDialog.close();
});

listen('click', settings, () => {
    cookiesDialog.close();
    settingsDialog.showModal();
});

listen('click', save, () => {
    settingsDialog.close();
});

function openDialog() {
    cookiesDialog.showModal();
}

setTimeout(openDialog, 2000);