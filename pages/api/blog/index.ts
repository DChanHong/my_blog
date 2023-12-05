// import type { NextApiRequest, NextApiResponse } from "next";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const createdPost = await prisma.blog_post.create({
      data: {
        title: "test",
        url: "https://velog.io/@hongchee/React-Query-feat-usequerycaching-stale",
        img: "https://ssl.pstatic.net/melona/libs/1461/1461558/d298f6df1a30d1daa785_20231121164356288.jpg",
        category: "troubleShooting",
      },
    });

    if (createdPost) {
      res.status(200).json({ message: "success", post: createdPost });
    } else {
      res.status(500).json({ message: "Failed to create a post" });
    }
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
};

export default handler;
