import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FormInput, Button, RequestErrorItem } from '@/components';
import SignInSignUpLayout from '@/components/layouts/sigin-signup-container';
import axiosClient from '@/lib/axiosClient';
import useAuth from '@/hooks/useAuth';
import useHandleFormInputs from '@/hooks/useHandleFormInputs';

function Register() {
  const router = useRouter();
  const [fullnameError, setFullnameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [telegramUsernameError, setTelegramUsernameError] = useState<string>("");
  const [facebookUsernameError, setFacebookUsernameError] = useState<string>("");
  const [twitterUsernameError, setTwitterUsernameError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [passwordConfirmationError, setPasswordConfirmationError] = useState<string>("");
  const [requestError, setRequestError] = useState<object>({});

  const { formData: userData, setFormData: setUserData, handleChange } = useHandleFormInputs({
    fullname: "",
    email: "",
    telegram_username: "",
    facebook_username: "",
    twitter_username: "",
    password: "",
    password_confirmation: "",
    referral_token: ""
  });
  const regex = {
    fullname: /^[a-zA-Z\s]{5,}$/ig,
    email: /^[^\d][\w]+@[a-zA-Z]{3,10}\.[a-zA-Z]{2,5}$/ig,
    phone: /^[\d]{10,12}$/,
    telegram_username: /^@[^\d]+[\w]+$/ig,
    twitter_username: /^@[^\d]+[\w]+$/ig,
    password: /^[A-Z]{1}[\w$-@#\!%\^\&\*]{8,}$/ig,
    referral_token: /^[http|https]:\/\/(www\.[\w]+\.com | ["localhost"]\:[\d]\/[\w\/]+)$/ig
  }
  const { register, isLoading } = useAuth({ 
    middleware: "guest", 
    redirectIfAuthenticated: '/courses/my-courses'
  });
  const isValid = (data) => Object.values(data).every(val => Boolean(val)) && !emailError && !passwordError && !telegramUsernameError && !twitterUsernameError && !facebookUsernameError && !passwordConfirmationError;


  async function registerUser(e) {
    e.preventDefault();

    const data = {
      fullname: userData.fullname,
      email: userData.email,
      telegram_username: userData.telegram_username,
      facebook_username: userData.facebook_username,
      twitter_username: userData.twitter_username,
      password: userData.password,
      password_confirmation: userData.password_confirmation,
    }

    if(userData.referral_token)
      data.referral_token = userData.referral_token;

    if(isValid(data)) {
      try {
        // Register user
        register({
          setRequestError,
          data,
          resetFormData: setUserData
        })
      } catch (error) {
        console.log(error, "error registering user")
      }
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

    if(name === "fullname") {
      if(!inputRegex.exec(inputValue)) 
        setFullnameError("Please add a valid fullname");
      else 
        setFullnameError("");
    }

    if(name === "telegram_username") {
      if(!inputValue) 
        setTelegramUsernameError("Please fill in your telegram username")
      else if(!inputRegex.exec(inputValue)) 
        setTelegramUsernameError("Please add a valid telegram username");
      else 
        setTelegramUsernameError("");
    }

    if(name === "facebook_username") {
      if(!inputValue) 
        setFacebookUsernameError("Please fill in your facebook username")
      else 
        setFacebookUsernameError("");
    }

    if(name === "twitter_username") {
      if(!inputValue) 
        setTwitterUsernameError("Please fill in your twitter username")
      else if(!inputRegex.exec(inputValue)) 
        setTwitterUsernameError("Please add a valid twitter username");
      else 
        setTwitterUsernameError("");
    }

    if(name === "password") {
      if(!inputValue) 
        setPasswordError("Password can't be empty")
      else if(!inputRegex.exec(inputValue)) 
        setPasswordError("Password strenght is weak");
      else 
        setPasswordError("");
    }

    if(name === "password_confirmation") {
      if(!inputValue) 
        setPasswordConfirmationError("Confirm your password");
      else if(inputValue !== userData.password)
        setPasswordConfirmationError("Password does not match");
      else 
        setPasswordConfirmationError("");
    }
  }


  // Set referral token if it exists
  useEffect(() => {
    const token = router.query["referral-token"];

    if(token) 
      setUserData({ referral_token: token });
  }, [router.query])

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>

      <>
        <form className="mt-[2rem] pr-4 flex flex-col gap-y-6" onSubmit={registerUser} noValidate autoComplete="off">
          {/* Request error */}
          {requestError?.message && <RequestErrorItem message={requestError.message} />}
          
          <FormInput 
            type="text"
            name="fullname"
            label="Fullname"
            value={userData.fullname}
            onChange={handleChange}
            onBlur={handleValidation}
            error={fullnameError}  
            labelSign
          />

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
            type="text"
            name="twitter_username"
            label="Twitter username"
            value={userData.twitter_username}
            placeholder="@twitter_username"
            onChange={handleChange}
            onBlur={handleValidation}
            error={twitterUsernameError || requestError?.errors?.twitter_username}  
            labelSign
          />
          
          <FormInput 
            type="text"
            name="telegram_username"
            label="Telegram username"
            value={userData.telegram_username}
            placeholder="@telegram_username"
            onChange={handleChange}
            onBlur={handleValidation}
            error={telegramUsernameError || requestError?.errors?.telegram_username}  
            labelSign
          />
          
          <FormInput 
            type="text"
            name="facebook_username"
            label="Facebook username"
            value={userData.facebook_username}
            placeholder="Email or phone number"
            onChange={handleChange}
            onBlur={handleValidation}
            error={facebookUsernameError || requestError?.errors?.facebook_username}  
            labelSign
          />
          
          <FormInput 
            type="password"
            name="password"
            label="Password"
            value={userData.password}
            onChange={handleChange}
            onBlur={handleValidation}
            error={passwordError || requestError?.errors?.password} 
            labelSign
          />

          <FormInput 
            type="password"
            name="password_confirmation"
            label="Confirm Password"
            value={userData.password_confirmation}
            onChange={handleChange}
            onBlur={handleValidation}
            error={passwordConfirmationError}  
            labelSign
          />
          
          <FormInput 
            type="text"
            name="referral_token"
            label="Referral link (optional)"
            value={userData.referral_token}
            onChange={handleChange}
            onBlur={handleValidation}
            disabled
          />

          <div className="mt-3">
            <Button 
              type="submit"
              role="submit button"
              variant="fill-primary"
              isLoading={isLoading}
              isDisabled={!isValid}
              classname="w-full shadow-none hover:bg-primary-500 focus:bg-primary-700 min-h-[2.7rem]"
            >Sign up</Button>
          </div>
        </form>
      </>
    </>
  )
}

export default Register;

Register.getLayout = (page) => {
  return (
    <SignInSignUpLayout>
      {page}
    </SignInSignUpLayout>
  )
}