import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from "react";

// types
import { TFormInput } from "./types";

export default class Form {
  handleChange(
    e: ChangeEvent,
    id: string,
    setter: Dispatch<SetStateAction<any>>,
    state: object,
  ): void {
    setter({
      ...state,
      [id]: (e.target as HTMLInputElement).value,
    });
  }

  handleCheckboxChange(
    e: ChangeEvent,
    id: string,
    setter: Dispatch<SetStateAction<any>>,
    state: object,
  ): void {
    setter({
      ...state,
      [id]: (e.target as HTMLInputElement)
        .checked,
    });
  }
}
