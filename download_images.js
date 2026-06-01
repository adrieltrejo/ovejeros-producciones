const https = require('https');
const fs = require('fs');

function downloadImage(url, filename) {
  https.get(url, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      downloadImage(res.headers.location, filename); // Follow redirects
      return;
    }
    const file = fs.createWriteStream(filename);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}: ${err.message}`);
  });
}

downloadImage("https://picsum.photos/1080/1350?random=1", "public/images/portafolio/proceso_produccion.jpg");
downloadImage("https://picsum.photos/1080/1350?random=2", "public/images/portafolio/proceso_post.jpg");
