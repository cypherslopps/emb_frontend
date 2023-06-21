import React from "react";

const TableRowSkeleton = ({ limit }: { limit: number }) => {
    return (
        <>
            {Array.from({ length: limit }).map((_, index) => (
                <th key={index} className="animate-pulse">
                    <div className="bg-gray-300 block rounded-md p-1" />
                </th>
             ))}
        </>
    )
}

export default TableRowSkeleton;