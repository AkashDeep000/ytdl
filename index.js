//const fs = require('fs');
const ytdl = require('ytdl-core');
const express = require('express');
const app = express();

// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above


  
  app.get('/', async function (req, res) {
    
    let id = req.query.id;
    if (!id) {
      res.send('No Video ID')
      
    }
    else if (id) {
      if (id != undefined) {
        
        const head = {
            
            'Content-Type': 'video/mp4',
            'Cache-Control': 'max-age=2592000'
        };
        
          const video = await ytdl('https://www.youtube.com/watch?v=' + id
          //, {quality: '133'}
          )
        res.writeHead(200, head);
        video.pipe(res);
      }else{
        
      }
      res.send('Invalid Video ID')
    
    }
  
    
});
  
  app.listen(4000)