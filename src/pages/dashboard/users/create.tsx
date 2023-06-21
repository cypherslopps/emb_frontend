import React, { useState, FormEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import AdminLayout from '@/components/layouts/AdminLayout';
import AdminContainer from '@/components/admin-container/admin-container';
import { FormInput, FormSelect, Filepond, Button, Meta } from '@/components';
import useHandleFormInputs from '@/hooks/useHandleFormInputs'; 
import axiosClient from '@/lib/axiosClient';
import useAuth from '@/hooks/useAuth';

type Props = {};

const CreateNewUser = (props: Props) => {
    const { handleChange, formData: userData, setFormData: setUserData } = useHandleFormInputs({
        firstname: "",
        lastname: "",
        email: "",
        telegram_username: "",
        twitter_username: "",
        facebook_username: ""
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [roleError, setRoleError] = useState<string>("");
    const [fullnameError, setFullnameError] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [telegramUsernameError, setTelegramUsernameError] = useState<string>("");
    const [facebookUsernameError, setFacebookUsernameError] = useState<string>("");
    const [twitterUsernameError, setTwitterUsernameError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const { register } = useAuth({ middleware: "auth" });
    const isValid = Object.values(userData).every(value => Boolean(value));

    const regex = {
        fullname: /^[a-zA-Z\s]{5,}$/ig,
        email: /^[^\d][\w]+@[a-zA-Z]{3,10}\.[a-zA-Z]{2,5}$/ig,
        phone: /^[\d]{10,12}$/,
        telegram_username: /^@[^\d]+[\w]+$/ig,
        twitter_username: /^@[^\d]+[\w]+$/ig,
        password: /^[A-Z]{1}[\w$-@#\!%\^\&\*]{8,}$/ig,
        referral_token: /^[http|https]:\/\/(www\.[\w]+\.com | ["localhost"]\:[\d]\/[\w\/]+)$/ig
      }

    setTimeout(() => {
        toast.dismiss();
    }, 7000);

    // Submit new post
    async function addNewPost(e: FormEvent) {
        e.preventDefault();
        // {
        //     duration: 4000,
        //     position: 'top-right',
          
        //     // Styling
        //     style: {
        //         fontWeight: 300
        //     },
        //     className: '',
          
        //     // Custom Icon
        //     icon: '👏',
          
        //     // Change colors of success/error/loading icon
        //     iconTheme: {
        //       primary: '#000',
        //       secondary: '#fff',
        //     },
          
        //     // Aria
        //     ariaProps: {
        //       role: 'status',
        //       'aria-live': 'polite',
        //     },
        //   }
        
        try {
            const response = await register({ setErrors, userData });
            console.log(response);
            setIsLoading(false);
            toast.success("Course successfully added");
        } catch(error) {
            console.log(error);
            setIsLoading(false);
            toast.error("There was an error adding course");
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

        if(name === "role") {
          if(!regex.fullname.exec(inputValue)) 
            setRoleError("Please select a user role");
          else 
            setRoleError("");
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
    }

    return (
        <>
            <Meta 
                title="Dashboard - Create new user"
                description="add new user"
                keywords="create user"
            />
                
            <Toaster />

            <>
                <AdminContainer heading='Create new user'>
                    <form onSubmit={addNewPost} className="grid grid-cols-1 gap-6 border border-gray-300 shadow-sm shadow-gray-100 bg-white rounded-xl py-6 px-7" noValidate> 
                        <div className="flex flex-col gap-5">
                            <FormSelect
                                name="role"
                                label="User role"
                                defaultValue="Select user role"
                                value={userData.role}
                                error={roleError}
                                selectDataOptions={["Moderator", "Tutor"]}
                                onChange={handleChange}
                                onBlur={handleValidation}
                                labelSign
                            />

                            <FormInput 
                                type="text"
                                name="fullname"
                                label="Fullname"
                                value={userData.fullname}
                                error={fullnameError}
                                onChange={handleChange}
                                onBlur={handleValidation}
                                labelSign
                            />

                            <FormInput 
                                type="email"
                                name="email"
                                label="Email"
                                value={userData.email}
                                error={emailError}
                                onChange={handleChange}
                                onBlur={handleValidation}
                                labelSign
                            />
                            <div className="grid grid-cols-3 gap-x-4">

                                <FormInput 
                                    type="text"
                                    name="telegram_username"
                                    label="Telegram username"
                                    value={userData.telegram_username}
                                    error={telegramUsernameError}
                                    onChange={handleChange}
                                    onBlur={handleValidation}
                                    labelSign
                                />
                                
                                <FormInput 
                                    type="text"
                                    name="twitter_username"
                                    label="Twitter username"
                                    value={userData.twitter_username}
                                    error={twitterUsernameError}
                                    onChange={handleChange}
                                    onBlur={handleValidation}
                                    labelSign
                                />

                                <FormInput 
                                    type="text"
                                    name="facebook_username"
                                    label="Facebook username"
                                    value={userData.facebook_username}
                                    error={facebookUsernameError}
                                    onChange={handleChange}
                                    onBlur={handleValidation}
                                    labelSign
                                />
                            </div>

                            <div className="flex gap-x-2 mt-3">
                                <Button
                                    type="submit"
                                    role="create-post"
                                    variant="fill-primary"
                                    isLoading={isLoading}
                                >Create new user</Button>
                            </div>
                        </div>
                    </form>
                </AdminContainer>
            </>
        </>
    )
}

export default CreateNewUser;

CreateNewUser.getLayout = (page: any) => {
    return (
        <AdminLayout>{page}</AdminLayout>
    )
}

// CreateNewUser.requireAuth = true;