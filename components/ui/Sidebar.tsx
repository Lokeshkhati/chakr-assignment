import { classNames } from "@/utils"
import AnalyticsIcon from "../icons/AnalyticsIcon"
import CalenderIcon from "../icons/CalenderIcon"
import CryptoIcon from "../icons/CryptoIcon"
import DataTableIcon from "../icons/DataTableIcon"
import MenuIcon from "../icons/MenuIcon"
import Messenger from "../icons/Messenger"
import ProductIcon from "../icons/ProductIcon"
import SearchIcon from "../icons/SearchIcon"
import SignOutIcon from "../icons/SignOutIcon"
import SupportIcon from "../icons/SupportIcon"
import Profile from "./Profile"
import CancelIcon from "../icons/CancelIcon"

const Sidebar = () => {

    const navigation = [
        {
            name: 'Search',
            icon: <SearchIcon />

        },
        {
            name: 'Data Table',
            icon: <DataTableIcon />
        },
        {
            name: 'Product',
            icon: <ProductIcon />
        },
        {
            name: 'Analytics',
            icon: <AnalyticsIcon />
        },
        {
            name: 'Calender',
            icon: <CalenderIcon />
        },
        {
            name: 'Messenger',
            icon: <Messenger />
        },
        {
            name: 'Crypto',
            icon: <CryptoIcon />
        },

    ]

    const userNavigation = [
        {
            name: 'Support ',
            icon: <SupportIcon />
        },
        {
            name: 'Sign Out ',
            icon: <SignOutIcon />
        },
    ]

    return (
        <aside className=' text-[#757D8A] text-sm py-[30px] px-[20px] h-screen sticky top-0 w-[250px] bg-[#F1F2F6]'>
            <div className="flex flex-col gap-10">
                <Profile />
                <ul className="flex flex-col gap-4">
                    {
                        navigation.map((item) => <li key={item.name} className={classNames(item.name === "Data Table" ? "bg-white rounded" : null, '  py-[10px] px-[15px] flex  justify-between items-center')}>

                            <div className='flex gap-4 items-center'>
                                <span>{item.icon} </span>
                                <span>{item.name} </span>
                            </div>
                            <MenuIcon />
                        </li>)
                    }
                </ul>
            </div>
            <ul className="mt-[110px]">
                {
                    userNavigation.map((item) => <li key={item.name} className='flex  gap-6 items-center py-[10px] px-[15px] '>
                        <span>{item.icon} </span>
                        <span>{item.name} </span>
                    </li>)
                }
            </ul>
        </aside>
    )
}
export default Sidebar