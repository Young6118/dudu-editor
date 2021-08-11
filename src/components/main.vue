// 这里是我们的组件
<template>
  <div
    class="editor"
    v-if="editor">
    <menu-bar class="editor__header" :editor="editor" />
    <editor-content class="editor__content" :editor="editor" />
  </div>
</template>

<script>
  // 协作状态样式优化 https://www.tiptap.dev/examples/collaborative-editing
  import { Editor, EditorContent } from '@tiptap/vue-2';
  import MenuBar from './MenuBar';
  import register from './register';
  import './main.scss';

  export default {
    name: 'dudu-editor',

    components: {
      EditorContent,
      MenuBar
    },

    props: {
      value: {
        type: String,
        default: ''
      }
    },

    data() {
      return {
        editor: null
      };
    },

    watch: {
      value(v) {
        const isSame = this.value === v;
        if (isSame) return;
        this.editor.commands.setContent(this.value, false);
      }
    },

    mounted() {
      this.editor = new Editor({
        content: this.value,
        extensions: register,
        onUpdate: () => {
          // HTML
          this.$emit('input', this.editor.getHTML());

          // JSON
          // this.$emit('input', this.editor.getJSON())
        }
      });
    },

    beforeDestroy() {
      this.editor.destroy();
    }
  };
</script>


<style lang="scss" scoped>
$colorWhite: #fff;

.editor {
  display: flex;
  flex-direction: column;
  max-height: 400px;
  color: #0D0D0D;
  background-color: $colorWhite;
  border: 3px solid #0D0D0D;
  border-radius: 0.75rem;

  &__header {
    display: flex;
    align-items: center;
    flex: 0 0 auto;
    flex-wrap: wrap;
    padding: 0.25rem;
    border-bottom: 3px solid #0D0D0D;
  }

  &__content {
    padding: 1.25rem 1rem;
    flex: 1 1 auto;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  &__footer {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    white-space: nowrap;
    border-top: 3px solid #0D0D0D;
    font-size: 12px;
    font-weight: 600;
    color: #0D0D0D;
    white-space: nowrap;
    padding: 0.25rem 0.75rem;
  }

  /* Some information about the status */
  &__status {
    display: flex;
    align-items: center;
    border-radius: 5px;

    &::before {
      content: ' ';
      flex: 0 0 auto;
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: rgba(#0D0D0D, 0.5);
      border-radius: 50%;
      margin-right: 0.5rem;
    }

    &--connecting::before {
      background: #616161;
    }

    &--connected::before {
      background: #B9F18D;
    }
  }

  &__name {
    button {
      background: none;
      border: none;
      font: inherit;
      font-size: 12px;
      font-weight: 600;
      color: #0D0D0D;
      border-radius: 0.4rem;
      padding: 0.25rem 0.5rem;

      &:hover {
        color: #FFF;
        background-color: #0D0D0D;
      }
    }
  }
}
</style>

<style lang="scss">

</style>
