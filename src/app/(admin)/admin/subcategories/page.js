import Link from "next/link";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import Image from "next/image";
import { AddSubCategory } from "@/components/AddSubCategory/AddSubCategory";

  
  const subcategories = [
    {
      
      thumbnail: "https://images.unsplash.com/photo-1512719994953-eabf50895df7?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Cricket",
      category:"Sports",
      description: "Outdoor Cricket",
     
    },
    {
      
      thumbnail: "https://images.unsplash.com/photo-1512719994953-eabf50895df7?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "BaseBall",
      category:"Sports",
      description: "Outdoor Cricket",
     
    },
    {
      
      thumbnail: "https://images.unsplash.com/photo-1512719994953-eabf50895df7?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Football",
      category:"Sports",
      description: "Outdoor Cricket",
     
    },
  
  
    
  ];
  
  export default function SubCategories() {
    return (
      <div className="min-h-screen px-20 pt-10">
        <div className="flex justify-between">
            <h1 className="font-bold">All Sub-Categories</h1>
            <AddSubCategory/>
        </div>
        <Table>
          <TableCaption>A list of Sub-Categories</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Thumbnail</TableHead>
              
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subcategories.map((subcategories) => (
              <TableRow key={subcategories.title}>
                <TableCell> <Image src={subcategories.thumbnail} height={80} width={100} className="rounded-md"/> </TableCell>
                <TableCell className="font-medium">{subcategories.title}</TableCell>
                <TableCell className="font-medium">{subcategories.category}</TableCell>

  
                <TableCell className="font-medium">{subcategories.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
  