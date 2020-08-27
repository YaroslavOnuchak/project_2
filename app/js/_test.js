class DirectionAwareShadow {
  constructor({
    target = null,
    blur = 0,
    spread = 0,
    // color = "currentColor",
    // offset = 5,
    set = [{ offset: 5, color: "white" }],
  } = {}) {
    this.target = document.querySelectorAll(target);
    this.blur = blur;
    this.spread = spread;
    // this.color = color;
    // this.offset = offset;
    this.set = set;
  }

  move() {
    document.body.addEventListener("mousemove", (event) => {
      this.calc(event);
    });
  }

  calc(e) {
    const { pageY, clientY, pageX } = e;
    const { blur, spread, set } = this;
    // const { offset, color } = set;
    this.target.forEach((el) => {
      const targetCenterX = el.offsetWidth / 2 + el.offsetLeft;
      const targetCenterY = el.offsetHeight / 2 + el.offsetTop;
      let shadowX,
        shadowY,
        offsetPersentX,
        offsetPersentY,
        topScreen = pageY - clientY,
        bott = topScreen + document.body.clientHeight,
        style = [];
      let targetCenterClientY = targetCenterY - topScreen;
      set.forEach((sett) => {
        const { offset, color } = sett;
        if (pageX > targetCenterX) {
          offsetPersentX =
            ((pageX - targetCenterX) * 100) /
            (document.body.clientWidth - targetCenterX);
          shadowX = ((offsetPersentX * offset) / -100).toFixed(0);
        } else {
          offsetPersentX = (pageX * 100) / targetCenterX;
          shadowX = (((100 - offsetPersentX) * offset) / 100).toFixed(0);
        }

        if (clientY > targetCenterClientY) {
          offsetPersentY =
            ((clientY - targetCenterClientY) * 100) /
            (document.body.clientHeight - targetCenterClientY);
          shadowY = ((offsetPersentY * offset) / -100).toFixed(0);
        } else {
          offsetPersentY = (clientY * 100) / targetCenterClientY;
          shadowY = (((100 - offsetPersentY) * offset) / 100).toFixed(0);
        }

        style.push(`${shadowX}px ${shadowY}px ${blur}px ${spread}px ${color}`);
      });

      el.style.boxShadow = `${style.join(",")}`;
    });
  }

  init() {
    if (!this.target) {
      console.error("[direction-aware shadow] • you should add a target");
      return;
    }

    this.move();
  }
}

const red = new DirectionAwareShadow({
  target: ".li",
  blur: 2,
  spread: 0,
  set: [
    { offset: 5, color: "hsla(22, 70%, 70%, 0.7)" },
    { offset: 25, color: "hsla(222, 70%, 70%, 0.7)" },
  ],
});
const yellow = new DirectionAwareShadow({
  target: ".header_wrap",
  set: [
    { offset: 15, color: "hsla(72, 100%, 50%, 0.9)" },
    { offset: 35, color: "hsla(222, 70%, 70%, 0.7)" },
  ],
  blur: 5,
  spread: 0,
});

red.init();
yellow.init();

// // highlightjs
// // hljs.initHighlightingOnLoad();
document.body.addEventListener("click", function (event) {
  console.log("client", event.clientY);
  console.log("page", event.pageY);
  console.log("page", event);
});
