import { Node, mergeAttributes } from '@tiptap/core';
import { VueNodeViewRenderer } from '@tiptap/vue-2';
import Component from './Component';

export default Node.create({
  name: 'paper',

  group: 'block',

  atom: true,

  addAttributes() {
    return {
      lines: {
        default: []
      }
    };
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="paper"]'
      }
    ];
  },

  renderHTML(context) {
    const paths = [];
    context.HTMLAttributes.lines.forEach((line) => {
      paths.push(['path', {
        d: line.path,
        id: `id-${line.id}`,
        stroke: line.color,
        'stroke-width': line.size
      }]);
    });
    return ['div', mergeAttributes(context.HTMLAttributes, { 'data-type': 'paper', class: 'draw' }), [
      'svg',
      {
        viewBox: '0 0 500 250'
      },
      ...paths
    ]];
  },

  addNodeView() {
    return VueNodeViewRenderer(Component);
  }
});
