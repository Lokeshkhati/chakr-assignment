import CancelIcon from "../icons/CancelIcon"
import LargeSearchIcon from "../icons/LargeSearchIcon"

const Searchbar = () => {
    return (
        <div className="w-full sm:w-[470px] flex gap-2 bg-[#FFF] border border-[#5B6AD0] ring-4 ring-[#E2E6FF] rounded-[10px] px-[10px] sm:px-[15px] py-[6px] sm:py-[10px]">

            <LargeSearchIcon />
            <input type="text" placeholder="Employee" value='' className="w-full outline-none" />
            <CancelIcon />
        </div>
    )
}
export default Searchbar