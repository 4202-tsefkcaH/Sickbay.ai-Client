"use client"
import Navbar from "@/components/ui/Navbar";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { useRouter } from "next/navigation";
  import { Button } from "@/components/ui/button";
  import axios from "axios";
import { useEffect } from "react";


const History = () => {
  const router = useRouter();

    const logOut = () => {
        localStorage.clear();
        localStorage["log"]="-1";
        router.push("/");
    }

    const getUser = async () => {
      const id = localStorage["id"];
      const response:any = await axios.post("http://localhost:4000/api/getUser", {id});
      console.log(response);
    }

    useEffect(()=>{
      getUser();
    },[])
	return (
		<div className="min-h-[100vh] w-[100vw] bg-[#171717]">
			<Navbar/>
            <main className="py-10 ">
                <div className="m-10 p-10 bg-[#222222] rounded-2xl flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl text-white font-semibold m-2"><span className="text-[#44B1FF]">Name:</span> Ratul Saha</h1>
                        <h1 className="text-2xl text-white font-semibold m-2"><span className="text-[#44B1FF]">Email:</span> cs.ratul03@gmail.com</h1>
                    </div>
                    <div className="flex justify-around items-center gap-10">
                        {/* <Button className="bg-[#2AA7FF] text-white p-4 rounded-lg">change password</Button> */}
                        <Button onClick={logOut} className="bg-[#2AA7FF] text-white p-4 rounded-lg">log out</Button>
                    </div>
                    
                </div>
                <div className="m-10 p-10 bg-[#222222] rounded-2xl">
                <Table>
      <TableCaption>A list of your recent medical history.</TableCaption>
      <TableHeader className="bg-[#1A3C80] border-none">
        <TableRow>
          <TableHead className="text-white">Report</TableHead>
          <TableHead className="text-white">Condition</TableHead>
          <TableHead className="text-white">Suggestion</TableHead>
          {/* <TableHead className="text-right">Amount</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* {invoices.map((invoice) => ( */}
          <TableRow className="hover:bg-[#2AA7FF] bg-[#171717]">
            <TableCell className=" text-white font-semibold">report1.jpg</TableCell>
            <TableCell className="text-white">cancer</TableCell>
            <TableCell className="text-white">chemo</TableCell>
            {/* <TableCell className="text-right">{invoice.totalAmount}</TableCell> */}
          </TableRow>
        {/* ))} */}
        <TableRow className="hover:bg-[#2AA7FF] bg-[#171717]">
            <TableCell className=" text-white font-semibold">report1.jpg</TableCell>
            <TableCell className="text-white">cancer</TableCell>
            <TableCell className="text-white">chemo</TableCell>
            {/* <TableCell className="text-right">{invoice.totalAmount}</TableCell> */}
          </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
                </div>
            </main>
		</div>
	);
};

export default History;