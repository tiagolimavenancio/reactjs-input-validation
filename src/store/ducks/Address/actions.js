export function onHandleChange(name, value) {
    return {
      type: "ADDRESS_FORM_UPDATE_VALUES",
      name,
      value
    };
  }
  
  export function onSubmitAddress(payload) {
    return {
      type: "SUBMIT_ADDRESS_FORM",
      payload
    };
  }
  