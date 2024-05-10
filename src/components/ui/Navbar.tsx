import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.svg';
import avatar from "@/assets/avatar-male.svg"

export default function Navbar() {
	const [isUser, setIsUser] = useState<boolean>(false);
	useEffect(() => {
		if(localStorage["token"]) setIsUser(true);
	},[]);

	return (
		<>
			<nav className="max-w-screen h-8 inset-x-0 z-50 bg-[#2AA7FF] text-white shadow-sm flex justify-center items-center">
				<div className="text-xs tracking-widest">
					The health and well-being of our patients and their health care team
					will always be our priority, so we follow the best practices for
					cleanliness.
				</div>
			</nav>
			<nav className="max-w-screen w-screen z-50 sticky top-0 bg-gradient-to-r from-[#162D59] to-[#1A3C80] shadow-sm dark:bg-gray-950/90">
				<div className="max-w-screen">
					<div className="flex max-w-screen justify-around h-14 items-center">
						<Link className="flex items-center" href="/">
							<Image src={logo} alt="logo" width={120} />
							<span className="sr-only">Acme Inc</span>
						</Link>
						<div className="flex justify-around items-center gap-x-10">
							<nav className="hidden md:flex gap-4 text-white">
								<Link
									className="font-medium flex items-center text-sm transition-colors hover:underline"
									href="/"
								>
									Home
								</Link>
								<Link
									className="font-medium flex items-center text-sm transition-colors hover:underline"
									href="/report"
								>
									Report
								</Link>
								<Link
									className="font-medium flex items-center text-sm transition-colors hover:underline"
									href="/chatapp"
								>
									ChatApp
								</Link>
								<Link
									className="font-medium flex items-center text-sm transition-colors hover:underline"
									href="/contact"
								>
									Contact
								</Link>
							</nav>
							<div className="flex items-center gap-4">
								{isUser && <Link href="/history">
									<Image src={avatar} alt='avatar' className='rounded-full h-10'/>
									</Link>}
								{!isUser && <Link href="/login">
									<Button size="sm" className="bg-[#2AA8FF] text-white">Signup / Login</Button>
								</Link>}
								
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
