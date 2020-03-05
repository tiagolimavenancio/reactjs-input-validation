import React from 'react';

import PersonalForm from '../components/PersonalForm';
import AddressForm from '../components/AddressForm';
import Success from '../components/Success';

const pages = [
    { title: 'User Form', component: <PersonalForm />, next: () => {} },
    { title: 'Address Form', component: <AddressForm />, previous: () => {}, next: () => {}},
    { title: 'Successfully', component: <Success />, previous: () => {}},
]

export default pages;