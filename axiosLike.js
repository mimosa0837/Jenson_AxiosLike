function axios({
    url,
    method = 'GET',
    params = {},
    data = {}
}) {
    return new Promise((resolve, reject) => {
        // method可能是小写的，进行处理
        method = method.toUpperCase()
        // 处理query参数
        let queryString = []
        Object.keys(params).forEach(key => {
            queryString.push(`${key}=${params[key]}`)
        })
        queryString.join('&')
        url += '?' + queryString
        // 执行异步ajax请求
        // 创建xhr对象
        const request = new XMLHttpRequest()
        // 打开连接，初始化请求
        request.open(method, url, true)
        // 发送请求
        if (method === 'GET' || method === 'DELETE') {
            request.send()
        } else if (method === "POST" || method === 'PUT') {
            // 发送JSON格式必须加请求头
            // 告诉服务器请求体格式是JSON
            request.setRequestHeader('Content-Type', 'application/json;charset=utf-8')
            request.send(JSON.stringify(data))
        }
        // 绑定状态监听
        request.onreadystatechange = function () {
            if (request.readyState !== 4) {
                return
            }
            // 如果响应状态码[200,300)之前代表成功，否则失败
            const {
                status,
                statusText
            } = request
            if (status >= 200 && status <= 299) {
                // 准备结果数据对象response
                const response = {
                    data: JSON.parse(request.response),
                    status,
                    statusText
                }
                // 如果请求成功了，调用resolve
                resolve(response)
            } else {
                // 如果请求失败了，调用reject
                reject(new Error('request error status is ' + status))
            }



        }

    })
}