import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <section className=" w-8/12 m-auto">
        <h3 className="font-bold text-[2.5em]">Career</h3>
        <div className="my-2 border-b-2 py-4">
          <p className="text-[2em]">나를 소개합니다.</p>
        </div>
        <h3 className="font-bold text-[2.5em]">My Blog List</h3>
        <div className="my-2 border-b-2 py-4 ">
          <p className="text-[2em]">나를 소개합니다.</p>
        </div>
        <h3 className="font-bold text-[2.5em]">기술 스택</h3>
        <div className="my-2 border-b-2 py-4 ">
          <p className="text-[2em]">나를 소개합니다.</p>
        </div>
      </section>
    </Layout>
  );
}
