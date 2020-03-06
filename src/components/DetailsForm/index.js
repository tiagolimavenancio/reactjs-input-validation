import React from 'react';

import { connect } from 'react-redux'

import {
    Content,
    Header,
    Title,
    Body,
    Subtitle,
    Text
} from './styles';

function DetailsForm(props) {

    const { personal, address } = props;

  return (
    <Content>
        <Header>
            <Title>User Details</Title>
            <Body>
                {
                    Object.keys(personal.form).map(key => (
                        <>
                            <Subtitle>
                                {personal.form[key].label}
                            </Subtitle>
                            <Text>
                                {personal.form[key].value}
                            </Text>
                        </>
                    ))                    
                }
                {
                    Object.keys(address.form).map(key => (
                        <>
                            <Subtitle>
                                {address.form[key].label}
                            </Subtitle>
                            <Text>
                                {address.form[key].value}
                            </Text>
                        </>
                    ))
                }
            </Body>
        </Header>
    </Content>
  );
}

function mapStateToProps(state) {
    const { personal, address } = state;
    return { personal, address }
}

export default connect(mapStateToProps, null)(DetailsForm);