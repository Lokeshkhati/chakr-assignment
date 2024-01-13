import ArrowLeftIcon from "../icons/ArrowLeftIcon"
import ArrowRightIcon from "../icons/ArrowRightIcon"
import FilterIcon from "../icons/FilterIcon"
import SortIcon from "../icons/SortIcon"

const Filters = () => {
    return (
        <div className="py-[30px] px-[20px] flex gap-4 flex-wrap justify-between items-center">
            <div>
                <h2 className="text-[#404D61] text-[24px] font-medium">Employee</h2>
                <span className="text-[16px] text-[#757D8A]">18 results found</span>
            </div>
            <div className="flex flex-wrap  gap-[20px]">
                <button className=" flex justify-center items-center py-[10px] px-[20px] rounded-[10px] border border-[#E0E0E0] bg-[#FFF]">
                    <FilterIcon />
                </button>
                <button className=" flex justify-center items-center py-[10px] px-[20px] rounded-[10px] border border-[#E0E0E0] bg-[#FFF]">
                    <SortIcon />
                    <span className="font-sm text-[#757D8A]">
                        Sort :Chronological
                    </span>

                </button>
                <button className=" flex gap-2  justify-center items-center py-[10px] px-[20px] rounded-[10px] border border-[#E0E0E0] bg-[#FFF]">
                    <ArrowLeftIcon />
                    <span className="font-sm text-[#757D8A]">
                        August, 2021
                    </span>
                    <ArrowRightIcon />
                </button>
            </div>
        </div>
    )
}
export default Filters
