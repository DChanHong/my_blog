import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const postList = await prisma.blog_post.findMany({
      orderBy: {
        created_at: "desc",
      },
    });
    if (postList) {
      res.status(200).json({ data: postList });
    } else {
      res.status(500).json({ message: "error" });
    }
  } catch (error) {
    console.error("Error getList post:", error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
};

export default handler;
