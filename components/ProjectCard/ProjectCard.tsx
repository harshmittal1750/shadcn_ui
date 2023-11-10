import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
const data = {
  project1: {
    projectName: "Project Name",
    projectDescription: "Project Description",
    projectImage: "https://source.unsplash.com/random",
    projectFooter: "Project Footer",
    projectLink: "https://www.google.com",
  },
  project2: {
    projectName: "Project Name",
    projectDescription: "Project Description",
    projectImage: "https://source.unsplash.com/random",
    projectFooter: "Project Footer",
    projectLink: "https://www.google.com",
  },
  project3: {
    projectName: "Project Name",
    projectDescription: "Project Description",
    projectImage: "https://source.unsplash.com/random",
    projectFooter: "Project Footer",
    projectLink: "https://www.google.com",
  },
};
function ProjectCard() {
  return (
    <div className="flex justify-around my-2">
      {Object.values(data).map((project: any, index: any) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{project.projectName}</CardTitle>
            <CardDescription>{project.projectDescription}</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src={project.projectImage}
              width={200}
              height={100}
              alt={project.projectName}
            />
          </CardContent>
          {/* <Separator /> */}

          <CardFooter className="flex space-x-3">
            <Link href={project.projectLink}>
              <Button>View</Button>
            </Link>
            <Link href={project.projectLink}>
              <Button>Source</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default ProjectCard;
