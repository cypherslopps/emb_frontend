import React from 'react';

type Props = {
    heading: String
};

const Heading = ({ heading }: Props) => {
    return (
        <h5 className="heading capitalize font-bold text-[.92rem] text-gray-700 dark:text-white/90">{heading}</h5>
    );
} 

export default Heading;