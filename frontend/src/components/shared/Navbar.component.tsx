import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import ProfilePic from "../../assets/profile-img.jpg"

const Navbar : React.FC = () => {
    return (
        <div className="w-full h-12 border-b border-secondary bg-primary sticky top-0 z-50">
            <div className="h-full flex items-center justify-between py-0 px-5">
                <div className="">
                    <span className="font-bold text-3xl text-tPrimary">
                        AdminDash
                    </span>
                </div>
                <div className="flex items-center">
                    <div className="relative text-tPrimary cursor-pointer mr-2">
                        <Language/>
                        <div className="w-4 h-4 absolute -top-1 right-0 bg-secondary text-tPrimary rounded-full flex items-center justify-center text-[10px]">4</div>
                    </div>
                    <div className="relative text-tPrimary cursor-pointer mr-2">
                        <NotificationsNone/>
                        <div className="w-4 h-4 absolute -top-1 right-0 bg-secondary text-tPrimary rounded-full flex items-center justify-center text-[10px]">3</div>
                    </div>
                    <div className="relative text-tPrimary cursor-pointer mr-2">
                        <Settings/>
                    </div>
                    <img className="w-10 h-10 rounded-full cursor-pointer" src={ProfilePic} alt="profile img here" />
                </div>
            </div>
        </div>
    )
}

export default Navbar