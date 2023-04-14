const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000; // 网站的端口号
const PUBLIC_DIR = path.join(__dirname, '/'); // 前端页面所在的目录

// 创建一个 HTTP 服务器
const server = http.createServer((req, res) => {
  const url = req.url;
  let filePath = path.join(PUBLIC_DIR, url);

  // 如果访问根目录，则默认显示 index.html 页面
  if (url === '/') {
    filePath = path.join(PUBLIC_DIR, 'index.html');
  }

  // 检查文件是否存在
  fs.access(filePath, (err) => {
    if (err) {
      res.statusCode = 404;
      res.end('404 - File not found');
      return;
    }

    // 读取文件并返回给客户端
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('500 - Internal Server Error');
        return;
      }

      // 根据文件类型设置响应头
      let contentType = 'text/html';
      if (filePath.endsWith('.js')) {
        contentType = 'application/javascript';
      } else if (filePath.endsWith('.css')) {
        contentType = 'text/css';
      }
      res.setHeader('Content-Type', contentType);
      res.statusCode = 200;
      res.end(data);
    });
  });
});

// 启动服务器
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
