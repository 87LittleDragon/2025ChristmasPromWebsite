import { login } from '@/app/action/auth';

export default async function Login(){
    
   // await login(password)
    return (
	<form action={login} className='flex-col flex justify-center items-center mt-5'>
        <input name="password" type="password" className='bg-white border-2 text-black'/>
        <button type="submit" className='bg-gray-400 rounded-[1px] m-5'>enter</button>
	</form>
)
}
