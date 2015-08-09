function iFrameOn() {
	editor.document.designMode = 'on';
}

function bold() {
	editor.document.execCommand('bold',false,null);
}

function italic() {
	editor.document.execCommand('italic',false,null);
}

function underline() {
	editor.document.execCommand('underline',false,null);
}

function fontsize() {
	var size = prompt("Enter a size(1-7)","")
	editor.document.execCommand('fontsize',false,size);
}

function undo() {
	editor.document.execCommand('undo',false,null);
}

function redo() {
	editor.document.execCommand('redo',false,null);
}

function link() {
	var link = prompt("Enter a link","http://")
	editor.document.execCommand('createlink',false,link);
}

function unlink() {
	editor.document.execCommand('unlink',false,null);
	
}
	
function unOrderedList() {
	editor.document.execCommand('insertunorderedlist',false,null);
}	

function orderedList() {
	editor.document.execCommand('insertorderedlist',false,null);
}


function leftAlign() {
	editor.document.execCommand('justifyleft',false,null);
}

function centerAlign() {
	editor.document.execCommand('justifycenter',false,null);
}

function rightAlign() {
	editor.document.execCommand('justifyright',false,null);
}

function formsubmit() { 
	document.getElementById("textarea").value = window.frames['editor'].document.body.innerHTML;
	var x = window.frames['editor'].document.body.innerHTML;
	alert(x); 
}
