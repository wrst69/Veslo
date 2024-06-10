"use client";

import { Input } from "@/shared/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";



export function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
  
    const searchString = e.target.value;

    if (searchString) {
      params.set('query', searchString);
    } else {
      params.delete('query');
    }
    
    replace(`${pathname}?${params.toString()}`)
  }
  
  return <Input className="mr-4" placeholder="Search..." onChange={handleSearch} defaultValue={searchParams.get('query')?.toString()}/>
}
