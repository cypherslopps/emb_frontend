import React, { useState, useEffect } from 'react';
import { AiFillLock } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { Meta, AccountFormContainer, AccountMessageBox, FormInput } from '@/components';
import useHandleFormInputs from '@/hooks/useHandleFormInputs';
import useAuth from '@/hooks/useAuth';


function ResetPassword() {
	const router = useRouter();
	const { resetPassword } = useAuth({ middleware: 'guest' });
	const {formData: resetFields, setFormData: setResetFields, handleChange } = useHandleFormInputs({
		email: "",
		password: "",
		confirmPassword: ""
	});
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState<string>("");
	const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");
	const [requestResponse, setRequestResponse] = useState<string>("");
	const [requestError, setRequestError] = useState<object>({});
	const isValid = Object.values(resetFields).every(val => Boolean(val)) && !confirmPasswordError && !passwordError;
	const regex = {
	    email: /^[^\d][\w]+@[a-zA-Z]{3,10}\.[a-zA-Z]{2,5}$/ig,
	    password: /^[A-Z]{1}[\w$-@#\!%\^\&\*]{8,}$/ig
	};

	function handleValidation({ target }) {
	    const { name } = target;
	    const inputValue = resetFields[name];
	    const inputRegex = regex[name];

	    if(name === "email") {
	      if(!inputValue)
	        setEmailError("Please add an email address");
	      else if(!inputRegex.exec(inputValue)) 
	        setEmailError("Please add a valid email");
	      else 
	        setEmailError("");
	    }

	    if(name === "password") {
	      if(!inputValue) 
	        setPasswordError("Password can't be empty")
	      else if(inputValue.length < 6)   
	        setPasswordError("Password strenght is weak");
	      else 
	        setPasswordError("");
	    }

	    if(name === "confirmPassword") {
	    	console.log(name, inputValue)
	      if(!inputValue) 
	        setConfirmPasswordError("Password can't be empty")
	      else if(inputValue !== resetFields.password)   
	        setConfirmPasswordError("Password does not match");
	      else 
	        setConfirmPasswordError("");
	    }
	}

	const submitForm = event => {
        event.preventDefault();

        if(isValid) {
	        resetPassword({
	            email,
	            password,
	            password_confirmation: passwordConfirmation,
	            token: router.query.token,
	            setRequestError
	        })
        }
    }

    useEffect(() => {
        setResetFields({email: router.query.email || ''});
    }, [router.query.email])

	return (
		<>
			<Meta 
				title="Reset password - Accounts"
				keywords="reset password, recover password"
			/>	

			<>
				{requestResponse === "success" ? (
					<AccountMessageBox 
						Icon={AiFillLock}
						heading="Password successfully changed"
						subHeading="Your password has been successfully reset. lorem fasdas fsfdsjfsfs dhfdsf hsdlfsdhfsdfsdflhsdkfksf"
						buttonTitle="Back to login"
					/>
				) : (
					<AccountFormContainer
						heading="Reset password"
						subHeading="Create a new password"
						buttonText="Reset password"
						submitForm={submitForm}
					>
						<FormInput 
							type="email"
							name="email"
							label="Email"
							value={resetFields.email}
							onChange={handleChange}
							onBlur={handleValidation}
							error={emailError}
							variant="dark"
							labelSign
						/>

						<FormInput 
							type="password"
							name="password"
							label="Password"
							value={resetFields.password}
							onChange={handleChange}
							onBlur={handleValidation}
							error={passwordError}
							variant="dark"
							labelSign
						/>

						<FormInput 
							type="password"
							name="confirmPassword"
							label="Confirm password"
							value={resetFields.confirmPassword}
							onChange={handleChange}
							onBlur={handleValidation}
							error={confirmPasswordError}
							variant="dark"
							labelSign
						/>
					</AccountFormContainer>
				)}
			</>
		</>
	)
}

export default ResetPassword;
