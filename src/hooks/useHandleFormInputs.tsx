import React, { useState } from 'react';

type FormProps = {
    email: string,
    password: string
}

const useHandleFormInputs = (props: object) => {
    const data = {...props};
    const [formData, setFormData] = useState(data);
    const [errors, setErrors] = useState({});

    function handleChange({ target }: any) {
        const { name, value } = target;

        setFormData({
            ...formData,
            [name]: value
        });
    }
    
    return { formData, setFormData, handleChange, errors, setErrors };
}

export default useHandleFormInputs