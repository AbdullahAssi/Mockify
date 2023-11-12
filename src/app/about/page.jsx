export default async function Page(){
    await new Promise(resolve => setTimeout(resolve, 5000))
    return <h1>This is an About Page</h1>
}