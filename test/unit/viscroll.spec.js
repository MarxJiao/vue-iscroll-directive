/**
 * @file viscroll directive unit test
 * @author MarxJiao
 */

import Vue from 'vue';

import viscroll from '../../src/index.js';


describe('viscroll directive test', () => {
    it('visroll shoud work fun', () => {
        let com = {
            template: `<div v-iscroll><div>{{text}}</div></div>`,
            data() {
                return {
                    text: 'hello word'
                }
            }
        }

        Vue.use(viscroll)
        let a = new Vue(com).$mount();
        console.log(a);
        // expect(true).toEqual(true);
    })
});
    