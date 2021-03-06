var CONSTANTS = {
	ENABLE: 'Enable',
	DISABLE: 'Disable',
	HIDDEN:'Hidden',
	SHOW:'Show'
};

function setItem(key,value){
    window.localStorage.removeItem(key);
    window.localStorage.setItem(key,value);
}

function getItem(key){
    var value;
    try{
        value = window.localStorage.getItem(key);
    }catch (e) {
        value = 'null';
    }
    return value;
}

// Listeners
chrome.extension.onMessage.addListener(
	function(request, sender, sendResponse) {
		switch(request.name) {
		case 'setOptions':
			// request from the content script to set the options.
			//localStorage['enableStatus'] = enableStatus;
			localStorage.setItem('enableStatus', request.status);
			break;
		case 'getOptions':
			// request from the content script to get the options.
			sendResponse({
				enableDisable: localStorage.enableStatus
			});
			break;
		case 'setIndex':
			localStorage.setItem('index', request.status);
			break;
		case 'getIndex':
			sendResponse({
				index: localStorage.index
			});
			break;
			case 'setQiPao':
				localStorage.setItem('qipao', request.status);
				break;
			case 'getQiPao':
				sendResponse({
					showHidden: localStorage.qipao
				});
				break;
		default:
			sendResponse({});
		}
	}
);
