/**
 * @file vue iscroll指令，用指令封装iscroll进行dom操作
 * @author MarxJiao
 * @date 2016/12/03
 */

import IScroll from 'iscroll'

const VIScroll = {
    install(Vue, options) {
        Vue.directive('iscroll', {
            bind(el, binding, vnode, oldVnode) {

                // 判断输入参数
                let vtype = binding.value ? [].toString.call(binding.value) : undefined;

                // 设置iscorll属性的参数
                let iscrollOptions  = vtype === '[object Object]' ? binding.value : options;

                // 阻止touchmove默认事件
                el.addEventListener('touchmove', event => {
                    event.preventDefault();
                })

                // 使用vnode绑定iscroll是为了让iscroll对象能够夸状态传递，避免iscroll重复建立
                vnode.scroll = new IScroll(el, iscrollOptions);
            },
            update(el, binding, vnode, oldVnode) {

                // 将scroll绑定到新的vnode上
                vnode.scroll = oldVnode.scroll;

                // 使用settimeout让refresh跳到事件流结尾，保证refresh时数据已经更新完毕
                setTimeout(() => {
                    vnode.scroll.refresh();
                }, 0)
            },
            unbind(el, binding, vnode, oldVnode) {

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