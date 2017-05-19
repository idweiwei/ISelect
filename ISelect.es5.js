/*
* ES5  面向对象 实现
* */

var iSelect = function (cls,callback) {
    this.wrap = document.querySelector(cls);
    this.options = this.wrap.querySelector('ul');
    this.option = this.wrap.querySelectorAll('li');
    this.selected = this.wrap.querySelector('.selected');
    this.callback = callback;
    this.bindEvent();
    this.createEvent();
};
iSelect.prototype = {
    createEvent:function () {
        this.ev =document.createEvent('UIEvent');
        this.ev.initEvent('selected',true,true);
    },
    bindEvent:function () {
        this.selected.addEventListener('click',function (e) {
            e.stopPropagation();
            this.wrap.className+=' active';
            this.options.style.display = 'block';
        }.bind(this),false);
        this.options.addEventListener('click',function (e) {
            var el = e.target;
            //e.stopPropagation();

            if(el.tagName.toLowerCase() == 'li'){
                this.options.style.display = '';
                this.wrap.className= this.wrap.className.replace(/\s+active/,'');
                var selectedItem = el.innerHTML;
                var oldInfo = this.selected.innerHTML;
                if(selectedItem != oldInfo){
                    this.selected.innerHTML = selectedItem;
                    //触发事件 给指定元素触发事件，参数为定义好的事件
                    this.wrap.dispatchEvent(this.ev);
                    this.callback && this.callback(selectedItem)
                }
            }

        }.bind(this),false);
        document.body.addEventListener('click',function () {
            this.options.style.display = '';
            this.wrap.className= this.wrap.className.replace(/\s+active/,'');
        }.bind(this),false);
    }
};