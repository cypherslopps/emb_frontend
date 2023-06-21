import React from 'react';
import TableHeaderProp from '../table/table';

type Props = {
	data: TableHeaderProp[],
	changeTableDataOrder?: (key: string) => void
}

const TableHeader = ({ data, changeTableDataOrder }: Props) => {
	return (
		<thead>
	        <tr className="bg-gray-300/10">
	            {/* Table head item */}
	            {data?.map(({ name, order }) => (
	                <th className="tables-header-cell p-0 table-header-cell-id" key={name}>
	                    <button 
	                        type="button" 
	                        className="flex items-center capitalize gap-x-1 w-full px-4 py-2 whitespace-nowrap font-normal text-sm" 
	                        onClick={() => order ? changeTableDataOrder(name) : null}
	                    >
	                        {order && (
	                            <>
	                                <span className="sr-only">
	                                    Sort by
	                                </span>
	                            
	                                <span className="sr-only">
	                                    Ascending
	                                </span>
	                            </>
	                        )}
	                
	                        <span className="font-noto_sans text-gray-900/90">{name}</span>
	                        
	                        {/* Display icon if order is equal to true */}
	                        {order && (<svg className="tables-header-cell-sort-icon h-3 w-3 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
	                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
	                        </svg>)}            
	                    </button>
	                </th>
	            ))}

	            <th className="table-header-cell p-0 table-header-cell-slug">
	                <button type="button" className="flex items-center gap-x-1 w-full px-4 py-2 whitespace-nowrap font-noto_sans text-sm text-gray-600 cursor-default ">
	                    <span className="sr-only"></span>
	                </button>
	            </th>
	        </tr>
	    </thead>
	)
} 

export default TableHeader;