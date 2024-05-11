'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Toaster, toast } from "react-hot-toast";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Navbar from '@/components/ui/Navbar';
import Autoplay from 'embla-carousel-autoplay';
import hero1 from '@/assets/hero-1.svg';
import doc from '@/assets/Doctor.svg';
import lab from '@/assets/Labs.svg';
import ambulance from '@/assets/Ambulance.svg';
import primary from '@/assets/Stethoscope.svg';
import blood from '@/assets/Blood-Sample.svg';
import check from '@/assets/check.svg';
import hand from '@/assets/caring_hand.svg';
import hospital from '@/assets/Hospital.svg';
import logo from '@/assets/logo.svg';

export default function Home() {
	const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
	const checkJustLogin = () => {
		console.log("outtttt");
		if(localStorage["log"]=="1"){
			toast.success("User logged in successfully!", {
				duration:3000,
				position: "bottom-right"
			});
			// console.log("heeeeeeeeeeeeeelo");
			localStorage["log"]="0";
		}
		if(localStorage["log"]=="-1"){
			toast.success("User logged out successfully!", {
				duration: 3000,
				position: "bottom-right"
			});

			localStorage["log"]="0";
		}
	}
	useEffect(() => {
		checkJustLogin();
	},[])
	return (
		<>
			<Navbar />
			<main className="flex min-h-screen max-w-screen flex-col items-center justify-between p-24 bg-[#171717]">
				<Carousel
					opts={{
						align: 'start',
						loop: true,
					}}
					plugins={[plugin.current]}
					className="max-w-screen flex justify-around items-center px-10"
				>
					<CarouselContent>
						<CarouselItem key={1} className="flex justify-around items-center">
							<div className="flex-col">
								<h1 className="text-[#D9D9D9] text-xl">
									Skip the travel! Take Online
								</h1>
								<h1 className="text-[#FFFFFF] text-5xl font-bold">
									Doctor <span className="text-[#2AA7FF]">Consultation</span>
								</h1>
								<h1 className="text-lg text-[#D9D9D9] my-2">
									Tired of waiting for medical supervision?
									<br /> Connect with out 24x7 specialist clinical AI
								</h1>
								<Button className="bg-[#FFFFFF] text-[#2AA8FF] my-5">
									Consult Now
								</Button>
							</div>
							<div>
								<Image src={hero1} alt="care" width={450} />
							</div>
						</CarouselItem>
						<CarouselItem key={2} className="flex justify-around items-center">
							<div>
								<Image src={hero1} alt="care" width={450} />
							</div>
							<div className="flex-col">
								<h1 className="text-[#D9D9D9] text-xl">Accurate AI Model</h1>
								<h1 className="text-[#FFFFFF] text-5xl font-bold">
									Get Detailed <span className="text-[#2AA7FF]">Report</span>
								</h1>
								<h1 className="text-lg text-[#D9D9D9] my-2">
									Tired of waiting for medical supervision?
									<br /> Connect with out 24x7 specialist clinical AI
								</h1>
								<Button className="bg-[#FFFFFF] text-[#2AA8FF] my-5">
									Upload Now
								</Button>
							</div>
						</CarouselItem>
						<CarouselItem key={3} className="flex justify-around items-center">
							<div className="flex-col">
								<h1 className="text-[#D9D9D9] text-xl">
									Sickbay with appropriate results
								</h1>
								<h1 className="text-[#FFFFFF] text-5xl font-bold">
									Unsure <span className="text-[#2AA7FF]">Symptoms?</span>
								</h1>
								<h1 className="text-lg text-[#D9D9D9] my-2">
									Tired of waiting for medical supervision?
									<br /> Connect with out 24x7 specialist clinical AI
								</h1>
								<Button className="bg-[#FFFFFF] text-[#2AA8FF] my-5">
									Chat Now
								</Button>
							</div>
							<div>
								<Image src={hero1} alt="care" width={450} />
							</div>
						</CarouselItem>
					</CarouselContent>
				</Carousel>
				<Toaster position='bottom-right'/>
				<div className="flex-col mb-10 max-w-screen">
					<h2 className="text-[#2AA8FF] text-lg flex justify-center">
						You may be looking for
					</h2>
					<div className="flex justify-around items-center flex-wrap my-10 gap-x-10">
						<Card className="bg-[#222222] border-none px-5">
							<CardHeader className="px-10">
								<Image src={doc} alt="doctor" width={80} />
								<CardTitle className="text-[#2AA7FF] pt-4 text-center">Doctor</CardTitle>
							</CardHeader>
						</Card>
						<Card className="bg-[#222222] border-none flex px-5 flex-col justify-center items-center">
							<CardHeader className="px-10 flex justify-center">
								<Image src={lab} alt="lab" width={80} className='' />
								<CardTitle className="text-[#2AA7FF] pt-4 text-center">Labs</CardTitle>
							</CardHeader>
						</Card>
						<Card className="bg-[#222222] border-none flex justify-center">
							<CardHeader className="px-10">
								<Image src={ambulance} alt="ambulance" width={80} className='ml-5' />
								<CardTitle className="text-[#2AA7FF] pt-4 text-center">Ambulance</CardTitle>
							</CardHeader>
						</Card>
					</div>
				</div>
				<div className="my-10">
					<h1 className="text-4xl mb-10 font-bold text-[#44B1FF] flex justify-center item-center">
						Our Chatbot&apos;s Compatibility
					</h1>
					<div className="flex justify-around items-center gap-x-10">
						<Card className="bg-[#222222] border-none">
							<CardHeader className="w-full px-10 flex justify-start items-center">
								<div className="bg-[#CBE4F4] rounded-full">
									<Image
										src={primary}
										alt="doctor"
										width={50}
										className="p-3"
									/>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-sm  text-[#44B1FF]">01</p>
								<p className="text-[#44B1FF] text-lg font-semibold">
									Primary Care
								</p>
							</CardContent>
						</Card>
						<Card className="bg-[#222222] border-none">
							<CardHeader className="w-full px-10 flex justify-start items-center">
								<div className="bg-[#CBE4F4] rounded-full">
									<Image src={blood} alt="test" width={50} className="p-3" />
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-sm ml-3 text-[#44B1FF]">02</p>
								<p className="text-[#44B1FF] px-3 text-lg font-semibold">
									Blood Test
								</p>
							</CardContent>
						</Card>
						<Card className="bg-[#222222] border-none">
							<CardHeader className="w-full px-10 flex justify-start items-center">
								<div className="bg-[#CBE4F4] rounded-full">
									<Image
										src={primary}
										alt="doctor"
										width={50}
										className="p-3"
									/>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-sm ml-1 text-[#44B1FF]">01</p>
								<p className="text-[#44B1FF] px-1 text-lg font-semibold">
									Primary Care
								</p>
							</CardContent>
						</Card>
						<Card className="bg-[#222222] border-none">
							<CardHeader className="w-full px-10 flex justify-start items-center">
								<div className="bg-[#CBE4F4] rounded-full">
									<Image
										src={primary}
										alt="doctor"
										width={50}
										className="p-3"
									/>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-[#44B1FF]">01</p>
								<p className="text-[#44B1FF] text-lg font-semibold">
									Primary Care
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
				<div className="max-w-screen w-screen flex justify-around items-center">
					<Image src={doc} alt="image" width={500}></Image>
					<div>
						<p className="text-white text-base font-semibold">
							/Connecting Communities for Progress
						</p>
						<h1 className="text-[#2AA7FF] text-4xl font-bold mb-4">
							Enhanced Rural Access
						</h1>
						<p className="text-[#D9D9D9] text-sm break-words">
							Our goal is to deliver quality of care in a courteous, respectful,
							<br /> and compassionate manner. We hope you will allow us to care
							<br /> for you and strive to be the first and best choice for
							healthcare.
						</p>
						<div className="my-10 flex-col gap-y-4">
							<div className="flex justify-start gap-x-2 text-white text-sm my-2">
								<Image src={check} alt="bullet" />
								<div>Stay Updated About Your Health</div>
							</div>
							<div className="flex justify-start gap-x-2 text-white text-sm my-2">
								<Image src={check} alt="bullet" />
								<div>Check your reports online with Sickbay.ai</div>
							</div>
							<div className="flex justify-start gap-x-2 text-white text-sm my-2">
								<Image src={check} alt="bullet" />
								<div>No long queues and No wait time.</div>
							</div>
						</div>
					</div>
				</div>
				<div className="max-w-screen w-screen flex justify-around items-center my-10 px-10 gap-x-10">
					<div className="w-[40vw]">
						<p className="text-white text-base font-semibold">
							/CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
						</p>
						<h1 className="text-[#2AA7FF] text-4xl font-bold mb-4">
							Numbers that Build Trust
						</h1>
						<p className="text-[#D9D9D9] text-sm break-words">
							We will work with you to develop individualised care plans,
							including management of chronic diseases. If we cannot assist, we
							can provide referrals or advice about the type of practitioner you
							require. We treat all enquiries sensitively and in the strictest
							confidence.
						</p>
					</div>
					<div className="flex justify-around items-center flex-wrap gap-10">
						<Card className="bg-[#222222] border-none">
							<CardHeader className="px-10">
								<div className="flex justify-center">
									<Image
										src={hand}
										alt="doctor"
										width={80}
										className="bg-[#EBF7FF] rounded-full p-3 flex justify-center"
									/>
								</div>

								<CardTitle className="text-[#2AA7FF] pt-4 flex justify-center items-center">
									5000+
								</CardTitle>
								<CardContent className="text-[#D9D9D9] text-sm">
									Happy Patients
								</CardContent>
							</CardHeader>
						</Card>
						<Card className="bg-[#222222] border-none">
							<CardHeader className="px-10">
								<div className="flex justify-center">
									<Image
										src={hospital}
										alt="doctor"
										width={80}
										className="bg-[#FFF2F0] rounded-full p-3 flex justify-center"
									/>
								</div>
								<CardTitle className="text-[#2AA7FF] pt-4 flex justify-center">
									200+
								</CardTitle>
								<CardContent className="text-[#D9D9D9] text-sm">
									Hospitals
								</CardContent>
							</CardHeader>
						</Card>
						<Card className="bg-[#222222] border-none">
							<CardHeader className="px-10">
								<div className="flex justify-center">
									<Image
										src={lab}
										alt="doctor"
										width={80}
										className="bg-[#FFF7E6] rounded-full p-3 flex justify-center text-red-700"
									/>
								</div>
								<CardTitle className="text-[#2AA7FF] pt-4 flex justify-center">
									1000+
								</CardTitle>
								<CardContent className="text-[#D9D9D9] text-sm">
									Laboratories
								</CardContent>
							</CardHeader>
						</Card>
					</div>
				</div>
			</main>
		</>
	);
}
