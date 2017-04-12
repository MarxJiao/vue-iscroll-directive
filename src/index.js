/**
 * @file vue iscroll指令，用指令封装iscroll进行dom操作
 * @author MarxJiao
 * @date 2016/12/03
 */

var IScroll =  require('iscroll');

var VIScroll = {
    install: function (Vue, options) {
        Vue.directive('iscroll', {
            inserted: function (el, binding, vnode, oldVnode) {

                // 判断输入参数
                var vtype = binding.value ? [].toString.call(binding.value) : undefined;

                // 设置iscorll属性的参数
                var iscrollOptions  = vtype === '[object Object]' ? binding.value : options;

                // 使用vnode绑定iscroll是为了让iscroll对象能够夸状态传递，避免iscroll重复建立
                vnode.scroll = new IScroll(el, iscrollOptions);
            },
            componentUpdated: function (el, binding, vnode, oldVnode) {

                // 将scroll绑定到新的vnode上
                vnode.scroll = oldVnode.scroll;

                // 使用settimeout让refresh跳到事件流结尾，保证refresh时数据已经更新完毕
                vnode.scroll.refresh();
            },
            unbind: function (el, binding, vnode, oldVnode) {

                /**
                 * 解除绑定时要把iscroll销毁
                 */
                vnode.scroll = oldVnode.scroll;
                vnode.scroll.destroy();
                vnode.scroll = null;
            }
        })
    }
}

module.exports = VIScroll;