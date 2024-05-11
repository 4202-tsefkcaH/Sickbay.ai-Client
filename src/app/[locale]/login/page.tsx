"use client"
import React, {useState} from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import axios from "axios"
import signup from "../../../assets/sign_up.svg"; 


export default function Login(){
  const router = useRouter();
    const[sign, setSign] = useState({
        email:"",
        password:"",
        username:"",
    })
    const[login, setLogin] = useState({
        email:"",
        password:""
    })
    const onSignup = async(e:any) => {
        e.preventDefault();
        try {
            // setLoading(true);
            console.log(sign);
            const response = await axios.post("http://localhost:4000/api/signup", sign);
            // console.log(response);
            localStorage["token"] = response.data.token;
            localStorage["id"] = response.data.id;

            localStorage["log"]="1";
            console.log("helllllllllllo");
            router.push("/");
            
        } catch (error:any) {
            console.log(error);
        } finally {
            // setLoading(false);
            // console.log(error);
        }
    }
    const onLogin = async (e:any) => {
        e.preventDefault();
        try {
            // setLoading(true);
            console.log(login);
            const response = await axios.post("http://localhost:4000/api/signin", login);
            console.log("Login success");
            console.log(response);
            localStorage["token"] = response.data.token;
            localStorage["id"] = response.data.id;
            localStorage["log"] = "1";
            // cookies().set('token', response.data);
            router.push("/");
        } catch (error : any) {
            console.log("Login failed "+error.message)
        } finally{ 
            // setLoading(false);
        }
    }
    return (
        <div className=" bg-gradient-to-r from-[#000c53] to-[#209cf4] w-screen max-w-screen h-screen flex justify-around items-center">
          <div className="bg-black/50 min-h-[90vh] backdrop-blur-lg rounded-3xl p-10 flex justify-around items-center gap-x-20">
            <div className="p-10 rounded-xl bg-gray-900 backdrop-blur-lg">
                <Image src={signup} alt="sign up" width={400}/>
            </div>
            <div>
            <Tabs defaultValue="signup" className="w-[400px] text-white z-10">
      <TabsList className="grid w-full grid-cols-2 bg-white/10 backdrop-blur-xl">
        <TabsTrigger value="signup" className="text-white">Sign Up</TabsTrigger>
        <TabsTrigger value="login" className="text-white">Log In</TabsTrigger>
      </TabsList>
      <TabsContent value="signup">
        <Card className="border-none bg-transparent h-[65vh]">
          <CardHeader>
            <CardTitle className="text-white">Sign Up</CardTitle>
            <CardDescription className="text-white">
              Fill all the fields to start your journey!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">  
            <div className="space-y-1">
              <Label htmlFor="username" className="text-white">Username</Label>
              <Input id="username" placeholder="Enter username" className=" bg-[#171717] rounded-2xl text-white border-none" value={sign.username} onChange={(e) => setSign({...sign, username:e.target.value})}/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input id="email" placeholder="Enter email" className=" bg-[#171717] rounded-2xl text-white border-none" value={sign.email} onChange={(e) => setSign({...sign, email:e.target.value})}/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="password" className="text-white">Password</Label>
              <Input id="password" className=" bg-[#171717] text-white rounded-2xl border-none" placeholder="Enter password" type="password" value={sign.password} onChange={(e) => setSign({...sign, password:e.target.value})}/>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" onClick={onSignup}>Sign Up</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="login">
        <Card className="border-none bg-transparent h-[65vh]">
          <CardHeader>
            <CardTitle className="text-white">Log In</CardTitle>
            <CardDescription className="text-white">
              Welcome Back! Continue your journey!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input id="email" placeholder="Enter email" className="bg-[#171717] rounded-2xl border-none text-white" type="text" value={login.email} onChange={(e) => setLogin({...login, email:e.target.value})}/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="password" className="text-white">Password</Label>
              <Input id="password" className="bg-[#171717] rounded-2xl border-none text-white" placeholder="Enter password" type="password" value={login.password} onChange={(e) => setLogin({...login, password:e.target.value})}/>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" onClick={onLogin}>Log In</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
            </div>
            </div>
        </div>
    )
}