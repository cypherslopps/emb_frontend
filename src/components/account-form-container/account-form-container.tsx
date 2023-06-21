import React, { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { IconType } from "react-icons/lib";
import { IoArrowBack } from 'react-icons/io5';
import Button from '../button/button';

type Props = {
	heading: string,
	subHeading: string,
	children: ReactNode,
	submitForm: () => void,
	buttonText: "Send mail" | "Reset password"
}

const AccountFormContainer = ({ heading, subHeading, children, submitForm, buttonText }: Props) => {
	const router = useRouter();

	return (
		<div className="account-container w-full px-4 mds:px-0 mds:w-[70vw] md:w-[54vw] lg:w-[34vw] bg-red mx-auto mt-12 space-y-8">
			{/* Header */}
			<header className="flex flex-col items-center gap-1 text-center">
				<h3 className="text-[1.3rem] sm:text-2xl font-semibold text-gray-900 dark:text-white">{heading}</h3>
				<p className="text-[.82rem] sm:text-[.867rem] text-gray-800/80 dark:text-white/80 leading-[1.5] sm:leading-[1.8]">{subHeading}</p>
			</header>

			{/* Form */}
			<form 
				className="form flex flex-col gap-y-5"
				onSubmit={e => {
					e.preventDefault();

					// Submit AccountFormContainer
					submitForm();
				}}
				noValidate
			>
				{children}

				{/* Form actions */}
				<div className="flex flex-col space-y-3 mt-2">
					<Button
						type="submit"
						role="submit-button"
						variant="fill-primary"
						classname="w-full py-2"
					>{buttonText}</Button>

					<Button
						type="button"
						role="link"
						variant="border" 
						classname="w-full py-2 gap-x-5"
						onClick={() => router.push('/login')}
					>
						<IoArrowBack />
						Back to login
					</Button>
				</div>
			</form>
		</div>
	)
}

export default AccountFormContainer;