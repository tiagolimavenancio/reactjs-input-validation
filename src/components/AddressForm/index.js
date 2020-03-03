import React, { useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as AddressActions from "../../store/ducks/Address/actions";

import { Form } from "./styled";
import FieldGroup from "../FieldGroup";

function AddressForm(props) {
  const { address } = props;

  console.log('AddressForm');

  function handleChange(event) {
    const { name, value } = event.target;
    props.onHandleChange(name, value);
  }

  return (
    <Form>
      <h3>Address Form</h3>
      {
        Object.keys(address.form).map((key) => (
          <FieldGroup
            key={address.form[key].name}
            label={address.form[key].label}
            name={address.form[key].name}
            type={address.form[key].type}
            placeholder={address.form[key].placeholder}
            value={address.form[key].value}
            error={address.form[key].error}
            errors={address.errors}
            onChange={handleChange}
          />
        ))
      }
    </Form>
  );
}

function mapStateToProps(state) {
  const { address } = state;
  return { address };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, AddressActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressForm);
