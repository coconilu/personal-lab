const obj = {
  a: 1,
  show: function() {
    console.log(`TCL: this.a`, this.a);
  }
};

// 解释为什么react的事件处理器需要bind绑定this
const show = obj.show;

console.log(`TCL: obj.show()`);
obj.show();
console.log(`TCL: show()`);
show();
