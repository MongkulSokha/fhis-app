import "@ant-design/v5-patch-for-react-19";
import Navbar from "@/components/home/navbars";
import Footers from "@/components/home/footer";
import { getContentAction } from "@/app/action/getContentAction";
import TopNavbar from "@/components/home/top-navbar";

interface ContentPageProps {
  params: { alias: string };
}

export default async function ContentPage({ params }: ContentPageProps) {
  const data = await getContentAction(params.alias);

  if (!data) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-2xl font-semibold">Page not found</h1>
      </div>
    );
  }

  return (
    <main className="App">
      <TopNavbar />
      <Navbar />
      <div className="relative bg-[url(/img1.jpg)]">
        <div className="flex items-center justify-center text-white z-20 bg-gradient-to-b from-[#691b32] to-transparent flex-col p-20">
          <p className="text-4xl font-bold my-10 uppercase">{data.title}</p>
        </div>
      </div>
      <div className="px-10 md:px-10 xl:px-50 grid-cols-2 md:grid-rows-2 py-10">
        {/* <div className="flex item-center w-full h-100 rounded-2xl overflow-hidden me-10">
          <img className="w-full h-full object-cover " src="/img3.jpg" alt="" />
        </div> */}
        <div className="">
          <p className="text-4xl font-bold mb-5 mt-5">{data.title}</p>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: data.content || "" }}
          />
        </div>
      </div>
      <Footers />
    </main>
  );
}
