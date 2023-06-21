import React from 'react';
import { Meta, ProfileSettings, Navigation } from '@/components';
import GuestLayout from '@/components/layouts/GuestLayout';

function Account() {
	return (
		<>
			<Meta 
				title="Account"
				keywords="user account" 
			/>

			<main className="flex flex-col gap-y-8 pb-8 py-8">
				{/* Profile Settings */}
				<ProfileSettings />
			</main>
		</>
	)
}

export default Account;

Account.getLayout = (page: any) => {
	return (
		<GuestLayout>{page}</GuestLayout>
	)
}