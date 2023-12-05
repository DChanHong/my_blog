import React from "react";
import { FcBusinessman } from "react-icons/fc";
import moment from "moment";
import Link from "next/link";

interface blogType {
  id: number;
  title: string;
  url: string;
  img: string;
  catrgory: string;
  created_at: string;
}

interface propsType {
  blogData: blogType;
}

const blogBox = ({ blogData }: propsType) => {
  return (
    <Link href={`/${blogData.id}`} className="w-full ">
      <div className="font-bold text-[1.8em] my-4">{blogData.title}</div>
      <div className="flex items-center pb-4">
        <p className="border-2 mr-6 w-[4rem] h-[4rem]">
          <FcBusinessman className="w-full h-full" />
        </p>
        <ul className="flex flex-col ">
          <li>
            <span className="text-[14px] ml-2 text-[#828282]">
              {moment(blogData.created_at).format("YYYY-MM-DD")}
            </span>
          </li>
          <li className="text-[#828282] text-[16px]">{blogData.catrgory}</li>
        </ul>
      </div>
      <div className="pb-10 border-b-2">
        코드 실행 중에 예기치 못한 에러가 발생했을 때, 이로부터 코드의 실행
        흐름을 복구할 수 있는데, 이를 예외처리(Excpetion handling) 라고
        한다.JavaScript는 기본적으로 싱글 스레드라서 스레드가 멈춘다는 것은
        프로세스가 멈추는 것이라서, 예외처리는
      </div>
    </Link>
  );
};

export default blogBox;
