import CancelIcon from "../icons/CancelIcon"
import Sidebar from "./Sidebar"


const MobileNav = ({ closeMenu }: { closeMenu: () => void }) => {
    return (
        <div className=' fixed lg:hidden'>
            <button onClick={closeMenu} className=' z-[100] absolute top-1 right-1 lg:hidden'>
                <CancelIcon />
            </button>
            <Sidebar />
        </div>
    )
}
export default MobileNav