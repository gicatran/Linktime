import { deleteSession } from "@/lib/actions/account.action";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	await deleteSession();

	revalidatePath("/");
	return NextResponse.redirect(new URL("/", req.nextUrl));
}
