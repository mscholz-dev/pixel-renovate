// types
import {
  TInspectDataErrors,
  TInspectData,
} from "../types";

export default class Validator {
  inspectData(
    schema: TInspectData,
    validFunc: Function,
  ): TInspectDataErrors {
    const errors: TInspectDataErrors = [];

    Object.entries(schema).forEach((item) => {
      const errorMessage = validFunc(
        item[0],
        item[1],
      );

      if (errorMessage.length !== 0) {
        errors.push({
          key: item[0],
          message: errorMessage,
        });
      }
    });

    return errors;
  }

  errorStyle(id: string): void {
    const inputWrapper = document.querySelector(
      `#${id}`,
    );

    if (!inputWrapper?.parentElement) return;

    inputWrapper.parentElement.classList.add(
      "form-input-error",
    );
  }
}
