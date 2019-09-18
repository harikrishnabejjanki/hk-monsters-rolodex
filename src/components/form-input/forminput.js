import React from 'react';
import './forminput.scss';

const FormInput = ({ handleChnage, label, ...otherPrps }) => (
    <div className="group">
        <input className="form-input" onChange={handleChnage} {...otherPrps} />
        {
            label ? (<label className={`${otherPrps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>) : null
        }
    </div>
);

export default FormInput;

