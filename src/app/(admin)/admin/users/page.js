import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const users = [
  {
    Name: "Syed Asad",
    email: "syed@gmail.com",
    location: "karachi",
    profileimage:
      "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    events: 4,
  },
  {
    Name: "S.Asad",
    email: "syed2@gmail.com",
    location: "karachi",
    profileimage:
      "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    events: 5,
  },
  {
    Name: " Asad",
    email: "syed3@gmail.com",
    location: "karachi",
    profileimage:
      "https://images.unsplash.com/photo-1659646240684-a405b508c41f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU5fHx8ZW58MHx8fHx8",
    events: 6,
  },
];

export default function Users() {
  return (
    <div className="min-h-screen">
      <Table>
        <TableCaption>A list of your recent Users.</TableCaption>
        <TableHeader>
          <TableRow>
          <TableHead> Profile Image </TableHead>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>location</TableHead>
            
            <TableHead>events</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((users) => (
            <TableRow key={users.Name}>
              <TableCell> <Image src={users.profileimage} height={40} width={40} className="rounded-md"/> </TableCell>
              <TableCell className="font-medium">{users.Name}</TableCell>

              <TableCell className="font-medium">{users.email}</TableCell>
              <TableCell>{users.location}</TableCell>

              <TableCell className="text-right">{users.events}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
