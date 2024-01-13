'use client'
import { classNames } from "@/utils"
import SmallPencilIcon from "../icons/SmallPencilIcon"
import DeleteIcon from "../icons/DeleteIcon"
import user from '../../images/user.svg'
import Image from "next/image"
import ArrowDownIcon from "../icons/ArrowDownIcon"
import { useState } from "react"
import { tableData } from "@/constants"


const DataTable = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const ITEMS_PER_PAGE = 10

    const totalNoOfPages = tableData.length / ITEMS_PER_PAGE
    const pages = Array.from({ length: totalNoOfPages }).fill(null);

    const nextPageHandler = () => {
        setCurrentPage((currentPage) => currentPage + 1);
    };
    const prevPageHandler = () => {
        setCurrentPage((currentPage) => currentPage - 1);
    };


    return (
        <div className=" px-[20px] py-[25px]">
            <div className="overflow-x-auto ">
                <table className="min-w-full  ">
                    <thead className="text-[#B1B1B1] text-sm">
                        <tr>
                            <th className='text-left py-3 pl-2'>
                                <div className="flex gap-2 items-center">
                                    <span>
                                        Name
                                    </span>
                                    <ArrowDownIcon color="#B1B1B1" />
                                </div>
                            </th>
                            <th className='  text-left py-3 pl-2'>
                                <div className="flex gap-2 items-center">
                                    <span>
                                        Email
                                    </span>
                                    <ArrowDownIcon color="#B1B1B1" />
                                </div>
                            </th>
                            <th className='text-left py-3 pl-2'>
                                <div className="flex gap-2 items-center">
                                    <span>
                                        Status
                                    </span>
                                    <ArrowDownIcon color="#B1B1B1" />
                                </div>
                            </th>
                            <th className='  text-left py-3 pl-2'>
                                <div className="flex gap-2 items-center">
                                    <span>
                                        Role
                                    </span>
                                    <ArrowDownIcon color="#B1B1B1" />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-[#404D61] text-[16px]">
                        {
                            tableData?.slice((currentPage - 1) * ITEMS_PER_PAGE,
                                currentPage * ITEMS_PER_PAGE).map((item, i) => <tr key={item.name}
                                    className={classNames(i % 2 === 0 ? "bg-[#F8F8F8]" : "bg-white")}
                                >
                                    <td className='whitespace-nowrap px-3 py-4'>
                                        <div className='flex gap-4 items-center'>
                                            <Image src={user} alt="" height={30} width={30} />
                                            <span>{item.name} </span>
                                        </div>
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4  text-left  pl-2'>{item.email} </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-left  pl-2'>{item.status} </td>
                                    <td className="whitespace-nowrap px-3 py-4">{item.role} </td>
                                    <td className="whitespace-nowrap px-3 py-4">
                                        <SmallPencilIcon />
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4">
                                        <DeleteIcon />
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {/* pagination */}
            <div className="mt-6 hidden sm:flex sm:justify-center" >
                <div className='flex gap-4 items-center'>
                    {currentPage > 1 && <button onClick={prevPageHandler}>Prev</button>}
                    <div className='flex gap-2 items-center'>
                        {
                            pages?.map((_, i) => {
                                i += 1
                                return (
                                    <button key={i} onClick={() => setCurrentPage(i)} className={classNames(currentPage === i ? "bg-blue-500" : "bg-white", 'border border-gray-900 w-8 h-8  rounded')}  >{i} </button>
                                )
                            })
                        }
                    </div>
                    {totalNoOfPages !== currentPage && <button onClick={nextPageHandler}>Next</button>}
                </div>
            </div>
            <div className="mt-8 flex flex-1 justify-between sm:hidden">
                <button onClick={prevPageHandler} className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0" >Previous</button>

                <button onClick={nextPageHandler} className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0" >Next</button>
            </div>
        </div >
    )
}
export default DataTable









