'use client';
import {useState} from 'react';
import { ItemCard } from "./Item.js";



export function ItemList({items, onItemSelect}){
  const [sortBy, setSortBy] = useState('name');

  let sortedItems = [...items];

  if (sortBy == 'name'){
    sortedItems.sort((a, b) => (a.name > b.name) ? 1 : -1)
  }
  else if (sortBy == 'category'){
    sortedItems.sort((a, b) => (a.category > b.category) ? 1 : -1)
  }
  

  return(
    <div>
      <div className="flex justify-between">
        <button class=" mb-8 ml-8 mr-5 text-xl bg-transparent hover:bg-white text-black font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded shadow leading-tight focus:outline-none focus:shadow-outline" onClick={() => setSortBy('name')}>Name</button>
        <button class=" mb-8 ml-8 mr-5 text-xl bg-transparent hover:bg-white text-black font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded shadow leading-tight focus:outline-none focus:shadow-outline" onClick={() => setSortBy('category')}>Category</button>
      </div>
      <div>
        {sortedItems.map((item) => (
          <ItemCard 
            key={item.id} 
            name={item.name} 
            quantity={item.quantity} 
            category={item.category} 
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </div>
    </div>
  );
}