class DirectionAwareShadow {
  constructor({
    target = null,
    blur = 0,
    spread = 0,
    // color = "currentColor",
    // offset = 5,
    set = [{ offset: 5, color: "white" }],
    offsetElemPx = 5,
    offsetShadow = false,
    offsetElement = false,
  } = {}) {
    this.target = document.querySelectorAll(target);
    this.blur = blur;
    this.spread = spread;
    // this.color = color;
    // this.offset = offset;
    this.offsetElement = offsetElement;
    this.offsetShadow = offsetShadow;
    this.offsetElemPx = offsetElemPx;
    this.set = set;
  }

  move() {
    document.body.addEventListener("mousemove", (event) => {
      this.calc(event);
    });
  }

  calc(e) {
    const { pageY, clientY, pageX } = e;
    const { blur, spread, set, offsetElemPx } = this;
    // const { offset, color } = set;
    this.target.forEach((el) => {
      const targetCenterX = el.offsetWidth / 2 + el.offsetLeft;
      const targetCenterY = el.offsetHeight / 2 + el.offsetTop;
      let shadowX,
        shadowY,
        offSetElemY,
        offSetElemX,
        offsetPersentX,
        offsetPersentY,
        topScreen = pageY - clientY,
        // bott = topScreen + document.body.clientHeight,
        style = [];
      // console.log("object", bott +' '+document.body.clientHeight);
      let targetCenterClientY = targetCenterY - topScreen;
      set.forEach((sett) => {
        const { offset, color } = sett;
        if (pageX > targetCenterX) {
          offsetPersentX =
            ((pageX - targetCenterX) * 100) /
            (document.body.clientWidth - targetCenterX);
          shadowX = ((offsetPersentX * offset) / -100).toFixed(0);
          offSetElemX = ((offsetPersentX * offsetElemPx) / -100).toFixed(0);
        } else {
          offsetPersentX = (pageX * 100) / targetCenterX;
          shadowX = (((100 - offsetPersentX) * offset) / 100).toFixed(0);
          offSetElemX = (((100 - offsetPersentX) * offsetElemPx) / 100).toFixed(
            0
          );
        }

        if (clientY > targetCenterClientY) {
          offsetPersentY =
            ((clientY - targetCenterClientY) * 100) /
            (document.body.clientHeight - targetCenterClientY);
          shadowY = ((offsetPersentY * offset) / -100).toFixed(0);
          offSetElemY = ((offsetPersentY * offsetElemPx) / -100).toFixed(0);
        } else {
          offsetPersentY = (clientY * 100) / targetCenterClientY;
          shadowY = (((100 - offsetPersentY) * offset) / 100).toFixed(0);
          offSetElemY = (((100 - offsetPersentY) * offsetElemPx) / 100).toFixed(
            0
          );
        }
        style.push(`${shadowX}px ${shadowY}px ${blur}px ${spread}px ${color}`);
      });
      if (this.offsetShadow) {
        el.style.boxShadow = `${style.join(",")}`;
        // el.style.filter = `drop-shadow(${style.join(",")})`;
        // filter: drop-shadow(0 0 0 rgba(128, 128, 128, 0.2));
      }
      if (this.offsetElement) {
        el.style.transform = `translate(${offSetElemX}px, ${offSetElemY}px)`;
      }
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
  target: [".li", ".elem-offset"],
  blur: 2,
  spread: 0,
  offsetElement: true,
  offsetShadow: false,
  set: [
    { offset: 5, color: "hsla(22, 70%, 70%, 0.7)" },
    { offset: 25, color: "hsla(222, 70%, 70%, 0.7)" },
  ],
  offsetElemPx: 20,
});
const yellow = new DirectionAwareShadow({
  target: [".header_wrap"],
  set: [
    { offset: 15, color: "hsla(72, 100%, 50%, 0.9)" },
    { offset: 35, color: "hsla(222, 70%, 70%, 0.7)" },
  ],
  blur: 5,
  spread: 0,
  offsetElement: false,
  offsetShadow: true,
});

red.init();
yellow.init();

document.body.addEventListener("click", function (event) {
  console.log("client", event.clientY);
  console.log("page", event.pageY);
  console.log("page", event);
});
