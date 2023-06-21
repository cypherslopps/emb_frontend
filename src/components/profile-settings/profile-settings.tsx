import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import FormInput from '../form-input/form-input';
import Button from '../button/button';
import ProfileImage from '../../../public/assets/images/wallpaperflare.com_wallpaper (10).jpg';
import { default as TwitterLogo } from '../../../public/assets/svg/socials/twitter.svg';
import { default as TelegramLogo } from '../../../public/assets/svg/socials/telegram.svg';
import { default as FacebookLogo } from '../../../public/assets/svg/socials/facebook.svg';
import useHandleFormInputs from '@/hooks/useHandleFormInputs';
import useAuth from '@/hooks/useAuth';

const ProfileSettings = () => {
	const { user } = useAuth({ middleware: "auth" });
	const { formData: userInfo, setFormData: setUserInfo, handleChange: handleInfoFormChange } = useHandleFormInputs({
		fullname: "",
		email: ""
	});
	const { formData: userPassword, setFormData: setUserPassword, handleChange: handlePasswordFormChange } = useHandleFormInputs({
		oldPassword: "",
		newPassword: "",
		confirmNewPassword: ""
	});
	const [fullnameError, setFullnameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [oldPasswordError, setOldPasswordError] = useState("");
	const [newPasswordError, setNewPasswordError] = useState("");
	const [confirmNewPasswordError, setConfirmNewPasswordError] = useState("");
	const isValid = (values, errors) => Object.keys(values).map(val => Boolean(val)) && !errors.join("");
	const regex = {
		fullname: /^[a-zA-Z\s]{5,}$/ig,
	    email: /^[^\d][\w]+@[a-zA-Z]{3,10}\.[a-zA-Z]{2,5}$/ig,
	    password: /^[A-Z]{1}[\w$-@#\!%\^\&\*]{8,}$/ig
	};

	useEffect(() => {
		// Set info data
		setUserInfo({
			...userInfo,
			fullname: user?.fullname,
			email: user?.email
		});

		return () => {
			// Set info data
			setUserInfo({
				...userInfo,
				fullname: "",
				email: ""
			});
		}
	}, [user]);

	// Update user info
	function updateUserInfo(e) {
		e.preventDefault();

		if(isValid(info, fullnameError, emailError)) {
			console.log("validated");

			// Set form values to null
			setUserInfo({
				...userInfo,
				fullname: "",
				email: ""
			});
		}
	}

	// Update user password
	function updateUserPassword(e) {
		e.preventDefault();

		if(isValid(info, oldPasswordError, newPasswordError, confirmNewPasswordError)) {
			console.log("validated");

			// Set form values to null
			setUserPassword({
				...userPassword,
				oldPasswordError: "",
				newPassword: "",
				confirmNewPasswordError: ""
			});
		}
	}

	// Handle Profile validation
	function handleValidation({ target }) {
	    const { name } = target;
	    const inputValue = userInfo[name] ?? userPassword[name];

	    if(name === "fullname") {
	      if(!regex.fullname.exec(inputValue)) 
	        setFullnameError("Please add a valid fullname");
	      else 
	        setFullnameError("");
	    }

	    if(name === "email") {
	      if(!inputValue)
	        setEmailError("Please add an email address");
	      else if(!regex.email.exec(inputValue)) 
	        setEmailError("Please add a valid email");
	      else 
	        setEmailError("");
	    }

	    if(name === "newPassword" || name === "oldPassword") {
	      if(!inputValue) 
	        name === "newPassword" ? setNewPasswordError("Please put in your new password") : setOldPasswordError("Please put in your old password");
	      else if(!regex.password.exec(inputValue)) 
	        name === "newPassword" ? setNewPasswordError("Password strenght is weak") : setOldPasswordError("Password strenght is weak");
	      else 
	        name === "newPassword" ? setNewPasswordError("") : setOldPasswordError("");
	    }

	    if(name === "confirmNewPassword") {
	      if(!inputValue) 
	        setConfirmNewPasswordError("Confirm your password");
	      else if(inputValue !== userPassword.newPassword)
	        setConfirmNewPasswordError("Password does not match");
	      else 
	        setConfirmNewPasswordError("");
	    }
	}

	return (
		<section className="w-[84vw] mx-auto grid grid-cols-[20vw_1fr] gap-x-9">
			{/* Profile Image Preview */}
			<aside className="space-y-6">
				<figure className="profile-image-preview mt-4 bg-gradient-to-tr from-rose-600 to-primary-500 p-[.4rem] w-full h-[40vh] rounded-[.8rem] overflow-hidden">
					<Image 
						src={ProfileImage}
						alt="user-profile-image"
						className="w-full h-full rounded-[.8rem] object-cover"
						priority
					/>
				</figure>

				{/* Profile socials section */}
				<section className="profile-socials space-y-6">
					<h4 className="font-noto_sans text-lg font-bold dark:text-white">Socials</h4>

					{/* Profile socials collection */}
					<div className="profile-socials-collection space-y-5">
						{/* Twitter */}
						<blockquote className="grid grid-cols-[1.8rem_1fr] gap-x-4 items-center">
							<span className="flex items-center justify-center bg-teal-100 h-[1.8rem] rounded-full">
								<Image 
									src={TwitterLogo}
									alt="user-twitter-logo"
									className="w-[63%] object-cover"
									priority
								/>
							</span>

							<div className="content">
								<h6 className="text-[.92rem] leading-none dark:text-white">Twitter</h6>
								<span className="text-[.87rem] underline decoration-dotted font-noto_sans text-gray-900/80 dark:text-white/70">{user?.socials?.twitter}</span>
							</div>
						</blockquote>

						{/* Twitter */}
						<blockquote className="grid grid-cols-[1.8rem_1fr] gap-x-4 items-center">
							<span className="flex items-center justify-center bg-primary-100 h-[1.8rem] rounded-full">
								<Image 
									src={TelegramLogo}
									alt="user-twitter-logo"
									className="w-[63%] object-cover"
									priority
								/>
							</span>

							<div className="content">
								<h6 className="text-[.92rem] leading-none dark:text-white">Telegram</h6>
								<span className="text-[.87rem] underline decoration-dotted font-noto_sans text-gray-900/80 dark:text-white/70">{user?.socials?.telegram}</span>
							</div>
						</blockquote>

						{/* Twitter */}
						<blockquote className="grid grid-cols-[1.8rem_1fr] gap-x-4 items-center">
							<span className="flex items-center justify-center bg-red-100 h-[1.8rem] rounded-full">
								<Image 
									src={FacebookLogo}
									alt="user-twitter-logo"
									className="w-[63%] object-cover"
									priority
								/>
							</span>

							<div className="content">
								<h6 className="text-[.92rem] leading-none dark:text-white">Facebook</h6>
								<span className="text-[.87rem] underline decoration-dotted font-noto_sans text-gray-900/80 dark:text-white/70">{user?.socials?.facebook}</span>
							</div>
						</blockquote>
					</div>
				</section>
			</aside>

			{/* Profile Form Container */}
			<div className="profile-form-container flex flex-col gap-y-12 pl-14">
				{/* Personal Info */}
				<div className="personal-info">
					<h3 className="text-xl font-bold font-noto_sans mb-3 dark:text-white">Personal Info</h3>

					<form onSubmit={updateUserInfo} className="form flex flex-col gap-y-4">
						<FormInput 
							type="text"
							name="fullname"
							label="Fullname"
							value={userInfo.fullname}
							onChange={handleInfoFormChange}
							onBlur={handleValidation}
							error={fullnameError}
						/>

						<FormInput 
							type="email"
							name="email"
							label="Email"
							value={userInfo.email}
							onChange={handleInfoFormChange}
							onBlur={handleValidation}
							error={emailError}
						/>

						<Button
							type="submit"
							role="submit"
							variant="fill-primary"
							classname="py-3"
						>Update info</Button>
					</form>
				</div>

				{/* Change Password */}
				<div className="personal-info">
					<h3 className="text-xl font-bold font-noto_sans mb-3 dark:text-white">Change password</h3>

					<form className="form flex flex-col gap-y-4">
						<FormInput 
							type="password"
							name="oldPassword"
							label="Old password"
							value={userPassword.oldPassword}
							onChange={handlePasswordFormChange}
							onBlur={handleValidation}
							error={oldPasswordError}
						/>

						<FormInput 
							type="password"
							name="newPassword"
							label="New password"
							value={userPassword.newPassword}
							onChange={handlePasswordFormChange}
							onBlur={handleValidation}
							error={newPasswordError}
						/>

						<FormInput 
							type="password"
							name="confirmNewPassword"
							label="Confirm new password"
							value={userPassword.confirmNewPassword}
							onChange={handlePasswordFormChange}
							onBlur={handleValidation}
							error={confirmNewPasswordError}
						/>

						<Button
							type="submit"
							role="submit"
							variant="fill-primary"
							classname="py-3"
						>Update password</Button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default ProfileSettings;