export default class FramerMotion {
  // clipPath
  static clipPathPolygonLeftClose =
    "polygon(0 0, 0 0, 0 100%, 0% 100%)";
  static clipPathPolygonRightClose =
    "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)";
  static clipPathPolygonOpen =
    "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";

  // transition
  static transitionEaseInOut(number: number) {
    return {
      duration: number,
      ease: "easeInOut",
    };
  }

  // viewportOnce
  static viewportOne = { once: true };
}
