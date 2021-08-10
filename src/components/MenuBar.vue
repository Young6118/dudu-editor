<template>
  <div>
    <template v-for="(item, index) in items">
      <div class="divider" v-if="item.type === 'divider'" :key="index" />
      <el-tooltip
        v-else
        effect="dark"
        :content="item.title"
        placement="bottom"
        :key="index"
      >
        <menu-item v-bind="item" />
      </el-tooltip>
    </template>
  </div>
</template>

<script>
import MenuItem from './MenuItem';

export default {
  components: {
    MenuItem
  },

  props: {
    editor: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      items: [
        {
          icon: 'undo',
          title: '撤销',
          action: () => this.editor.chain().focus().undo().run()
        },
        {
          icon: 'redo',
          title: '重做',
          action: () => this.editor.chain().focus().redo().run()
        },
        {
          type: 'divider'
        },
        {
          icon: 'bold',
          title: '粗体',
          action: () => this.editor.chain().focus().toggleBold().run(),
          isActive: () => this.editor.isActive('bold')
        },
        {
          icon: 'italic',
          title: '斜体',
          action: () => this.editor.chain().focus().toggleItalic().run(),
          isActive: () => this.editor.isActive('italic')
        },
        {
          icon: 'strike',
          title: '删除线',
          action: () => this.editor.chain().focus().toggleStrike().run(),
          isActive: () => this.editor.isActive('strike')
        },
        {
          icon: 'code_inline',
          title: '行内代码',
          action: () => this.editor.chain().focus().toggleCode().run(),
          isActive: () => this.editor.isActive('code')
        },
        {
          icon: 'text',
          title: '强调',
          action: () => this.editor.chain().focus().toggleHighlight().run(),
          isActive: () => this.editor.isActive('highlight')
        },
        {
          type: 'divider'
        },
        {
          icon: 'h1',
          title: '一级标题',
          action: () => this.editor.chain().focus().toggleHeading({ level: 1 }).run(),
          isActive: () => this.editor.isActive('heading', { level: 1 })
        },
        {
          icon: 'h2',
          title: '二级标题',
          action: () => this.editor.chain().focus().toggleHeading({ level: 2 }).run(),
          isActive: () => this.editor.isActive('heading', { level: 2 })
        },
        {
          icon: 'h3',
          title: '三级标题',
          action: () => this.editor.chain().focus().toggleHeading({ level: 3 }).run(),
          isActive: () => this.editor.isActive('heading', { level: 3 })
        },
        {
          icon: 'paragraph',
          title: '段落',
          action: () => this.editor.chain().focus().setParagraph().run(),
          isActive: () => this.editor.isActive('paragraph')
        },
        {
          icon: 'ul',
          title: '无序列表',
          action: () => this.editor.chain().focus().toggleBulletList().run(),
          isActive: () => this.editor.isActive('bulletList')
        },
        {
          icon: 'ol',
          title: '有序列表',
          action: () => this.editor.chain().focus().toggleOrderedList().run(),
          isActive: () => this.editor.isActive('orderedList')
        },
        {
          icon: 'checklist',
          title: '任务列表',
          action: () => this.editor.chain().focus().toggleTaskList().run(),
          isActive: () => this.editor.isActive('taskList')
        },
        {
          icon: 'code',
          title: '代码块',
          action: () => this.editor.chain().focus().toggleCodeBlock().run(),
          isActive: () => this.editor.isActive('codeBlock')
        },
        {
          type: 'divider'
        },
        {
          icon: 'quote',
          title: '块级引用',
          action: () => this.editor.chain().focus().toggleBlockquote().run(),
          isActive: () => this.editor.isActive('blockquote')
        },
        {
          icon: 'hr',
          title: '分割线',
          action: () => this.editor.chain().focus().setHorizontalRule().run()
        },
        {
          type: 'divider'
        },
        {
          icon: 'drawing',
          title: '画板',
          action: () => this.editor.commands.insertContent({ type: 'paper' })
        },
        {
          icon: 'image',
          title: '图片',
          action: this.addImage
        },
        {
          type: 'divider'
        },
        {
          icon: 'text-wrap',
          title: '换行',
          action: () => this.editor.chain().focus().setHardBreak().run()
        },
        {
          icon: 'clean',
          title: '清除格式',
          action: () => this.editor.chain()
            .focus()
            .clearNodes()
            .unsetAllMarks()
            .run()
        }
      ]
    };
  },
  methods: {
    addImage() {
      // eslint-disable-next-line no-alert
      const url = window.prompt('请填入图片在线地址');

      if (url) {
        this.editor.chain().focus().setImage({ src: url }).run();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$colorBlack: #000;

.divider {
  width: 2px;
  height: 1.25rem;
  background-color: rgba($colorBlack, 0.1);
  margin-left: 0.5rem;
  margin-right: 0.75rem;
}
</style>
