import { Stepper } from 'react-form-stepper';

import React from 'react'

const Stepper1 = () => {
    return (
        <Stepper className='mt-20'
            steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }]}
            activeStep={0}
        />)
}

export default Stepper1
