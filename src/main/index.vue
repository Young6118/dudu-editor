<template>
  <div class="main">
    <div>dudu-editor 嘟嘟富文本编辑器</div>
    <dudu-editor v-model="value">222</dudu-editor>
    <div>渲染展示</div>
    <div class="output ProseMirror" v-html="value"></div>
  </div>
</template>

<script>
  import './index.scss';

  export default {
    name: 'demo',

    components: {
    },

    data() {
      return {
        value: ''
      };
    }
  };
</script>

<style lang="scss" scoped>
@import '../components/main.scss';

.space {
  height: 100px;
}

.output {
  padding: 10px;
}
</style>
