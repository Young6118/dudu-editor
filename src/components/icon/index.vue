<template>
  <div
    class="icon"
    :class="[`icon--${name}`, `icon--${size}`, { 'has-align-fix': fixAlign }]"
  >
    <component :is="require(`./icons/${name}.svg`)" class="icon__svg" />
  </div>
</template>

<script>
  export default {
    name: 'icon',
    props: {
      name: {},
      size: {
        default: 'normal'
      },
      modifier: {
        default: null
      },
      fixAlign: {
        default: true
      }
    }
  };
</script>

<style lang="scss" scoped>
.icon {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 1em;
  height: 1em;
  margin: 0 0.3em;
  top: 0;
  fill: currentColor;

  &__svg {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    height: 100%;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
}
// svg sprite
body > svg,
.icon use > svg,
symbol {
  path,
  rect,
  circle,
  g {
    fill: currentColor;
    stroke: none;
  }

  *[d='M0 0h24v24H0z'] {
    display: none;
  }
}
</style>
