# Vue iscroll directive

An iscroll directive for Vue

# Install

```shell
npm install viscroll
```

# USE

Use this directive in the vue components


```HTML

<template>
    <!-- add directive to the iscroll wrapper-->
    <div v-iscroll>
        <!-- content -->
    </div>

    <!-- this will replease the config in 'use' key word -->
    <div v-iscroll="iscrollConf">
        <!-- content -->
    </div>

    <!-- use a fonction to get the instance of Iscroll -->
    <div v-iscroll=getIscroll>
        <!-- content -->
    </div>
</template>

<script>

import VIscroll from 'viscroll';

Vue.use(VIscroll, {
    mouseWheel: true,
    click: false,
    preventDefault: true,
    tap: false,
    bounce: false,
    disableTouch: true
});

export {
    data() {
        return {
            iscrollConf: {
                mouseWheel: true,
                vScrollbar: true,
                click: true,
                preventDefault: true,
                tap: true,
                bounce: false,
                disableTouch: true
            }
        }
    },
    methods: {

        /**
         * get the instance of Iscroll
         *
         * @param {Object} iscroll A instance of Iscroll
         */
        getIscroll(iscroll) {
            // do something with iscroll instance
        }
    }
}

</script>
```