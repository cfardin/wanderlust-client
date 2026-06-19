import BookedCard from '@/components/ui/BookedCard';
import { auth } from '@/lib/auth';
import { headers } from "next/headers";

const BookedPage = async() => {
    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
    })

    const user = session?.user;
    const {token} = await auth.api.getToken({
        headers : await headers()
    });

    const res = await fetch(`${process.env.SERVER_URL}/booking/${user?.id}`, {
        headers : {
            authorization : `Bearer ${token}`
        }
    });
    const bookedData = await res.json();

    // console.log(bookedData);

    if(!user){
        return <div className='my-40 text-center'>Login first</div>
    }

 

    return (
        <div className='container mx-auto my-20'>
            <h3 className='text-2xl font-bold'>My Bookings</h3>
            <div>
                {
                    bookedData.map((b, i) => <BookedCard key={i} b = {b}></BookedCard>)
                }
            </div>
        </div>
    );
};

export default BookedPage;<h3 className='text-2xl font-bold'>My Bookings</h3>