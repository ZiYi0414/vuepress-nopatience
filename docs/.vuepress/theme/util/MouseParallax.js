import ParallaxError from './ParallaxError';

const parallaxError = new ParallaxError();

export default class MouseParallax {
  constructor(ele) {
    this.WRAP = null; // 容器
    this.TYPES = [1]; // 可获取节点类型
    this.ATTR_NAME = 'data-prax'; // 节点属性名
    this.RATE = 0.2; //  默认移动速率
    this.DILUTER = 0.2; // 移动速率稀释剂
    this.ANIMATION_FRAME = null; //  ANIMATION_FRAME 编号
    this.childNodes = []; // 所有子节点
    this.praxAttrEle = []; //  所有包含 ATTR_NAME 的子节点
    this.praxs = []; // 所有包含 ATTR_NAME 的元信息
    this.point = { // 鼠标坐标
      x: -10,
      y: -10,
    };

    if (this.TYPES.includes(ele.nodeType)) {
      this.WRAP = ele;
    } else {
      parallaxError.throw('必须传入一个元素节点');
    }
  }

  init() {
    this.deepFindContainPraxAttrEle(this.WRAP);
    this.generatePraxMetaData();
    this.bindEvent();
    this.loop();
  }

  deepFindContainPraxAttrEle(parent) {
    const nodes = parent.childNodes;
    if (nodes.length > 0) {
      for (let i = 0; i < nodes.length; i++) {
        if (this.TYPES.includes(nodes[i].nodeType)) {
          if (this.containPraxAttr(nodes[i])) {
            this.praxAttrEle.push(nodes[i]);
          }
          if (nodes[i].childNodes) {
            this.deepFindContainPraxAttrEle(nodes[i]);
          }
        }
      }
    }
  }

  containPraxAttr(node) {
    if (node.hasAttribute(this.ATTR_NAME)) return true;
    return false;
  }

  generatePraxMetaData() {
    this.praxAttrEle.forEach((ele) => {
      let rate = ele.getAttribute(this.ATTR_NAME);
      rate = rate ? parseFloat(rate, 10) : this.RATE;
      if (rate <= 0 || rate > 1) parallaxError.throw(`${this.ATTR_NAME}应该为0到1之间的数值`);

      this.praxs.push({
        ele,
        rate,
        targetX: 0,
        targetY: 0,
        prevX: 0,
        prevY: 0,
        x: 0,
        y: 0,
        left: ele.offsetLeft,
        top: ele.offsetTop,
        size: ele.offsetWidth,
      });
    });
  }

  bindEvent() {
    this.WRAP.addEventListener('mousemove', this.wrapMouseMove.bind(this));
  }

  wrapMouseMove(e) {
    this.point.x = e.pageX;
    this.point.y = e.pageY;
  }

  loop() {
    this.updatePraxsStatus();
    this.ANIMATION_FRAME = window.requestAnimationFrame(this.loop.bind(this));
  }

  updatePraxsStatus() {
    this.praxs.forEach((ele) => {
      ele.targetX = (ele.size / 2 - (this.point.x - ele.left)) * ele.rate * this.DILUTER;
      ele.targetY = (ele.size / 2 - (this.point.y - ele.top)) * ele.rate * this.DILUTER;
      ele.x += (ele.targetX - ele.x) * 0.2;
      ele.y += (ele.targetY - ele.y) * 0.2;
      if (Math.abs(ele.x) < 0.001) ele.x = 0;
      if (Math.abs(ele.y) < 0.001) ele.y = 0;
      if (ele.prevX !== ele.x && ele.prevY !== ele.y) {
        ele.ele.style.transform = `translate3d(${ele.x}px, ${ele.y}px, 0px)`;
      }
      ele.prevX = ele.x;
      ele.prevY = ele.y;
    });
  }

  destroy() {
    if (this.ANIMATION_FRAME) {
      window.cancelAnimationFrame(this.ANIMATION_FRAME);
    }
  }
}