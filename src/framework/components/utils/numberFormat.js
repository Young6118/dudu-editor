// ,分隔数字
function splitFormat(num) {
  const numArray = [];
  let curNum = num;
  let numStr = '';
  while (curNum > 1000) {
    numArray.push(curNum % 1000);
    curNum = Math.floor(curNum / 1000);
  }
  numArray.push(curNum);
  // 拼装数字
  while (numArray.length > 0) {
    numStr += (`${numArray.pop()},`);
  }
  return numStr.substr(0, numStr.length - 1);
}

// 字节转换
function byteFormat(num) {
  let value = 0;
  if (num >= 1000 && num < 1000000) {
    value = parseFloat(num / 1024);
    return {
      value,
      unit: 'KB',
      text: `${value}KB`
    };
  } else if (num >= 1000000 && num < (1000 * 1000 * 1000)) {
    value = parseFloat(num / (1024 * 1024));
    return {
      value,
      unit: 'MB',
      text: `${value}MB`
    };
  } else if (num >= (1000 * 1000 * 1000)) {
    value = parseFloat(num / (1024 * 1024 * 1024));
    return {
      value,
      unit: 'GB',
      text: `${value}GB`
    };
  }
  return {
    value: num,
    unit: 'B',
    text: `${num}B`
  };
}

// 百分比转换
function percentFormat(num, fixed) {
  let percentNum = Math.round(num * 100);
  // 小于10
  if (fixed === 'fill' && percentNum < 10) {
    percentNum = `0${percentNum}`;
  }

  return `${percentNum}%`;
}

// 时间计算
function timeFormat(num) {
  // 小时
  const hourTime = num / 1000 / 60 / 60;
  const hour = Math.floor(hourTime);

  // 分钟
  const minuteTime = (hourTime - hour) * 60;
  const minute = Math.floor(minuteTime);

  // 秒
  const secondTime = (minuteTime - minute) * 60;
  const second = Math.floor(secondTime);

  // 毫秒
  const millisecond = (secondTime - second) * 1000;

  return {
    hour,
    minute,
    second,
    millisecond
  };
}

export default function NumberFormat(num, type, fixed) {
  if (typeof (num) !== 'number') {
    return num;
  }

  switch (type) {
    case 'split':
      return splitFormat(num);
    case 'byte':
      return byteFormat(num);
    case 'percent':
      return percentFormat(num, fixed);
    case 'time':
      return timeFormat(num, fixed);
    default:
      if (num >= 1000 && num < 1000000) {
        return `${parseFloat((num / 1000).toFixed(fixed || 2))}K`;
      } else if (num >= 1000000 || num <= -1000000) {
        return `${parseFloat((num / 1000000).toFixed(fixed || 2))}M`;
      }
      return num;
  }
}
