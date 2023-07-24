#!/usr/bin/env node

const prompts = require('prompts');
const schema = require('./schema');
const renderTypescriptConfig = require('./typescript/renderTypescriptConfig');


(async () => {
    const response = await prompts(schema);
    // 生成配置
    if (response.needsTypeScript) {
        renderTypescriptConfig()
    }
    // 添加依赖


    // 添加脚本


    // 下载依赖


    // 启动项目
})();
