import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as PersonalActions from "../../store/ducks/Personal/actions";

import { Form } from "./styles";
import FieldGroup from "../FieldGroup";

function PersonalForm(props) {

  const { personal, steps } = props;

  function handleChange(event) {
    const { name, value } = event.target;
    props.onHandleChange(name, value);
  }

  return (
    <Form>
    <h3>{ steps.pages[steps.index].title }</h3>
    {
      Object.keys(personal.form).map((key) => (
        <FieldGroup
          key={personal.form[key].name}
          label={personal.form[key].label}
          name={personal.form[key].name}
          type={personal.form[key].type}
          placeholder={personal.form[key].placeholder}
          value={personal.form[key].value}
          error={personal.form[key].error} 
          errors={personal.errors}                          
          onChange={handleChange}
        />
      ))
    }
  </Form>
  );
}

function mapStateToProps(state) {
  const { personal, steps } = state;
  return { personal, steps };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, PersonalActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalForm);
