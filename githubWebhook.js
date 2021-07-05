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


app.get("test",async (req,res)=>{
    console.log(req.url)
    console.log("文档被修改")
    let r=await M.exec("D:\\workspace\\langjie\\langjie-doc\\bash.bat")
    console.log("已重新部署")
    console.log(r)
    res.send(r)
})

