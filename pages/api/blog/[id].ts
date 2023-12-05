import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = Number(req.query.id);
  try {
    const result = await prisma.blog_post.findUnique({
      where: {
        id: id,
      },
    });
    if (result) {
      res.status(200).json({ data: result });
    } else {
      res.status(500).json({ message: "error" });
    }
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    prisma.$disconnect();
  }
};

export default handler;
