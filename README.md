# 文档库

# 使用docusaurus做文档网站

https://docusaurus.io/zh-CN/docs

# 在线预览
http://minglie3000.vaiwan.com/docs/intro

# 目录
_category_.json 是目录配置文件

目录顺序 position 数字越小越靠前

目录标题 label 

_category_.json
``` json
{
  "label": "威程001",
  "position": 2
}

```


##  文档配置
sidebar_position 数字越小越靠前
``` sh
---
title: 我是文档标题
sidebar_position: 1
---
```

##  对应关系
![image.png](https://langjie.oss-cn-hangzhou.aliyuncs.com/minglie/img/doc.png)



## push代码后自动部署
github 配置webhook服务地址

![image.png](https://langjie.oss-cn-hangzhou.aliyuncs.com/minglie/img/webhook.png)

## 仓库发生变化后webhook服务里,执行部署脚本
``` js
M=require("ming_node")
app=M.server()
app.listen(8888)
app.post("langjiedoc/push",async (req,res)=>{
    console.log(req.url)
    console.log("文档被修改,重新部署中")
    let r=await M.exec("D:\\workspace\\langjie\\langjie-doc\\bash.bat")
    console.log("已重新部署")
    console.log(r)
    res.send("ok")
})
```

## 参考文档
https://www.misterma.com/archives/872/