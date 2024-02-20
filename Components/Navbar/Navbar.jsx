import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { RiBuildingLine } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import SubNavbar from "./SubNavbar";

const Navbar = () => {
    return (
       <div>
         <div className="flex gap-4">
            <div className="flex-1">
                <h1 className="font-bold text-2xl flex items-center text-red-600">OYO</h1>
            </div>
            <div className="flex-1">
                <div className="flex p-6 gap-4 items-center">
                    <div><h1 className="text-3xl"><PiSuitcaseSimpleLight></PiSuitcaseSimpleLight></h1></div>
                    <div>
                        <h1 className="text-xl">OYO for Business</h1>
                        <p className="text-sm">Trusted by 5000 Corporates</p>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <div className="flex p-6 gap-4 items-center">
                    <div className=""><h1 className="text-3xl"><RiBuildingLine></RiBuildingLine></h1></div>
                    <div>
                        <h1 className="text-xl">List your property</h1>
                        <p className="text-sm">Start earning in 30 mins</p>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <div className="flex p-6 items-center gap-4">
                    <div><h1 className="text-3xl"><FaPhoneAlt></FaPhoneAlt></h1></div>
                    <div>
                        <h1 className="text-xl">+8801878265664</h1>
                        <p className="text-sm">Call us to Book now</p>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <div className="flex p-6 items-center gap-4">
                    <div>
                        <h1 className="text-xl">English</h1>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <div className="flex p-6 items-center gap-4">
                <div className=""><h1 className="text-3xl"><FaPhoneAlt></FaPhoneAlt></h1></div>
                    <div>
                        <h1 className="text-xl">Login/Singup</h1>
                    </div>
                </div>
            </div>
        </div>
        <SubNavbar></SubNavbar>
       </div>
    );
};

export default Navbar;