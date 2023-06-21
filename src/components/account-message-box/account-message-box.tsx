import React, { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { IconType } from "react-icons/lib";
import { IoArrowBack, IoHandLeftOutline } from 'react-icons/io5';
import Button from '../button/button';

type Props = {
	heading: string,
	subHeading: string,
	Icon: IconType,
	buttonTitle: string
}

const AccountMessageBox = ({ heading, subHeading, Icon, buttonTitle }: Props) => {
	const router = useRouter();
	
	return (
		<div className="account-container w-[32vw] text-center mx-auto mt-12">
			{Icon && (
				<span className="bg-primary-100/30 mx-auto rounded-md w-[3.9rem] h-[3.7rem] flex items-center justify-center">
					<Icon className="text-[1.5rem] text-primary-700" />
				</span>
			)}
			<h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-2 flex items-center gap-x-2">
				{heading}
				<IoHandLeftOutline style={{ transform: "skewX(-12deg)" }} />
			</h3>
			<p className="text-[.87rem] text-gray-800/80 dark:text-white/80 leading-[1.8]">{subHeading}</p>

			{buttonTitle && (<Button
				type="submit"
				role="submit-button"
				variant="fill-primary"
				classname="w-full py-2 mt-8"
				onClick={() => router.push(`/login`)}
			>
				<IoArrowBack />
				{buttonTitle}
			</Button>)}
		</div>
	)
}

export default AccountMessageBox;