import React, { useState } from 'react';
import { Meta, AccountFormContainer, FormInput } from '@/components';
import useHandleFormInputs from '@/hooks/useHandleFormInputs';
import useAuth from '@/hooks/useAuth';


function ForgotPassword() {
	const { forgotPassword } = useAuth({ middleware: 'guest' });
	const {formData: forgotPasswordField, setFormData: setforgotPasswordField, handleChange } = useHandleFormInputs({ email: ""});
	const [emailError, setEmailError] = useState<string>("");
	const [requestResponse, setRequestResponse] = useState<string>("");
	const [requestError, setRequestError] = useState<object>({});
	const isValid = Object.values(forgotPasswordField).every(val => Boolean(val)) && !emailError;


	function handleValidation({ target }) {
		const { value } = target;

		if(!value)
	      setEmailError("Please add an email address");
	    else if(!(/^[^\d][\w]+@[a-zA-Z]{3,10}\.[a-zA-Z]{2,5}$/ig).exec(value)) 
	      setEmailError("Please add a valid email");
	    else 
	      setEmailError("");
	}


	const submitForm = event => {
        event.preventDefault();

        if(isValid) {
	        forgotPassword({
	            email,
	            setStatus: setRequestResponse,
	            setRequestError
	        })
        }
    }
    console.log(requestError);

	return (
		<>
			<Meta 
				title="Forgot password - Accounts"
				keywords="forgot password, retrieve account"
			/>	

			<AccountFormContainer
				heading="Forgot password"
				subHeading="Enter the email associated with your account"
				buttonText="Send mail"
				submitForm={submitForm}
			>
				{requestResponse ? <span>{setRequestResponse}</span> : null}
				<FormInput 
					type="email"
					name="email"
					label="Email"
					value={forgotPasswordField.email}
					onChange={handleChange}
					onBlur={handleValidation}
					error={emailError}
					variant="dark"
					labelSign
				/>
			</AccountFormContainer>
		</>
	)
}

export default ForgotPassword;
