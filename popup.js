// attach event listensers
$("#download").on("click",function(){
  try {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      
      chrome.tabs.sendMessage(tabs[0].id,{cmd:"download",content:"log message from show_info"}, function(response) {
     
          
      });
      
    })
  }
  catch (e) {
    console.warn(e);
  }   
  
  });
  