import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { Meta, FormInput, Button, RequestErrorItem } from '@/components';
import SignInSignUpLayout from '@/components/layouts/sigin-signup-container';
import useHandleFormInputs from '@/hooks/useHandleFormInputs';
import useAuth from '@/hooks/useAuth';

type ErrorType = {
  email?: "",
  password?: ""
}

function Login() {
  const router = useRouter();
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const { formData: userData, setFormData: setUserData, handleChange } = useHandleFormInputs({
      email: "",
      password: "",
  });
  const [requestError, setRequestError] = useState<object>({});
  const regex = {
    email: /^[^\d][\w]+@[a-zA-Z]{3,10}\.[a-zA-Z]{2,5}$/ig,
    password: /^[A-Z]{1}[\w$-@#\!%\^\&\*]{8,}$/ig
  };
  const { login, user, isLoading } = useAuth({ 
    middleware: "guest", 
    redirectIfAuthenticated: '/courses/my-courses'
  });
  const isValid = Object.values(userData).every(val => Boolean(val)) && !emailError && !passwordError;

  function loginUser(e: FormEvent) {
    e.preventDefault();

    if(isValid) {
      login({
        setRequestError,
        data: userData
      })
    }
  }

  function handleValidation({ target }) {
    const { name } = target;
    const inputRegex = regex[name];
    const inputValue = userData[name];

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
        setPasswordError("Password can't be empty");
      else 
        setPasswordError("");
    }
  }

  return (
    <>
      <Meta 
        title="Login"
        description="Login to get access to your courses"
        description="login to get access to our best courses"
      />

      
      <form className="mt-[3rem] pr-4 flex flex-col gap-y-6" onSubmit={loginUser} noValidate>
        {/* Request error */}
        {requestError?.message && <RequestErrorItem message={requestError.message} />}

        <FormInput 
          type="email"
          name="email"
          label="Email"
          value={userData.email}
          onChange={handleChange}
          onBlur={handleValidation}
          error={emailError || requestError?.errors?.email} 
          labelSign
        />
      
        <FormInput 
          type="password"
          name="password"
          label="Password"
          value={userData.password}
          onChange={handleChange}
          onBlur={handleValidation}
          error={passwordError} 
          labelSign
        />
      
        <div className="mt-3">
          <Button 
            type="submit"
            role="submit button"
            isLoading={isLoading}
            isDisabled={!isValid}
            variant="fill-primary"
            classname="w-full shadow-none hover:bg-primary-500 focus:bg-primary-700 min-h-[2.7rem]"
          >Sign in</Button>
        </div>
      </form>
    </>
  )
}

export default Login;

Login.getLayout = (page) => {
  return (
    <SignInSignUpLayout>
      {page}
    </SignInSignUpLayout>
  )
}