* 安装jest

`yarn add --dev jest`

`npm install --save-dev jest`

* 添加配置文件

`jest --init`

* 使用babel

需要添加 babel-jest 和 regenerator-runtime

`yarn add --dev babel-jest babel-core regenerator-runtime`

* 使用ES6 

`yarn add babel-preset-env --dev`

如果使用了es6语法，比如 [sum文件中](src/pure-function-test/sum.js) 使用了es6模块，但是没有配置babel，会报错，这时在babelrc文件中配置即可，jest会自动使用，如果不是你想要的，那么可以在jest配置中加上transfrom:{}


* 测试文件

默认情况下，Jest 将会递归的找到整个工程里所有 .spec.js 或 .test.js 扩展名的文件

testRegex 可以配置此属性
