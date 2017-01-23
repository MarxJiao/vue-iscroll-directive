/**
 * @file vue iscroll指令，用指令封装iscroll进行dom操作
 * @author MarxJiao
 * @date 2016/12/03
 */

// Vue
import Vue from 'vue';
import IScroll from 'iscroll'

function VIScroll() {
    this.iscroll = {},
    this.directive = function () {
        self = this;
        return Vue.directive('iscroll', {
            bind: function (el, value) {
                self.iscroll = IScroll(el, value);
                console.log(this);
            },
            update: function (newValue, oldValue) {
                self.iscroll.refresh();
            },
            unbind: function () {
                self.iscroll.destroy();
            }
        })
    }
}

export default new VIScroll().directive();