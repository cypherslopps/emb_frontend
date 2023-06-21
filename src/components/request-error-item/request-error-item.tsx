import React from 'react';
import { IoWarning } from 'react-icons/io5';

type Props = {
	message: string
}

const RequestErrorItem = ({ message }: Props) => {
	return (
		<p className="flex items-center w-[max-content] text-[.95rem] gap-x-2 bg-[#ff2626cc] px-5 py-4 rounded-sm mx-auto">
			<IoWarning className="text-lg" />
			{message}
		</p>
	)
}

export default RequestErrorItem;