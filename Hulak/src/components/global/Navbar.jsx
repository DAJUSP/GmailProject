import React from "react";
import { RxAvatar, RxHamburgerMenu } from "react-icons/rx";
import img from "../../assets/image/GmailLogo.jpg";
// import img0 from '../../assets/image/avatar.jpg'
import { CiSearch } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
	return (
		<div className="flex items-center justify-between space-x-3 mx-3">
			<div className="flex items-center gap-5 ">
				<div className="flex items-center gap-2">
					<div className="p-3 rounded-full hover:bg-gray-200 cursor-pointer">
						<RxHamburgerMenu size={"20px"} />
					</div>
					<img className="w-8" src={img} alt="gmail logo" />
					<h2 className="text-2xl font-medium text-gray-500">Hulak</h2>
				</div>
			</div>
			<div className="md:block hidden w-[50%] mr-60">
				<div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
					<CiSearch className="text-gray-700" />
					<input
						type="text"
						placeholder="search mail"
						className="rounded-full items-center w-full bg-transparent outline-none px-1"
					/>
				</div>
			</div>
			<div className="md-block ">
				<div className="flex items-center gap-2">
					<div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
						<CiCircleQuestion />
					</div>

					<div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
						<CiSettings size={"20px"} />
					</div>

					<div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
						<PiDotsNineBold size={"20px"} />
					</div>
					<div className="cursor-pointer">
						<RxAvatar src={img} size="34" />
					</div>
					<div className="cursor-pointer"></div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
