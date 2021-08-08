// 这里是我们的组件
<template>
  <div class="demo">
    <span class="demo__text">222222333{{text}}</span>
  </div>
</template>

<script>
  import './main.scss';

  export default {
    name: 'demo',

    data() {
      return {
        text: 'this ia a vue component demo'
      };
    }
  };
</script>
