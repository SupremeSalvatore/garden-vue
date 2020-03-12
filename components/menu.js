const template = `
  <div class="menu-container u-1/1" v-show="open">
    <ul class="c-menu" :class="classes" role="menu">
      <slot></slot>
    </ul>
  </div>
`;

const Menu = {
  template,
  props: {
    open: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      required: false,
      default: '',
      validator(value) {
        return ['down', 'left', 'up', 'right'].includes(value);
      }
    },
    size: {
      type: String,
      default: '',
      validator(value) {
        return ['sm'].includes(value);
      }
    }
  },
  computed: {
    classes() {
      return {
        'is-open': this.open,
        [`c-menu--${this.position}`]: this.position,
        [`c-menu--${this.size}`]: this.size
      };
    }
  }
};

export default Menu;
