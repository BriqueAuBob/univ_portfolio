import { Node } from '@tiptap/core';

export default Node.create({
  name: 'iframe',
  group: 'block',
  addOptions() {
    return {
      allowFullscreen: true,
      HTMLAttributes: {
        class: 'w-full',
      },
    };
  },
  addAttributes() {
    return {
      src: {
        default: null,
      },
      frameborder: {
        default: 0,
      },
      allowfullscreen: {
        default: this.options.allowFullscreen,
        parseHTML: () => this.options.allowFullscreen,
      },
      class: {
        default: 'w-full min-h-[600px]',
      },
    };
  },
  parseHTML() {
    return [
      {
        tag: 'iframe',
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ['div', this.options.HTMLAttributes, ['iframe', HTMLAttributes]];
  },
  addCommands(): any {
    return {
      setIframe:
        (options: any) =>
        ({ tr, dispatch }: any) => {
          const { selection } = tr;
          const node = this.type.create(options);

          if (dispatch) {
            tr.replaceRangeWith(selection.from, selection.to, node);
          }

          return true;
        },
    };
  },
});
