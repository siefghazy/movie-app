import reviews from '@/data/reviews.json'; 

export function GET(req){
    return new Response(JSON.stringify(reviews),{status:200})
}
export async function POST(req){
    const newData=await req.json()
    reviews.push({...newData,id:reviews.length+1})
    return new Response(JSON.stringify(reviews), {status:200})
}
