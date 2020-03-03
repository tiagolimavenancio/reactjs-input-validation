export function onHandleChange(name, value) {
    return {
      type: "INPUT_UPDATE_VALUES",
      name,
      value
    };
  }