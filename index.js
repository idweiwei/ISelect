import ISelect from './ISelect.es6';


//可以通过回调来获取选择项
new ISelect('.i-select',function (data) {
    console.log('您选择的信息是：'+data);
});

//可以通过事件监听来获取选择项
var el = document.querySelector('.i-select');
el.addEventListener('selected',function (e) {
    console.log('\n'+e.value);
},false);