function student(){
    let p1 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            // 查询的代码
            console.log("查询学生成功")
            let flag = true
            if(flag){
                let data = {
                    name: "周玲玲"
                }
                resolve(data)
            }else{
                reject(Error("读取错误"))
            }
    
        }, 1000)
    })
    return p1
}

function teacher(data){
    console.log("学生信息" + JSON.stringify(data))
    let p2 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            // 查询的代码
            
            console.log("查询老师成功")
            let flag = true
            if(flag){
                let data = {
                    name: "蒋万艺老师"
                }
                resolve(data)
            }else{
                reject(Error("读取错误"))
            }
    
        }, 1000)
    })
    return p2
}



student().then(teacher).then(function(data){
    console.log(data)
})