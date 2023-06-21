import React, { useState, useEffect, ReactElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import axiosClient from '@/lib/axiosClient';
import TableHeader from '../table-header/table-header';
import FormSearch from '../form-search/form-search';
import TableRowSkeleton from './table-row.skeleton';
import PostsTableRow from './rows/posts-table-row';
import CoursesTableRow from './rows/courses-table-row';
import UsersTableRow from './rows/users-table-row';
import RowsTableRow from './rows/roles-table-row';
import PermissionsTableRow from './rows/permissions-table-row';
import TableEmptySlate from '../table-empty-slate/table-empty-slate';

export type TableHeaderProp = {
    order: boolean,
    name: string
}

export type Props = {
    tableHeader: TableHeaderProp[],
    type: "posts" | "courses" | "tags" | "users" | "roles" | "permissions",
    totalCount: number
}

export type HrefProp = {
    pathname: string,
    query: {
        id?: number,
        slug?: string
    }
}

const Table = ({ tableHeader, type, totalCount=0 }: Props) => {
    const router = useRouter();
    const [page, setPage] = useState<string>("1");
    const [pageLimit, setPageLimit] = useState<string>("5");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [state, setState] = useState<string>("idle");
    // const [tableDataDeleteList, setTableDataDeleteList] = useState<Array<string> | Array<null>>([]);
    // const [selectAllItemsCheckbox, setSelectAllItemsCheckbox] = useState<boolean>(false);
    const [orderedPosition, setOrderedPosition] = useState("ASC");
    const [orderedTableData, setOrderedTableData] = useState([]);
    let tableContent: ReactElement | string = "";

    // const { data: tableData, error } = useSWR(`/${type}?page=${page}&pageLimit=${pageLimit}`, 
    //     () => axiosClient
    //             .get(`/${type}?page=${page}&pageLimit=${pageLimit}`)
    //             .then(res => res.data.data)
    //             .catch(error => error) 
    // );

    
    useEffect(() => {
        // Set loading state to true
        setIsLoading(true);

        // Set state
        setState("pending");

        // Set page limit and page query

        setTimeout(() => {
            console.log(`/${type}?page=${page}&limit=${pageLimit}`)
            axiosClient.get(`/${type}?page=${page}&limit=${pageLimit}`)
                .then(({ data }) => {
                    // Set loading state
                    setIsLoading(false);
                    
                    setOrderedTableData(data.data ?? data);

                    // Set state
                    setState("fetched");
                })
                .catch(error => {
                    // Set loading state
                    setIsLoading(false);

                    // Set state
                    setState("fetched");
                });
        }, 500)


        return () => {
            // Set loading state to false
            setIsLoading(false);

            // Set status to idle
            setState("idle");
        }
    }, [page, pageLimit, type, setIsLoading]);
   
    // Change table order
    function changeTableDataOrder(orderKey: string) {
        if(orderedPosition === "ASC") {
            const descending = [].concat(orderedTableData).sort((a, b) => a[orderKey] > b[orderKey] ? -1 : 1);
            setOrderedTableData(descending)
            setOrderedPosition("DESC");
        } else if(orderedPosition === "DESC") {
            const ascending = [].concat(orderedTableData).sort((a, b) => a[orderKey] > b[orderKey] ? 1 : -1);
            setOrderedTableData(ascending)
            setOrderedPosition("ASC");
        }
    }

    // Handles pagination previous
    function handlePrevious() {
        if(page === 1)
        setPage(prop => prop === 1 ? 1 : prop - 1);
    }
        
    // Handles pagination next
    function handleNext() {
        setPage(prop => prop === pageLimit ? prop : prop + 1);
    }

    // CHange page limit
    function changePageLimit({ target }) {
        // Set loading state to true
        setIsLoading(true);

        // Set page limit
        setPageLimit(target.value);
    }

    // Render page buttons
    const renderPageButtons = () => {
        const maxVisibleButtons = pageLimit; // Maximum number of visible pagination buttons
        const ellipsisThreshold = 2; // Threshold for displaying ellipsis

        const pageButtons = [];
        let start = 1;
        let end = totalCount;

        if (totalCount > maxVisibleButtons) {
          const middleButtonIndex = Math.ceil(maxVisibleButtons / 2);
          const overflow = totalCount - maxVisibleButtons;
          console.log(middleButtonIndex, overflow);

          if (page <= middleButtonIndex - ellipsisThreshold) {
            end = maxVisibleButtons - 1;
          } else if (page >= totalCount - (middleButtonIndex - ellipsisThreshold)) {
            start = totalCount - (maxVisibleButtons - 2);
          } else {
            start = page - middleButtonIndex + ellipsisThreshold;
            end = page + middleButtonIndex - ellipsisThreshold;
          }
        }

        for (let i = start; i <= end; i++) {
          pageButtons.push(
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={i === page ? 'active' : ''}
            >
              {i}
            </button>
          );
        }

        return pageButtons;
      };

      console.log(renderPageButtons())

    // Display block if data is pending or loading
    if(isLoading) 
        tableContent = (
            <div className="tables-table-container overflow-x-auto relative border-t">
                <table className="tables-table w-full text-start divide-y table-auto">
                    {/* Table Header */}
                    <TableHeader 
                        data={tableHeader} />

                    {/* Table Content Body */}
                    <tbody className="whitespace-nowrap w-full divide-y">
                        {/* Show skeleton loaders when table data is loading */}
                        <tr className="table-row space-y-3">
                            <TableRowSkeleton limit={pageLimit} /> 
                        </tr>
                    </tbody>
                </table>
            </div>
        )

    // Display block if data exists
    if(orderedTableData.length && !isLoading)
        tableContent = (
            <>
                {/* Table Container */}
                <div className="tables-table-container overflow-x-auto relative border-t">
                    <table className="tables-table w-full text-start divide-y table-auto">
                        {/* Table Header */}
                        <TableHeader 
                            data={tableHeader}
                            changeTableDataOrder={changeTableDataOrder}
                        />

                        {/* Table Content Body */}
                        <tbody className={`${orderedTableData.length ? "divide-y" : ""} whitespace-nowrap`}>
                            {/* Display empty slate when table is empty or else show table data */}
                            {orderedTableData.map(({ id, ...tableDataProps }: any) => (
                                <tr className="tables-row transition hover:bg-gray-300/10" id={id} key={id}>
                                    {/* <td className="tables-checkbox-cell w-4 px-4 whitespace-nowrap">
                                        <FormCheckbox
                                            name="tableCheckbox"
                                            value={selectAllItemsCheckbox}
                                            onChange={({ target }) => setSelectAllItemsCheckbox(!target.value)}
                                        />
                                    </td> */}

                                    {/*<td className="tables-cell table-cell-id">
                                        <div className="tables-column-wrapper">
                                            <Link 
                                                className="w-full block text-start"
                                                href={{
                                                    pathname: `/dashboard/${type}/[id]/edit`,
                                                    query: {
                                                        id: id
                                                    }}}
                                                as={`${`/dashboard/${type}/${id}/edit`}`}
                                            >
                                                <div className="tables-text-column px-4 py-3">
                                                    <div className="inline-flex items-center space-x-1 font-noto_sans text-[.88rem] text-gray-900/80 rtl:space-x-reverse">
                                                        <span>
                                                            {id}
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </td>*/}

                                    {type === "posts" ? (
                                        <PostsTableRow 
                                            id={id}
                                            type={type}
                                            {...tableDataProps} 
                                        />   
                                    ) : type === "courses" ? (
                                        <CoursesTableRow 
                                            id={id}
                                            type={type}
                                            {...tableDataProps} 
                                        />
                                    ) : type === "users" ? (
                                        <UsersTableRow 
                                            href={{
                                                pathname: `/dashboard/${type}/[id]/edit`,
                                                query: {
                                                    id: id
                                                }
                                            }}
                                            as={`${`/dashboard/${type}/${id}/edit`}`}
                                            {...tableDataProps} 
                                        />
                                    ) : type === "roles" ? (
                                        <RowsTableRow 
                                            href={{
                                                pathname: `/dashboard/${type}/[id]/edit`,
                                                query: {
                                                    id: id
                                                }
                                            }}
                                            as={`${`/dashboard/${type}/${id}/edit`}`}
                                            {...tableDataProps} 
                                        />
                                    ) : type === "permissions" ? (
                                        <PermissionsTableRow 
                                            href={{
                                                pathname: `/dashboard/${type}/[id]/edit`,
                                                query: {
                                                    id: id
                                                }
                                            }}
                                            as={`${`/dashboard/${type}/${id}/edit`}`}
                                            {...tableDataProps}
                                        />
                                    ) : null}

                                    {/*<td className="tables-cell table-cell-id">
                                        <div className="tables-column-wrapper">
                                            <Link 
                                                className="w-full block text-start"
                                                href={{
                                                    pathname: `/dashboard/${type}/[id]/edit`,
                                                    query: {
                                                        id: id
                                                    }}}
                                                as={`${`/dashboard/${type}/${id}/edit`}`}
                                            >
                                                <div className="tables-text-column px-4 py-3">
                                                    <div className="inline-flex items-center space-x-1 text-[.88rem] font-noto_sans rtl:space-x-reverse justify-center gap-0.5 outline-none hover:underline focus:underline text-sm text-primary-600 hover:text-primary-500 tables-link-action">
                                                        <svg className="link-icon w-4 h-4 mr-1 rtl:ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                                                        </svg>        
                                                            Edit
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </td>*/}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Tables Pagination */}
                <div className="tables-pagination-container p-2 border-t">
                    <nav role="navigation" aria-label="Pagination Navigation" className="tables-pagination flex items-center justify-between">
                        <div className="hidden flex-1 items-center lg:grid grid-cols-3">
                            <div className="flex items-center">
                                <div className="pl-2 text-sm font-noto_sans font-medium">
                                    Showing 1 to {pageLimit} of {orderedTableData.length} results
                                </div>
                            </div>

                            <div className="flex items-center justify-center">
                                <div className="flex items-center gap-x-2 tables-pagination-records-per-page-selector rtl:space-x-reverse">
                                    <label>
                                        <select 
                                            className="h-8 text-sm pr-8 leading-none font-noto_sans font-medium transition duration-75 border-gray-400 rounded-lg shadow-sm outline-none focus:border-primary-500 focus:ring-1 focus:ring-inset focus:ring-primary-500"
                                            value={pageLimit}
                                            onChange={changePageLimit}
                                        >
                                                <option value="5">5</option>
                                                <option value="10">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="-1">All</option>
                                        </select>
                                    </label>
                                    
                                    <span className="text-sm font-noto_sans font-medium">
                                        per page
                                    </span>
                                </div>
                            </div>

                            {/* Pagination Buttons */}
                            <div className="flex items-center justify-end gap-x-2">
                                <button disabled={page === 1} onClick={handlePrevious}>{"< prev"}</button>
                                {Array(pageLimit).fill("").map((_, index) => (
                                    <span key={index} onClick={() => setPage(index)}>{index + 1}</span>
                                ))}
                                <button disabled={page === pageLimit} onClick={handleNext}>{"next >"}</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </>   
        )
    
    // Display block if data is empty
    if(!orderedTableData.length && state === "fetched")
        tableContent = (
            <TableEmptySlate 
                    isLoading={isLoading} 
                    type={type}
                />
        )

    return (
        <div className="tables border border-gray-400/50 shadow-sm bg-white rounded-xl font-noto_sans">
            {/* Table Header */}
            <div className="table-header">
                {/* ${tableDataDeleteList.length > 0 ? "justify-between" : "justify-end"} */}
                <div className="flex items-center justify-end p-2 h-14">
                    {/* {tableDataDeleteList.length > 0 && (<div className="flex items-center gap-2">Dropdown</div>)} */}

                    {/* Form Search */}
                    <div className="flex items-center justify-end w-full gap-2 md:max-w-md">
                            <div className="tables-search-container flex items-center justify-end flex-1">
                                <FormSearch />
                            </div>

                            {/* <Button 
                                type="button" 
                                role="filter-button"
                                classname="icon-button w-10 h-10 transition-colors hover:bg-gray-500/5 disabled:opacity-70 disabled:cursor-not-allowed disabled:pointer-events-none focus:bg-primary-500/10 text-primary-500 dark:hover:bg-gray-300/5"
                                style={{ 
                                    borderRadius: "50%", 
                                    minHeight: 0,
                                    padding: 0
                                }}
                            >
                                <span className="sr-only">
                                    Filter
                                </span>
                        
                                <svg  className="icon-button-icon w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                                </svg>
                            </Button> */}
                        </div>
                </div>
            </div>

            {/* Tables Selection Indicator */}
            <div className="tables-selection-indicator flex items-center bg-primary-500/10 px-4 py-2 whitespace-nowrap text-sm border-t dark:border-gray-700" style={{ display: 'none' }}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-spin inline-block w-4 h-4 mr-3 rtl:mr-0 rtl:ml-3 text-primary-500">
                    <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"></path>
                    <path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="currentColor"></path>
                </svg>
                                
                <div className="space-x-1">
                    <span className="dark:text-white text-[.85rem] text-gray-900 font-extralight">10 records selected.</span>

                    <span id="q80O7t4V487qP4tMrjsa.table.selection.indicator.record-count.19">
                        <button className="text-sm font-light text-primary-600">
                            Select all 19.
                        </button>
                    </span>

                    <span>
                        <button className="text-sm font-light text-primary-600">
                            Deselect all.
                        </button>
                    </span>
                </div>
            </div>

            {/* Display table content */}
            {tableContent}
        </div>
    )
}

export default Table