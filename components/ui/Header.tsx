import PencilIcon from "../icons/PencilIcon"
import Searchbar from "./Searchbar"

const Header = () => {
    return (
        <header className="py-[30px] px-[20px] flex gap-4 flex-wrap justify-between items-center">
            <h1 className="text-[#404D61] font-bold text-[24px] sm:text-[28px]">Data Table</h1>
            <div className="flex flex-wrap gap-[20px]  items-center" >
                <Searchbar />

                <button className="bg-[#5B6AD0] py-[13px] px-[20px] rounded-[10px] border border-[#5B6AD0] text-white  ">Add Employee</button>
                <button className=" flex justify-center items-center p-[13px] rounded-[10px] border border-[#E0E0E0] bg-[#FFF]">
                    <PencilIcon />
                </button>

            </div>
        </header >
    )
}
export default Header