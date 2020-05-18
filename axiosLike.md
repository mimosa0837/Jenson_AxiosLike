### axiosLike

#### 启动json-server模拟数据接口

- 安装json-server

```
npm install -g json-server
```

- 模拟数据接口

```
filename:db.json
{
  "posts": [
    {
      "title": "json-server100++",
      "author": "typicode100++",
      "id": 1
    },
    {
      "title": "json-server..",
      "author": "typicode...",
      "id": 2
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "some comment",
      "postId": 1
    }
  ],
  "profile": {
    "name": "typicode"
  }
}
```

- 启动服务器

```
json-server --watch db.json
// 默认端口为3000
```

- 向服务器发送GET/POST/PUT/DELETE请求

  