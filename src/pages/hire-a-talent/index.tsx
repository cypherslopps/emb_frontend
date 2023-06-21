import React, { useState } from 'react';
import useSWR from 'swr';
import toast, { Toaster } from 'react-hot-toast';
import axiosClient from '@/lib/axiosClient';
import { IoPaperPlane } from 'react-icons/io5';
import { Meta, FormInput, FormSelect, Button } from '@/components';
import GuestLayout from '@/components/layouts/GuestLayout';
import useHandleFormInputs from '@/hooks/useHandleFormInputs';
import useAuth from '@/hooks/useAuth';
import { getJobRoles } from '@/utils/apis/job-roles';


function HireTalent() {
	const { csrf } = useAuth();
	const [isLoading, setIsLoading] = useState(false);
 	const { formData: hireData, setFormData: setHireData, handleChange, errors, setErrors } = useHandleFormInputs({
	    name: "",
	    email: "",
	    job_role: "",
	    budget: 0,
	    description: ""
	});
	const regex = {
	    name: /^[a-zA-Z\s]{5,}$/ig,
	    email: /^[^\d][\w]+@[a-zA-Z]{3,10}\.[a-zA-Z]{2,5}$/ig
	}
	const [nameError, setNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [jobRoleError, setJobRoleError] = useState("");
	const [budgetError, setBudgetError] = useState("");
	const [descriptionError, setDescriptionError] = useState("");
	const isValid = Object.values(hireData).every(val => Boolean(val)) && !emailError && !nameError && !jobRoleError && !budgetError && !descriptionError;

	const { data: jobRoles } = useSWR(
		"/jobs", 
		() => getJobRoles());

	async function submitHireProposal(e) {
		e.preventDefault();

		setIsLoading(true);

		if(isValid) {
			try {
				await csrf();
				console.log(hireData);

				const response = await axiosClient.post('/hire-a-talent', hireData);
				const data = response.data;

				if(data.status === "success") {
					setIsLoading(false);

					toast.success("Mail successfully sent"); 
					
					setErrors({
						...errors,
						name: "",
					    email: "",
					    job_role: "",
					    budget: 0,
					    description: ""
					})
				}
			} catch(error) {
				setIsLoading(false);
				toast.error("There was an error applying"); 
			}
		}
	}

	function handleValidation({ target }) {
		const { name } = target;
	    const inputRegex = regex[name];
	    const inputValue = hireData[name];
	    console.log(name, inputValue)

	    if(name === "email") {
	      if(!inputValue)
	        setEmailError("Please add an email address");
	      else if(!inputRegex.exec(inputValue)) 
	        setEmailError("Please add a valid email");
	      else 
	        setEmailError("");
	    }

	    if(name === "name") {
	      if(!inputRegex.exec(inputValue)) 
	        setNameError("Please add a valid fullname");
	      else 
	        setNameError("");
	    }

	    if(name === "job_role") {
	    	if(!regex.name.exec(inputValue)) 
	        setJobRoleError("Please select a job role");
	      else 
	        setJobRoleError("");
	    }

	    if(name === "budget") {
	    	if(inputValue <= 0) 
	        setBudgetError("Please add a reasonable budget");
	      else 
	        setBudgetError("");
	    }

	    if(name === "description") {
	    	if(!name) 
	        setDescriptionError("Please add a reasonable budget");
	      else 
	        setDescriptionError("");
	    }
	} 

	return (
		<>
			<Meta 
				title="Hire a talent - Empowered Blockchain Firm"
				keywords="hire talents"
				description="create the best team members"
			/>

			<Toaster />

			<main className="pt-12 flex flex-col mx-auto w-full py-4 gap-y-12 leading-[1.3] relative pb-[4rem] px-4 mds:px-6 sm:w-[93%] md:w-[90%] lg:pl-48">
				<div className="line hidden w-[0.067rem] h-[27vh] absolute top-[45%] left-0 bg-black/20 dark:bg-white/20 lg:flex" style={{transform: "translate(-50%, -50%)"}}>
					<span className="h-[70%] w-full bg-black dark:bg-white"></span>
				</div>
				<h1 className="text-[1.31rem] leading-[1.4] font-semibold text-center font-noto_sans dark:text-white mds:[1.4rem] sm:text-3xl mds:text-justify  lg:text-3.5xl">Be the best at what you do, <br /> Hire the best team members</h1>

				{/* Hire a talent form */}
				<form className="form space-y-10" onSubmit={submitHireProposal}>
					<div className="form-group grid grid-cols-1 gap-y-6 sm:grid-cols-2 md:gap-x-4 lg:gap-x-7" role="input-group">
						<FormInput 
				            type="text"
				            name="name"
				            label="Your name"
				            value={hireData.name}
				            onChange={handleChange}
				            onBlur={handleValidation}
				            error={nameError}
				            labelSign
				          />

				          <FormInput 
				            type="email"
				            name="email"
				            label="Your email"
				            value={hireData.email}
				            onChange={handleChange}
				            onBlur={handleValidation}
				            error={emailError}
				            labelSign
				          />
					</div>

					<div className="form-group grid gap-y-6 sm:grid-cols-2 sm:gap-x-7" role="input-group">
						<FormSelect 
				            name="job_role"
				            label="What you are interested in"
				            value={hireData.job_role}
				        	defaultValue="Select job role"
				            selectDataOptions={jobRoles}
				            onChange={handleChange}
				            onBlur={handleValidation}
				            error={jobRoleError}
				            classname="py-2.5"
				            labelSign
				          />

				          <FormInput 
				            type="number"
				            name="budget"
				            label="Project budget (Dollars)"
				            value={hireData.budget}
				            error={budgetError}
				            onChange={handleChange}
				            onBlur={handleValidation}
				            labelSign
				          />
					</div>

					<FormInput 
			            type="textarea"
			            name="description"
			            label="Description"
			            placeholder="Project description"
			            value={hireData.description}
			            error={descriptionError}
			            onChange={handleChange}
			            onBlur={handleValidation}
			            classname="h-[35vh]"
			            labelSign
			          />

			          <Button
			            type="submit"
			            role="submit"
			            variant="dark"
			            isLoading={isLoading}
			            classname="mds:py-3 w-full xlg:w-[20vw] lg:w-[15vw]"
			          >
			            Hire talent
			            <IoPaperPlane />
			          </Button>
				</form>
			</main>
		</>
	)
} 


export default HireTalent;

HireTalent.getLayout = (page: any) => {
	return (
		<GuestLayout>{page}</GuestLayout>
	)
} 