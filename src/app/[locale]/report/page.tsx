import Navbar from '@/components/ui/Navbar';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import doctors from '../../../assets/undraw_doctors.svg';
import upload from '../../../assets/upload.png';
import ai from '../../../assets/ai.png';
import medicine from '../../../assets/medicine.svg';
import heart from '../../../assets/heart-issue.svg';
import plan from '../../../assets/treatment-plans.svg';
import peace from '../../../assets/peace-of-mind.svg';
import FileUploader from '@/components/ui/FileUploader';

export default function Report() {
	return (
		<>
			<Navbar />
			<main className="bg-[#171717] max-w-screen w-screen min-h-screen">
			
				
				<div className="py-10 bg-[#222222] flex justify-around items-center px-10">
					<Image src={medicine} alt="medicine" width={450} className="p-5" />
					<div>
						<h1 className="text-[#44B1FF] text-3xl mb-5 font-bold">
							How It Helps You
						</h1>
						<div className="flex justify-start gap-x-5 mb-5">
							<div className="bg-[#EFDDDE] rounded-full p-2">
								<Image src={heart} alt="heart" width={25} />
							</div>
							<div>
								<h1 className="text-white font-semibold text-base">
									Uncover hidden health patterns using OCR technology
								</h1>
								<h1 className="text-[#CDCDCD] text-xs mt-1">
									Go Beyond human opinions to detect potential health issues
									early on.
								</h1>
							</div>
						</div>
						<div className="flex justify-start gap-x-5 mb-5">
							<div className="bg-[#EFDDDE] rounded-full p-2">
								<Image src={plan} alt="heart" width={25} />
							</div>
							<div>
								<h1 className="text-white font-semibold text-base">
									Optimized treatment plans.
								</h1>
								<h1 className="text-[#CDCDCD] text-xs mt-1">
									Get your hands on an optimized treatment plan given by our own
									chatbot.
								</h1>
							</div>
						</div>
						<div className="flex justify-start gap-x-5">
							<div className="bg-[#EFDDDE] rounded-full p-2">
								<Image src={peace} alt="heart" width={25} />
							</div>
							<div>
								<h1 className="text-white font-semibold text-base">
									Gain peace of mind
								</h1>
								<h1 className="text-[#CDCDCD] text-xs mt-1">
									Get the complete package from risks to treatment.
								</h1>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-around items-center py-20 px-10 gap-x-10 h-[100vh]">
					<div className="bg-[#222222] p-10 rounded-md w-[40vw] h-full">
						<h1 className="text-[#2AA8FF] text-lg font-semibold">
							Upload Lab Report 
						</h1>
						<h2 className="text-[#D9D9D9] text-sm">
							Please attach a lab report to proceed
						</h2>
						<FileUploader />
					</div>
					<div className="bg-[#222222] p-10 rounded-md w-[40vw] h-full flex flex-col">
						<h1 className="text-[#2AA8FF] text-lg font-semibold">
							Guide to upload a Lab Report
						</h1>
						<div className="flex justify-around items-center mt-5 flex-grow">
							<Image src={doctors} alt="doc" width={240} />
							<div className="text-[#D9D9D9] text-sm flex-col justify-start gap-y-10 font-semibold">
								<ul>
									<li className="my-5">The report must be in pdf format</li>
									<li className="my-5">No MRI or X-rays</li>
									<li className="my-5">Blood and urine tests are allowed</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="py-10">
					<h1 className="flex justify-center items-center font-bold text-4xl text-[#44B1FF] mb-10">
						How It Works?
					</h1>
					<div className="flex justify-around items-center ">
						<Card className="bg-[#222222] border-none">
							<CardTitle className="flex justify-center items-center">
								<div className="h-[25vh]">
									<Image
										src={upload}
										alt="upload"
										width={100}
										className="py-5"
									/>
								</div>
							</CardTitle>
							<CardContent className="bg-[#1B3C74] py-4">
								<h1 className="text-[#2AA8FF] text-lg font-semibold">
									Upload Your Report
								</h1>
								<h1 className="text-[#D9D9D9] text-xs">
									Securely upload your lab report in a digital format.
								</h1>
							</CardContent>
						</Card>
						<Card className="bg-[#222222] border-none">
							<CardTitle className="flex justify-center items-center">
								<div className="h-[25vh] flex justify-center items-center">
									<Image src={ai} alt="upload" width={250} className="py-5" />
								</div>
							</CardTitle>
							<CardContent className="bg-[#1B3C74] py-4">
								<h1 className="text-[#2AA8FF] text-lg font-semibold">
									Instant AI Analysis
								</h1>
								<h1 className="text-[#D9D9D9] text-xs">
									Get the risks and its respective preventions in one go.
								</h1>
							</CardContent>
						</Card>
					</div>
				</div>
				
			</main>
		</>
	);
}
