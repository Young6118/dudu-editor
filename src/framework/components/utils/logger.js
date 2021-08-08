import {
  Log,
  Info,
  Warn,
  Error
} from './loggerConfigs';

export default {
  log(...arg) {
    console[Log](...arg);
  },
  info(...arg) {
    console[Info](...arg);
  },
  warn(...arg) {
    console[Warn](...arg);
  },
  error(...arg) {
    console[Error](...arg);
  }
};
