export function onHandleChange(name, value) {
  return {
    type: "PERSONAL_FORM_UPDATE_VALUES",
    name,
    value
  };
}

export function onSubmitPersonal(payload) {
  return {
    type: "SUBMIT_PERSONAL_FORM",
    payload
  };
}
