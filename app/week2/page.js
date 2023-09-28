import Image from 'next/image'
import { StudentInfo } from '../StudentInfo.js'  // import the StudentInfo component
import Link from 'next/link';

export default function ShoppingList() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div class="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
          <h1 class="text-4xl font-bold">Shopping List</h1>
          <br>
          </br>
          <div>
            {StudentInfo()}
          </div>
        </div>
      </main>

      //<StudentInfo /> // call the StudentInfo component
    
    
    )
  }