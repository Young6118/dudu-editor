<template>
  <div class="test">
    <div>1111111</div>
    <demo-test>222</demo-test>
  </div>
</template>

<script>
  import './index.scss';

  import demoTestComponent from '../components/main';

  export default {
    name: 'demo',

    components: {
      'demo-test': demoTestComponent
    }
  };
</script>
