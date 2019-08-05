let ENV
// 开发环境
if (process.env.NODE_ENV === 'development') {
    ENV = 'dev'
// 编译环境
} else {
    // 测试环境
    if (process.env.type === 'test') {
        ENV = 'test'
    // 正式环境
    } else {
        ENV = 'prod'
    }
}
export default{
	ENV
}