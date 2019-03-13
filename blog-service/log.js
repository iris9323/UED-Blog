const log4js = require('log4js')

log4js.configure({
    replaceConsole: true,
    appenders: {
        stdout: { //控制台输出
            type: 'stdout'
        },
        req: { //log日志
            type: 'dateFile',
            filename: 'logs/reqlog/req',
            pattern: 'yyyy-MM-dd.log',
            alwaysIncludePattern: true
        },
        err: { //错误日志
            type: 'dateFile',
            filename: 'logs/errlog/err',
            pattern: 'yyyy-MM-dd.log',
            alwaysIncludePattern: true
        }
    },
    categories: {
        default: {
            appenders: ['stdout', 'req'],
            level: 'debug'
        },
        err: {
            appenders: ['stdout', 'err'],
            level: 'error'
        }
    }
})


exports.info = function(info) { //name取categories项
    return log4js.getLogger('default').info(info);
}

exports.error = function(info) { //name取categories项
    return log4js.getLogger('err').error(info);
}

exports.useLogger = function(app, logger) { //用来与express结合
    app.use(log4js.connectLogger(logger || log4js.getLogger('default'), {
        format: '[:remote-addr :method :url :status :response-timems][:referrer HTTP/:http-version :user-agent]' //自定义输出格式
    }))
}