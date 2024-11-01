export default async function Page(){
    await new Promise(resolve => setTimeout(resolve, 2000))
    return <h1>This is an About Page for next js learning</h1>
}