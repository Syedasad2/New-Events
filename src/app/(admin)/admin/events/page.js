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
  
  const events = [
    {
      title: "Birthday Event",
      description: "Birthday of this",
      location: "karachi",
      thumbnail:
        "https://images.unsplash.com/photo-1624006229221-2abd931f266b?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: new Date().toLocaleString(),
    },
    {
        title: "Book fair Events",
        description: "Book fair of all types of books",
        location: "karachi",
        thumbnail:
          "https://images.unsplash.com/photo-1563297782-f4cba03a3fb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2RzfGVufDB8fDB8fHww",
        date: new Date().toLocaleString(),
      },
      {
        title: "Food Festival",
        description: "All kind of foods",
        location: "karachi",
        thumbnail:
          "https://images.unsplash.com/photo-1523473125050-1c9405e8b208?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: new Date().toLocaleString(),
      },
  
    
  ];
  
  export default function Events() {
    return (
      <div className="min-h-screen">
        <Table>
          <TableCaption>A list of your recent Events</TableCaption>
          <TableHeader>
            <TableRow>
            <TableHead> Thumbnail </TableHead>
              <TableHead className="w-[100px]">Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>location</TableHead>
              
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((events) => (
              <TableRow key={events. title}>
                <TableCell> <Image src={events.thumbnail} height={80} width={100} className="rounded-md"/> </TableCell>
                <TableCell className="font-medium">{events.title}</TableCell>
  
                <TableCell className="font-medium">{events.description}</TableCell>
                <TableCell>{events.location}</TableCell>
                <TableCell className="text-right">{events.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
  