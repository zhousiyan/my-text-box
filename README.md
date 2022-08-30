# my-text-box

## 原生js文本下拉菜单显示
## 实现思路
## 使用步骤  
1. 编写HTML  
~~~html
<form class="box">
        <textarea id="editor" class="editor"></textarea>
        <div class="track"></div>  
~~~
2. 引入css  
~~~html
    <link rel="stylesheet" href="./index.css">
~~~
3. 引入js
~~~html
<script src="./index.js"></script>
~~~

4. 默认参数
~~~js
config = {
        //tset是文本框，tset里面是可更改的style参数
        text : {
            IdName : '#editor',
            ClassName : 'editor',
            width : '500px',
            height : '200px',
            backgroundColor : 'White',
            fontSize: '20px',
            color : 'black',

            
        },
        //track是跟踪文本框的光标位置的下拉菜单，track里面是可更改的style参数
        track : {
            ClassName: '.track',
            width : '50px',
            height : '20px',
            backgroundColor : 'red',
            fontSize: '20px',
            color : 'black',

        },
        //判断是否有特殊符号，显示菜单
        special : '@',


    }
~~~
