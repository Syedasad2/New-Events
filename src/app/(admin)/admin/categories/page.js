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
  import { Button } from "@/components/ui/button"
  import Image from "next/image";
  
  const categories = [
    {
      
      thumbnail: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlydGhkYXl8ZW58MHx8MHx8fDA%3D",
      title: "Birthday Event",
      description: "Birthday of this",
     
    },
    {
       
        thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D",
        title: "Concerts",
        description: "This event has all concerts related info",
       
      },
      {
       
        thumbnail: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVjaCUyMGV2ZW50fGVufDB8fDB8fHww",
        title: "Tech Event",
        description: "This event related to technologies",
       
      },
  
    
  ];
  
  export default function Categories() {
    return (
      <div className="min-h-screen px-20 pt-10">
        <div className="flex justify-between">
            <h1 className="font-bold">All Categories</h1>
            
        </div>
        <Table>
          <TableCaption>A list of Categories</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Thumbnail</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((categories) => (
              <TableRow key={categories.title}>
                <TableCell> <Image src={categories.thumbnail} height={80} width={100} className="rounded-md"/> </TableCell>
                <TableCell className="font-medium">{categories.title}</TableCell>
  
                <TableCell className="font-medium">{categories.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
  