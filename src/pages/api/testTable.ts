// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Person = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Person[]>
) {
  res.status(200).json([
    {
      id: 1,
      firstName: "tanner",
      lastName: "linsley",
      age: 24,
      visits: 100,
      status: "In Relationship",
      progress: 50,
    },
    {
      id: 2,
      firstName: "tandy",
      lastName: "miller",
      age: 40,
      visits: 40,
      status: "Single",
      progress: 80,
    },
    {
      id: 3,
      firstName: "joe",
      lastName: "dirte",
      age: 45,
      visits: 20,
      status: "Complicated",
      progress: 10,
    },
  ]);
}
