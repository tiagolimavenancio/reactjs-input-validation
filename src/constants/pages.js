import React from 'react';

import PersonalForm from '@/components/PersonalForm';
import AddressForm from '@/components/AddressForm';
import Success from '@/components/Success';

const pages = [
    { title: 'User Form', component: <PersonalForm /> },
    { title: 'Address Form', component: <AddressForm /> },
    { title: 'Successfully', component: <Success /> },
]

export default pages;