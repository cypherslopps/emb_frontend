import React, { useState, useContext } from 'react';
import Head from 'next/head';
import { AuthContext } from '@/providers/auth-provider';
import useAuth from '@/hooks/useAuth';
import styles from "@/styles/before-state.module.css";
import { FormInput, Button, FormCheckbox, RequestErrorItem } from '@/components';
import AuthLayout from '@/components/layouts/AuthLayout';
import useHandleFormInputs from '@/hooks/useHandleFormInputs';

type LoginProps = {
  email: string,
  password: string,
  checkbox: boolean
}

const Login = () => {
  const { handleChange, formData: loginData, setFormData: setFormData, errors } = useHandleFormInputs({
      email: "",
      password: ""
  }) 
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [requestError, setRequestError] = useState<object>({});
  const regex = {
    email: /^[^\d][\w]+@[a-zA-Z]{3,10}\.[a-zA-Z]{2,5}$/ig,
    password: /^[A-Z]{1}[\w$-@#\!%\^\&\*]{8,}$/ig
  };
  const { login, user, isLoading } = useAuth({ 
    middleware: "admin", 
    redirectIfAuthenticated: '/dashboard'
  });
  const isValid = Object.values(loginData).every(val => Boolean(val)) && !emailError && !passwordError;


  function loginUser(e) {
    e.preventDefault();

    if(isValid) {
      login({
        setRequestError,
        data: loginData
      })
    }
  }

  function handleValidation({ target }) {
    const { name } = target;
    const inputRegex = regex[name];
    const inputValue = loginData[name];

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
      <Head>
        <title>Admin login</title>
      </Head>

      <>
        <div className={`${styles.beforeStateTop} w-screen px-6 -mt-16 md:mt-0 md:px-2 p-10 bg-white/50 relative xxsm:max-w-full mds:max-w-[85%] sm:border sm:border-gray-100 sm:dark:bg-gray-900 sm:backdrop-blur-xl sm:dark:border-gray-700 sm:rounded-2xl sm:shadow-xl sm:shadow-gray-100 sm:max-w-[70%] md:max-w-[28rem]`}>
          <div className="space-y-8 xxsm:px-1 mds:px-2 sm:px-4 md:px-7">
            <h2 className="text-2xl font-bold tracking-tight font-noto_sans text-center">Admin Login</h2>

            {/* Request error */}
            {requestError?.message && <RequestErrorItem message={requestError.message} />}

            {/* Form */}
            <form className="space-y-7" onSubmit={loginUser} noValidate autoComplete="off">
              <FormInput 
                type="email"
                name="email"
                label="Email"
                value={loginData.email || requestError?.errors?.email}
                onChange={handleChange}
                onBlur={handleValidation}
                error={emailError}
                labelSign
              />

              <FormInput 
                type="password"
                name="password"
                label="Password"
                value={loginData.password}
                onChange={handleChange}
                onBlur={handleValidation}
                error={passwordError}
                labelSign
              />
{/*
              <FormCheckbox 
                name="remember"
                label="Remember me"
                value={loginData.checkbox}
                onChange={handleChange}
              />*/}
              
              <div>
                <Button 
                  type="submit"
                  role="submit button"
                  variant="fill-primary"
                  isLoading={isLoading}
                  classname="w-full shadow-none focus:ring-offset-4 focus:ring-2 focus:ring-inset hover:bg-primary-500 focus:bg-primary-700 focus:ring-offset-primary-500 min-h-[2.25rem]"
                >Sign in</Button>
              </div>
            </form>
          </div>
        </div>
      </>
    </>
  )
}

export default Login;

Login.getLayout = (page) => {
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  )
}