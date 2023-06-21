import React from 'react';
import { Meta, ProfileSettings } from '@/components';

function Account() {
	return (
		<>
			<Meta 
				title="Account - Dashboard"
				keywords="user account" 
			/>

			<ProfileSettings />
		</>
	)
}

export default Account;


// Account.requireAuth = true;