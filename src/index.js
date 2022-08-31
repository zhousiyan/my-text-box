class InputBox{
    config = {

        textIdName : '#editor',
        textClassName : 'editor',
        textwidth : '500px',
        textheight : '200px',
        textbackgroundColor : 'White',
        textfontSize: '20px',
        textcolor : 'black',


        trackClassName: '.track',
        trackwidth : '50px',
        trackheight : '20px',
        trackfontSize: '20px',
        trackcolor : 'black',

        special : '@',


    }
    // 监听事件
    monitor () {
        this.editor = document.querySelector(this.config.textIdName);
        this.track = document.querySelector(this.config.trackClassName);
        console.log(this.editor.value);

        this.css();
        this.ul = document.querySelector('ul');
        this.li = document.querySelectorAll('li');
        this.box = document.querySelector('.box');

        this.index = 0;

        this.editor.addEventListener('click', (event) =>{
            this.outputpos(event);
        })

        this.editor.addEventListener('input', (event) =>{
            this.outputpos(event);
        })

        this.editor.addEventListener('blur',() => {
            this.track.style.display = 'none';
            this.ul.style.display = 'none';
        })


        this.ul.addEventListener('click', (event) =>{
            let t = event.target.dataset.index;
            console.log(t);
            //由冒泡点击的增加的
            this.add(t);
            editor.focus();
        })


        this.editor.addEventListener('keydown',(event) => {
            let keycode = event.keyCode;
            if (this.track.style.display == 'block' && this.ul.style.display == 'block') {
                    if (keycode == 38) {
                        event.returnValue = false;
                        console.log('up');
                        this.index -= 1;
                    if (this.index == -1) {this.index = this.li.length - 1};
                    this.stylemove(this.li);
                }
                    else if (keycode == 40) {
                        event.returnValue = false;
                        console.log('down');
                        this.index += 1;
                        if (this.index == this.li.length) {this.index = 0};
                        this.stylemove(this.li);
                }

                else if (keycode == 13) {
                    event.returnValue = false;
                    var w = this.li[this.index].dataset.index
                    this.add(w);
                    event.returnValue = true;
                }
            }
            else {
                event.returnValue = true;
            }
            
        })
    }


    css(){
        this.editor.style.width = this.config.textwidth;
        this.editor.style.height = this.config.textheight;
        this.editor.style.backgroundColor = this.config.textbackgroundColor;
        this.editor.style.fontSize = this.config.textfontSize;
        this.editor.style.color = this.config.textcolor;

        this.track.style.width = this.config.trackwidth;
        this.track.style.height = this.config.trackheight;
        this.track.style.fontSize = this.config.trackfontSize;
        this.track.style.color = this.config.trackcolor;
    }
    // 添加插入文字
    add(v) {
        console.log(v);
        this.Front = this.editor.value.substring(0,this.editor.selectionStart);
        this.Behind = this.editor.value.substring(this.editor.selectionStart);

        this.editor.value = this.Front + v + this.Behind;
        // console.log(this.editor.value);
        this.selectIndex = this.Front.length + v.length;
        this.editor.setSelectionRange(this.selectIndex, this.selectIndex);
    }

    // 判断判断是否特殊符号，然后是否显示
    symbol(string){
        if (string != '') {
            let intercept = string.substring(0, this.editor.selectionStart);
            if (intercept.lastIndexOf(this.config.special) == intercept.length-1) {
                this.track.style.display = 'block';
                this.ul.style.display = 'block';
                console.log('ok');
                }
                else{
                this.track.style.display = 'none';
                this.ul.style.display = 'none';
                console.log('no');
                }
        }

    }

    // 样式出现删除添加classname
    stylemove(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove('abc');
        }
        arr[this.index].classList.add('abc');
    }
    //输出定位
    outputpos(event) {
        let tag =  event.target;
        // console.log(this.editor);
        let intercept = this.editor.value;
        //判断输出的字段

        this.symbol(intercept);

    
        let pos =  this.getlocation(tag);
        this.track.style.left = pos.left + 'px';
        this.track.style.top = pos.top +'px';
    }

    // 克隆元素
    getlocation(location) {
    this.clonediv = document.querySelector('#clonediv');
    this.clonetset = document.querySelector('#clonetset');
    this.clonefourt = document.querySelector('#clonefourt');

    // console.log(clonediv);
    if (this.clonediv == null) {
        const cssText = 'word-wrap:break-word;word-break:break-all';

        this.tset = [ '<div id="clonediv" class="editor">',
            '<span id="clonetset" style=' + cssText + '></span>',
            '<span id="clonefourt" style="display:inline-block;' + cssText +'">|</span>',
        '</div>',]

        document.body.insertAdjacentHTML('beforeend',this.tset.join('\n'));

        this.clonediv = document.querySelector('#clonediv');
        this.clonetset = document.querySelector('#clonetset');
        this.clonefourt = document.querySelector('#clonefourt');
    }


    // console.log(clonetset);
    this.clonetset.innerHTML = location.value.substring(0, location.selectionStart)
    .replace(/\n/g, '<br/>')
    .replace(/ /g, '<span style="white-space:pre-wrap;"> </span>');


    this.clonedivclient = clonediv.getBoundingClientRect();
    this.clonefourtclient = clonefourt.getBoundingClientRect();
    return {
        left : this.clonefourtclient.left,
        top : this.clonefourtclient.top - this.clonedivclient.top + this.clonefourtclient.height
    }
}


    constructor(settings) {
        for (const key in settings) {
            const value = settings[key];
            this.config[key] = value;
        }

        this.monitor();
    }
}