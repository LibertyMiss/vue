//   首先引入一个vue.js文件
//   new出一个Vue实例
// v-开头的都被称为vue内置指令
// 差值表达式
{
    {
        msg
    }
}
// 1.渲染文本
v - text
// 2.渲染html
v - html
// 3。解决差值表达式问题
v - cloak

步骤: 1. 先给标签添加v - cloak
eg: < p v - cloak > < /p>
2. 在style标签中给它设置为display: none;
eg: [v - cloak] {
    background - color: #ff3040;
}
注: v - text 和v - html 会将标签内部的内容全部替换 {
    {
        msg
    }
}
是直接插入
let vm = new Vue({
    el: '#app', //选择器
    data: { //data对应的是Model层
        msg: '朱程王八蛋'
    }
})

4. 绑定属性
// 可以自定义属性,和标签本身有的属性
{ /* < input type = "text" value = ""> */ }

注: 以上用到的所有指令用到的msg都需要放到Vue实例的data属性中

5. 绑定事件
v - on <
    button value = "按钮"
v - on: click = 'show' > < /button>
let vm = new Vue({
    el: '#app', //选择器
    data: { //data对应的是Model层
        msg: '朱程王八蛋'
    },
    methods: {
        show: function () {
            alert('朱程傻逼')
        },
        hide: () => {
            alert('王超傻逼')
        }
    }
})

注: data和methods里面的所有对象和方法都会挂载到新创建的vue实例上,
    在methods 中, 里面的方法this指向都要指给新创建的vue实例, 可以用es6的语法
箭头函数解决, 使用data里面的数据要用, this.xxx

6. 事件修饰符

{ /* eg: < div @click.stop = ""> < /div> */ }
1..stop
阻止冒泡
2..prevent
阻止默认行为
3..self
只有点击自己的时候才会触发事件, 其他情况都不会触发(例如点击了子元素,
    默认情况下会冒泡到当前元素,
    如果加了self事件修饰符则不会触发到当前元素的事件)
4..once
只触发一次
5..capture
事件捕获

注: 多个事件修饰符可以添加给同一个事件
例如: @click.one.prevent, 表示点击事件支触发一次
第二次既不会阻止默认事件, 也不会触发点击事件

7. v - model
在vue中, 能够实现数据绑定的只有v - model, 只能绑定在表单元素身上,
    不需要像v - bind那样指定要绑定的属性, 因为它只能绑定表单元素的value属性

注: 使用中, 必须要在data里面申明变量

8. 通过v - bind绑定class属性
1. 以前的使用方式, 不使用v - bind绑定, 适用于类样式固定的场景
2. 个别类样式需要根据标识符切换,
如: active, 推荐用v - bind数组的方式绑定 <
    div: class = "['red',{active:true}]" > < /div>
3. 很多类样式都需要根据标识符切换, 推荐使用v - bind对象的方式绑定 <
    div: class = "{red:true,active:false}" > < /div>


v-for指令
 1.循环数组
 2.循环数字(从1开始)
 3.循环对象