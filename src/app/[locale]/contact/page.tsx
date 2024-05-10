'use client';

import { useRef, useState } from 'react';
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
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/ui/Navbar"

import blood from '@/assets/Blood-Sample.svg';
import axios from 'axios';


export default function Contact() {
    const[contact, setContact] = useState<any>({
        first:"",
        last:"",
        email:"",
        subject:"",
        message:"",
    });

    const sendForm = async(e:any) => {
        e.preventDefault();
        try {
            console.log("hello");
            const response = await axios.post("http://localhost:4000/api/contact", contact)
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }
	return (
		<div>
			<Navbar />
			<div className="min-h-screen max-w-screen p-24 bg-[#171717]">
				<h1 className='text-lg text-white flex justify-center my-2'>GOT A&nbsp;<span className="text-[#2AA7FF]">QUESTION</span>?</h1>
                <h1 className="text-5xl text-white font-semibold flex justify-center">Contact&nbsp;<span className="text-[#2AA7FF]">Sickbay.ai</span></h1>
                <p className="text-base text-white my-5 flex justify-center">We are here to answer any question you might have. We look forward to hearing from you!</p>
				<div className="p-10 rounded-2xl bg-[#222222] shadow-md">
                    <Card className="border-none bg-transparent">
                        <CardHeader className='flex-col justify-center items-center'>
                            <CardTitle className="text-white">Contact Us</CardTitle>
                            <CardDescription className="text-white">
                                Fill all the fields to start your journey!
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">  
                            <div className="flex justify-start items-center w-full gap-x-4">
                                <div className="space-y-1 w-[40vw]">
                                    <Label htmlFor="first" className="text-white">First Name</Label>
                                    <Input id="first" placeholder="Enter first name" className=" bg-[#171717] rounded-2xl text-white border-none" value={contact.first} onChange={(e) => setContact({...contact, first:e.target.value})} required/>
                                </div>
                                <div className="space-y-1 w-[40vw]">
                                    <Label htmlFor="last" className="text-white">Last Name</Label>
                                    <Input id="last" placeholder="Enter last name" className=" bg-[#171717] rounded-2xl text-white border-none" value={contact.last} onChange={(e) => setContact({...contact, last:e.target.value})} required/>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email" className="text-white">Email</Label>
                                <Input id="email" placeholder="Enter email" className=" bg-[#171717] rounded-2xl text-white border-none" value={contact.email} onChange={(e) => setContact({...contact, email:e.target.value})} required/>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="subject" className="text-white">Email</Label>
                                <Input id="subject" placeholder="Enter subject" className=" bg-[#171717] rounded-2xl text-white border-none" value={contact.subject} onChange={(e) => setContact({...contact, subject:e.target.value})} required/>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="message" className="text-white">Message</Label>
                                <Textarea id="message" placeholder="Enter message" className=" bg-[#171717] rounded-2xl text-white border-none" value={contact.message} onChange={(e) => setContact({...contact, message:e.target.value})} required/>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button type="submit" onClick={sendForm} className='bg-[#1A3C80] text-white hover:bg-[#2AA7FF] hover:text-[#1A3C80] font-semibold'>Send Message</Button>
                        </CardFooter>
                    </Card>
                </div>
			</div>
		</div>
	);
}
