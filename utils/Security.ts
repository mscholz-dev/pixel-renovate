import xss from "xss";

export default class Security {
  xss(string: string): string {
    return xss(string);
  }
}
