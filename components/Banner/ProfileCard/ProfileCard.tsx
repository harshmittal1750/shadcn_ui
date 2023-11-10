import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ProfileCard() {
  return (
    <div className="flex -rotate-2 hover:rotate-0">
      <Card>
        {/* <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader> */}
        <CardContent className="m-3">
          <Image
            src="https://picsum.photos/200/300"
            width={250}
            height={300}
            alt="Harsh Mittal"
          />
        </CardContent>
        {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
      </Card>
    </div>
  );
}

export default ProfileCard;
