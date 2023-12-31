import Link from "next/link";
import NewItem from "./new-item";   

export default function Week4() {
    return(
        <html lang="en">
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <head><title>Week4</title></head>
                <div class="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
                    <h1 class="text-4xl font-bold">Week 4 Shopping List</h1>
                    <NewItem ></NewItem>    
                </div>
            </main>
        </html>
        
    )
}