import Image from "next/image"
import user from '../../images/user.svg'
import SettingIcon from "../icons/SettingIcon"
const Profile = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <Image src={user} alt="user" width={40} height={40} />
                <div>
                    <span className="text-[#5A6474] text-[12px]">Welcome back,</span>
                    <h2 className="font-medium text-[#404D61] text-lg"> Drax</h2>
                </div>

            </div>
            <button className=" flex justify-center items-center w-[50px] h-[40px] rounded border border-[#E0E0E0] bg-[#FFF]">
                <SettingIcon />
            </button>
        </div>
    )
}
export default Profile