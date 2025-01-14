import ForgotPasswordCodeForm from "@/components/forms/ForgotPasswordCodeForm";
import { Separator } from "@/components/ui/separator";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const ForgotPasswordCodePage = async () => {
	const savedEmail = (await cookies()).get("resetPassword_email")?.value;

	if (savedEmail === undefined) {
		redirect("/auth/forgot-password");
	}

	return (
		<>
			<h1 className="title">Enter reset code</h1>
			<p className="subtitle">
				Enter the code sent to your email to reset your password.
			</p>
			<Separator className="my-6" />
			<ForgotPasswordCodeForm email={savedEmail!} />
			<Separator className="my-6" />
			<p className="text-center">
				<Link
					href={"/auth/login"}
					className="text-blue-500 font-semibold"
				>
					Login
				</Link>
				{" | "}
				<Link
					href={"/auth/register"}
					className="text-blue-500 font-semibold"
				>
					Register
				</Link>
			</p>
		</>
	);
};

export default ForgotPasswordCodePage;