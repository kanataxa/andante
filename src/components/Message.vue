<template>
    <div>
        <div class='container'>
            <transition name='fade'>
                <h4 v-show="i>=2">ララ</h4>
            </transition>
        </div>
        <div class='container'>
            <transition name='fade'>
                <h4 v-show="i>=3">サタリン</h4>
            </transition>
        </div>
        <div class='container'>
            <transition name='fade'>
                <h4 v-show="i>=4">デビルーク</h4>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    name: 'message',
    created() {
        this.loop();
    },
    data() {
        return {
            i: 0
        }
    },
    methods: {
        loop() {
            const loopFunc = () => {
                if (this.i === 4) {
                    return;
                } else {
                    this.i++;
                    setTimeout(() => {
                        loopFunc()
                    }, 5 * 1000);
                }

            }
            loopFunc();
        }
    }
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */

{
    opacity: 0
}
</style>
