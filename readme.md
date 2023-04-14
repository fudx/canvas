### 这是canvas处理的方法


### drawImg的几个参数
img
x,
y,
图片的宽,
图片的高,
裁剪的x,
裁剪的y,
放大的宽,
放大的高

### 目标的炸开 

### 碰撞检测
```
矩形碰撞检测：对于两个矩形对象，只需要检查它们的 x、y 坐标和宽度、高度是否重叠即可。
javascript
Copy code
function isRectCollision(obj1, obj2) {
  return (
    obj1.x < obj2.x + obj2.width &&
    obj1.x + obj1.width > obj2.x &&
    obj1.y < obj2.y + obj2.height &&
    obj1.y + obj1.height > obj2.y
  );
}
```

### 图片的加载
