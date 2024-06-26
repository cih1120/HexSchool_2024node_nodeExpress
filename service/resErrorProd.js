// 自己設定的Prod錯誤
function resErrorProd(err, res) {
    if (err.isOperational) {
        return res.status(err.statusCode).json({
            message: err.message,
        })
    } else {
        // log紀錄
        console.error('出現重大錯誤', err)
        // 送出罐頭訊息
        res.status(500).json({
            status: 'error',
            message: '系統錯誤，請洽系統管理員',
        })
    }
}

module.exports = resErrorProd
