import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <section className=" w-9/12 border- m-auto">
        <h3 className="font-bold text-[2.5em]">Career</h3>
        <div className="my-2 text-[2em]">
          <p>나를 소개합니다.</p>
        </div>
        <h3 className="font-bold text-[2.5em]">My Blog List</h3>

        <h3 className="font-bold text-[2.5em]">기술 스택</h3>
      </section>
    </Layout>
  );
}
