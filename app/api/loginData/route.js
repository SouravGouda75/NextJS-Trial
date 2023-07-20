import { NextResponse } from "next/server";
import NextUser from '@/db/user'
import connect from '@/db/connect'
import bcrypt from 'bcrypt'
export async function POST(req) {
	const {email,password} = await req.json();
	// try{

		await connect()
	 // Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);
		
		// Create a new user
		const user = new NextUser({ email:email, password: hashedPassword });
		
		// Save the user to the database
		await user.save();
		// console.log(data);
		return  NextResponse.json({ message: 'User registered successfully',success:true });
	// }
	// catch(error){
	// 	return  NextResponse.json({ message: 'Something Went Wrong' });

	// }
}


/*
const {  email, password } = req.body;

   

    res.status(201).json({ message: 'User registered successfully' });
*/