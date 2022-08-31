# my-text-box

## 原生js文本框输出特殊符号出现下拉菜单显示  
## 效果图  
![未命名 ‑ Made with FlexClip](https://user-images.githubusercontent.com/99531384/187633153-f9b4d6ce-ba06-4469-b4e3-295fa176f24c.gif)

## 实现思路
~~~
关于光标定位的问题
在文本框的光标无法定位的，所以打算克隆一份一模一样的div和放在里面的两span元素，实时的监听文本框所输出的值复制给自己的第一个span，  
第二个span添加一个假的光标运用inline元素的特性可以计算真光标的位置。
由于我们知道了光标的位置，我就可以将下拉菜单实时跟踪光标的位置。
关于显示和隐藏的问题
我是截取光标后面的值进行判断，判断当特殊符号出现在这个字符串后的索引值跟字符串的长度减一相等就显示，否则就隐藏
~~~
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
        textIdName : '#editor',
        textClassName : 'editor',
        textwidth : '500px',
        textheight : '200px',
        textbackgroundColor : 'White',
        textfontSize: '20px',
        textcolor : 'black',
        
        //track是跟踪文本框的光标位置的下拉菜单，track里面是可更改的style参数
        trackClassName: '.track',
        trackwidth : '50px',
        trackheight : '20px',
        trackbackgroundColor : 'red',
        trackfontSize: '20px',
        trackcolor : 'black',

        //判断是否有特殊符号，显示菜单
        special : '@',


    }
~~~
