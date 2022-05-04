const yt=require("ytdl-core")

chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
  // search for ifram or video or embed tags
  let video_tags=document.querySelectorAll("iframe");

  // respond to request
  if(request.cmd=="download"){
     ////////////
          var URL="https://www.youtube.com/watch?v=PNtFSVU-YTI";
          const video= yt(URL,
              // Optional arguments passed to youtube-dl.
              ['--format=18'],);
              // Will be called when the download starts.
              video.on('info', function(info) {
                 
               console.log('Download started')
               console.log('filename: ' + info._filename)
               console.log('size: ' + info.size)
              })
     // sendResponse({cmd:"href",src:video_tags[0].currentSrc});
    //  sendResponse({cmd:"href",src:video_tags[0].baseURI});
  }  
  else if(request.cmd=="streaming"){
     
      console.log(request);
  } else if(request.cmd=="log"){    
      console.log("---------------------------------");
      console.log(request);
      console.log("Video tags found :"+ video_tags.length);
      console.log(video_tags);
      console.log("---------------------------------");
  
  }
  

});
