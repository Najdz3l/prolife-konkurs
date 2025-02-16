import fs from 'fs-extra';

fs.copy('./404.html', './dist/404.html')
  .then(() => console.log('404.html copied successfully!'))
  .catch(err => console.error('Error copying 404.html:', err));