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

function fontcolor() {
	var color = prompt("Enter a hexadecimal code or name of color","")
	editor.document.execCommand('forecolor',false,color);
}

function highlight() {
	editor.document.execCommand('backcolor',false,"yellow");
}

function link() {
	var link = prompt("Enter a link","http://")
	editor.document.execCommand('createlink',false,link);
}

function unlink() {
	editor.document.execCommand('unlink',false,null);
	
}

/*
function insertImage() {
    //location.href = 'phpindex.html';
	<a href="http://localhost/file_browser/phpindex.html" 
  target="popup" 
  onclick="window.open('http://localhost/file_browser/phpindex.html','popup','width=600,height=600'); return false;">
    img
</a>
	
}
*/	
	
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
document.getElementById("textarea").value = windowframes['editor'].document.body.innerHTML;
document.getElementById("rtf").submit();
}

$(function() {
     $('#myForm').ajaxForm({
			beforeSend:function(){
				$(".progress").show();	
			},
			uploadProgress:function(event,position,total,percentComplete){
				console.log( "uplod");
				$(".progress-bar").width(percentComplete+'%');
				$(".sr-only").html(percentComplete+'%');
			},
			success:function(){
				//$(".progress").hide();	
				 $("#bar").width('100%');
                 $("#percent").html('100%');
			},
			complete:function(response){
				$(".image").html("<img src='"+response.responseText+"'width='100%'/>" );
				
			}
		 });		
		$(".progress").hide();			
});
