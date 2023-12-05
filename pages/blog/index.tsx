import React from "react";
import Layout from "@/components/layout/Layout";
import { IoSearch } from "react-icons/io5";
import { FcBusinessman } from "react-icons/fc";
import Link from "next/link";
// import BlogBox from "test_hongs_2";
// import Hyeonsu from "react-test-hong-component_3";
const Index = () => {
  const blogData = {
    id: 1,
    title: "blog_post",
    url: "/",
    img: "data:image/jpeg;base64,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",
    category: "TroubleShooting",
    created_at: "2023-12-05T10:30:00.000Z",
  };

  return (
    <Layout>
      <section className="w-full m-auto">
        <div className="flex items-center justify-center font-bold text-center text-[2.5em] bg-[#010118] h-60 mb-10">
          <p className="text-white">Blog</p>
        </div>
        <div className="w-8/12 m-auto">
          <div className="flex justify-between">
            <div className="w-8/12">
              {/* <BlogBox projectType="Next" blogData={blogData} /> */}
              {/* <Link href={"/"} className="w-full ">
                <div className="font-bold text-[1.8em] my-4">
                  블로그 작성 제목입니다.
                </div>
                <div className="flex items-center pb-4">
                  <p className="border-2 mr-6 w-[4rem] h-[4rem]">
                    <FcBusinessman className="w-full h-full" />
                  </p>
                  <ul className="flex flex-col ">
                    <li>
                      <span className="text-[18px]">Hong</span>
                      <span className="text-[14px] ml-2 text-[#828282]">
                        2023-11-15
                      </span>
                    </li>
                    <li className="text-[#828282] text-[16px]">
                      코드 실행 중에 예기치 못한 에러가 발생했을 때가 있다.
                    </li>
                  </ul>
                </div>
                <div className="pb-10 border-b-2">
                  코드 실행 중에 예기치 못한 에러가 발생했을 때, 이로부터 코드의
                  실행 흐름을 복구할 수 있는데, 이를 예외처리(Excpetion
                  handling) 라고 한다.JavaScript는 기본적으로 싱글 스레드라서
                  스레드가 멈춘다는 것은 프로세스가 멈추는 것이라서, 예외처리는
                </div>
              </Link>
              <Link href={"/"} className="w-full ">
                <div className="font-bold text-[1.8em] my-4">
                  블로그 작성 제목입니다.
                </div>
                <div className="flex items-center pb-4">
                  <p className="border-2 mr-6 w-[4rem] h-[4rem]">
                    <FcBusinessman className="w-full h-full" />
                  </p>
                  <ul className="flex flex-col ">
                    <li>
                      <span className="text-[18px]">Hong</span>
                      <span className="text-[14px] ml-2 text-[#828282]">
                        2023-11-15
                      </span>
                    </li>
                    <li className="text-[#828282] text-[16px]">
                      코드 실행 중에 예기치 못한 에러가 발생했을 때가 있다.
                    </li>
                  </ul>
                </div>
                <div className="pb-10 border-b-2">
                  코드 실행 중에 예기치 못한 에러가 발생했을 때, 이로부터 코드의
                  실행 흐름을 복구할 수 있는데, 이를 예외처리(Excpetion
                  handling) 라고 한다.JavaScript는 기본적으로 싱글 스레드라서
                  스레드가 멈춘다는 것은 프로세스가 멈추는 것이라서, 예외처리는
                </div>
              </Link>
              <Link href={"/"} className="w-full ">
                <div className="font-bold text-[1.8em] my-4">
                  블로그 작성 제목입니다.
                </div>
                <div className="flex items-center pb-4">
                  <p className="border-2 mr-6 w-[4rem] h-[4rem]">
                    <FcBusinessman className="w-full h-full" />
                  </p>
                  <ul className="flex flex-col ">
                    <li>
                      <span className="text-[18px]">Hong</span>
                      <span className="text-[14px] ml-2 text-[#828282]">
                        2023-11-15
                      </span>
                    </li>
                    <li className="text-[#828282] text-[16px]">
                      코드 실행 중에 예기치 못한 에러가 발생했을 때가 있다.
                    </li>
                  </ul>
                </div>
                <div className="pb-10 border-b-2">
                  코드 실행 중에 예기치 못한 에러가 발생했을 때, 이로부터 코드의
                  실행 흐름을 복구할 수 있는데, 이를 예외처리(Excpetion
                  handling) 라고 한다.JavaScript는 기본적으로 싱글 스레드라서
                  스레드가 멈춘다는 것은 프로세스가 멈추는 것이라서, 예외처리는
                </div>
              </Link> */}
            </div>
            <div className="3/12">
              <div className=" px-2">
                <div className="flex border-2 mb-6 rounded-xl p-1 justify-between">
                  <input
                    className="mx-2 p-1 outline-none	"
                    type="text"
                    placeholder="Search for Keyword"
                  />
                  <button type="button">
                    <IoSearch size={30} />
                  </button>
                </div>
                <div>
                  <p className="text-center mt-4 text-[1.8em] font-bold">
                    Tags
                  </p>
                  <p className="text-[1.5em] font-semibold">Skill</p>
                  <ul>
                    <li className="ml-6 mt-2 text-[#858585]">#CSS</li>
                    <li className="ml-6 mt-2 text-[#858585]">#React</li>
                    <li className="ml-6 mt-2 text-[#858585]">#Next</li>
                    <li className="ml-6 mt-2 text-[#858585]">#Node</li>
                    <li className="ml-6 mt-2 text-[#858585]">#Redux</li>
                  </ul>
                  <p className="text-[1.5em] mt-4 font-semibold">
                    TroubleShooting
                  </p>
                  <ul>
                    <li className="ml-6 mt-2 text-[#858585]">
                      <button>#error</button>
                    </li>
                    <li className="ml-6 mt-2 text-[#858585]">
                      <button>#Debugging</button>
                    </li>
                    <li className="ml-6 mt-2 text-[#858585]">
                      <button>#Test</button>
                    </li>
                  </ul>
                </div>
                <p className="text-[1.5em] mt-4 font-semibold">CS</p>
                <ul>
                  <li className="ml-6 mt-2 text-[#858585]">
                    <button>#data structure</button>
                  </li>
                  <li className="ml-6 mt-2 text-[#858585]">
                    <button>#network</button>
                  </li>
                  <li className="ml-6 mt-2 text-[#858585]">
                    <button>#algorithm</button>
                  </li>
                  <li className="ml-6 mt-2 text-[#858585]">
                    <button>#OS</button>
                  </li>
                  <li className="ml-6 mt-2 text-[#858585]">
                    <button>#architecture</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
