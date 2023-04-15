<script setup lang="ts">
import { ref } from "vue";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "../../../../src/body-scroll-lock";

defineProps<{ msg: string }>();

let dialogVisible = ref<boolean>(false);
const open = () => {
  disableBodyScroll(document.body, {
    allowTouchMove: (el: any) => {
      while (el && el !== document.body) {
        if (typeof el.className === "string") {
          // 弹框内部需要滚动时给该部分添上此类名，即可恢复滚动
          if (el.className.indexOf("body-scroll-lock-ignore") > -1) {
            return true;
          }
        }
        el = el.parentElement;
      }
      return false;
    },
  });
  dialogVisible.value = true;
};
const clear = () => {
  enableBodyScroll(document.body);
  dialogVisible.value = false;
};
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>

    <div class="card">
      <button type="button" @click="open">open dialog</button>
      <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
        >create-vue</a
      >, the official Vue + Vite starter
    </p>
    <p>
      Install
      <a href="https://github.com/vuejs/language-tools" target="_blank"
        >Volar</a
      >
      in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

    <div v-if="dialogVisible" class="dialog body-scroll-lock-ignore">
      <br />
      <button @click="clear">close dialog</button>
      <br />
      <br />
      <p class="read-the-docs">
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
        Click on the Vite and React logos to learn more
        <br />
      </p>
    </div>
    <div v-if="dialogVisible" class="mask"></div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.dialog {
  width: 70%;
  height: 70%;
  position: fixed;
  top: 15%;
  left: 15%;
  overflow-y: auto;
  z-index: 10;
  color: #000;
  background-color: #fff;
}
.mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0000005e;
  z-index: 9;
}
</style>
