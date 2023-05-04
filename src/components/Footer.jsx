import React from "react";
import logo from "../imgs/logo/logo.svg";
import facebook from "../imgs/logo/facebook.svg";
import insta from "../imgs/logo/insta.svg";
import linkedin from "../imgs/logo/linkedin.svg";
import twitter from "../imgs/logo/twitter.svg";

const Footer = () => {
	const servicesData = [
		{ title: "Digital Marketing" },
		{ title: "Digital Strategy and transformation" },
		{ title: "UI/UX Design" },
		{ title: "Graphics Design" },
		{ title: "Insight and Data" },
		{ title: "Smart Operations" },
		{ title: "Smart Products" },
		{ title: "Infrastructure Services" },
		{ title: "App Development Maintenance Services" },
		{ title: "Testing Services" },
		{ title: "Intelligent Automation" },
		{ title: "Ecommerce" },
	];
	const expertisData = [
		{ title: "Web Application Developments" },
		{ title: "Mobile Application Developments" },
		{ title: "Enterprise Software Developments" },
		{ title: "Cross Platform Software Developments" },
		{ title: "Application Integration" },
		{ title: "QA And Testing" },
		{ title: "Dedicated Development Centers" },
		{ title: "Artificial Intelligence" },
		{ title: "Machine Learning" },
		{ title: "DevOps" },
	];
	const aboutUsData = [
		{ title: "About", link: "/" },
		{ title: "Blogs", link: "/" },
		{ title: "Clients", link: "/" },
		{ title: "Portfolio", link: "/" },
		{ title: "Career", link: "/" },
	];
	return (
		<div className="sm:px-20 px-10 py-[100px] grid xl:grid-cols-[auto_auto] grid-cols-1 md:gap-12 gap-6">
			<div className="sm:flex sm:justify-between flex-wrap gap-6">
				{/* SERVICES */}
				<div className="py-6 flex flex-col gap-6">
					<div>
						<span className="font-bold bg-gradient-to-r from-[#F05225] to-[#EEA820] text-transparent bg-clip-text">
							SERVICES
						</span>
					</div>
					{/* seperator line */}
					<div className="w-full h-[1px] bg-gradient-to-r from-white to-[#fff0]"></div>
					<div className="p-2">
						<ul className="list-disc list-inside flex flex-col gap-4">
							{servicesData.map((p, index) => {
								return (
									<li
										key={index}
										className="text-xs font-medium"
									>
										{p.title}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				{/* EXPERTISE */}
				<div className="py-6 flex flex-col gap-6">
					<div>
						<span className="font-bold bg-gradient-to-r from-[#F05225] to-[#EEA820] text-transparent bg-clip-text">
							EXPERTISE
						</span>
					</div>
					{/* seperator line */}
					<div className="w-full h-[1px] bg-gradient-to-r from-white to-[#fff0]"></div>
					<div className="p-2">
						<ul className="list-disc list-inside flex flex-col gap-4">
							{expertisData.map((p, index) => {
								return (
									<li key={index} className="text-xs">
										{p.title}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				{/* ABOUT US */}
				<div className="py-6 flex flex-col gap-6 mx-auto">
					<div>
						<span className="font-bold bg-gradient-to-r from-[#F05225] to-[#EEA820] text-transparent bg-clip-text">
							ABOUT US
						</span>
					</div>
					{/* seperator line */}
					<div className="min-w-[170px] h-[1px] bg-gradient-to-r from-white to-[#fff0]"></div>
					<div className="p-2">
						<ul className="list-disc list-inside flex flex-col gap-4">
							{aboutUsData.map((p, index) => {
								return (
									<li key={index} className="text-xs">
										<a href={p.link}>{p.title}</a>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
			{/* CONNECT */}
			<div className="flex flex-col items-center justify-center gap-10">
				<div className="flex flex-col gap-8">
					{/* row 1 heading*/}
					<div className="flex items-center gap-1">
						<div>
							<span className="font-light text-sm sm:text-xl">
								Let’s Connect with
							</span>
						</div>
						<div className="sm:w-auto w-[60%]">
							<img
								className="w-full"
								src={logo}
								alt="Pruthatek"
							/>
						</div>
					</div>
					{/* row 2 input */}
					<div className="bg-gradient-to-r from-[#505050CC] to-[#B3B3B300] p-[1px] rounded-lg">
						<div className="w-full bg-black rounded-lg">
							<div className="flex items-center justify-between rounded-lg bg-gradient-to-r from-[#D9D9D91A] to-[#D9D9D900]">
								<input
									className="bg-transparent w-full p-3 pr-10 outline-none"
									type="text"
									placeholder="Type Your Email here....!"
								/>
								{/* connect button */}
								<button className="rounded-md bg-gradient-to-r from-[#F05225] to-[#EEA820] py-1 px-2">
									Connect
								</button>
							</div>
						</div>
					</div>
				</div>
				{/* container 2 Follow on */}
				<div className="flex flex-col gap-8">
					{/* row 1 */}
					<div>
						<span className="font-medium text-xl bg-gradient-to-r from-[#D400A5] via-[#1F7ECB] to-[#2ED6E3] text-transparent bg-clip-text">
							Follow on
						</span>
					</div>
					{/* row 2 */}
					<div className="flex items-center justify-center gap-9">
						<div>
							<a href="/">
								<img src={facebook} alt="Facebook" />
							</a>
						</div>
						<div>
							<a href="/">
								<img src={insta} alt="Instagram" />
							</a>
						</div>
						<div>
							<a href="/">
								<img src={linkedin} alt="Linkedin" />
							</a>
						</div>
						<div>
							<a href="/">
								<img src={twitter} alt="Twitter" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
