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
      const head = {
            
            'Content-Type': 'video/mp4',
        };
        res.writeHead(200, head);
 ytdl('https://www.youtube.com/watch?v=' + id, {quality: 'lowest'}).pipe(res);
    
    }
  
    
});
  
  app.listen(3000)