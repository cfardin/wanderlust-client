"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";


const LoginPage = () => {

    const onSubmit = async (e) =>{
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const loginInfo = Object.fromEntries(formData.entries());

        console.log(loginInfo);

        const {data, error} = await authClient.signIn.email({
            email : loginInfo.email,
            password : loginInfo.password
        })


        if(data){
            redirect("/");
        }
        if(error){
            alert("Can't Login");
        }
    }


    return (
        <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-4 text-center text-3xl font-extrabold text-slate-900 tracking-tight">
                    Welcome Back
                </h2>
                <p className="mt-2 text-center text-sm text-slate-600">
                    Please sign in to your account
                </p>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-xl border border-slate-100 rounded-xl sm:px-10">
                    <Form onSubmit={onSubmit} className="space-y-6">
                        <TextField isRequired name="email" type="email" className="flex flex-col gap-1.5">
                            <Label className="text-sm font-semibold text-slate-700">Email Address</Label>
                            <Input 
                                placeholder="john@example.com" 
                                className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <FieldError className="text-xs text-red-500 mt-1" />
                        </TextField>

                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type="password"
                            className="flex flex-col gap-1.5"
                        >
                            <Label className="text-sm font-semibold text-slate-700">Password</Label>
                            <Input 
                                placeholder="Enter your password" 
                                className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <Description className="text-xs text-slate-400 mt-1">
                                Must be at least 8 characters with 1 uppercase and 1 number.
                            </Description>
                            <FieldError className="text-xs text-red-500 mt-1" />
                        </TextField>

                        <div className="flex flex-col gap-3 pt-2">
                            <Button 
                                type="submit" 
                                className="bg-cyan-500 w-full flex justify-center items-center gap-2 py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                            >
                                <Check className="w-4 h-4" />
                                Sign In
                            </Button>
                            
                            <Button 
                                type="reset" 
                                variant="secondary"
                                className="w-full py-2 px-4 border border-slate-300 rounded-md shadow-sm text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                            >
                                Reset Form
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;