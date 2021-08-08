import {
  Tooltip,
  Select,
  Option,
  Upload,
  Button,
  Icon,
  Input,
  InputNumber,
  Form,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Progress,
  Popover,
  Notification
} from 'element-ui';
import 'element-ui/lib/theme-chalk/base.css';

import duduEditor from './main.vue';

export default {
  install(Vue, options = {}) {
    Vue.component(options.name || 'dudu-editor', duduEditor);

    // 注册element相关组件
    Vue.use(Icon);
    Vue.use(Form);
    Vue.use(Input);
    Vue.use(InputNumber);
    Vue.use(Upload);
    Vue.use(Option);
    Vue.use(Select);
    Vue.use(Tooltip);
    Vue.use(Button);
    Vue.use(Dropdown);
    Vue.use(DropdownItem);
    Vue.use(DropdownMenu);
    Vue.use(Progress);
    Vue.use(Popover);
    Vue.prototype.$notify = Notification;
  }
};
