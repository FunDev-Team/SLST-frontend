
const ListBlog=(props:{srcImg:string,topic : string,tittle:string,desc:string})=>{
  return (
        <a href="#" className="mx-2 hover:mx-0 cursor-pointer">
          <img src={props.srcImg} alt="" className="rounded-3xl" />
          <h1 className="mt-5 text-[#12B0DF] text-xl">
            {props.topic}
          </h1>
          <h1 className="   font-bold font-inter  my-1 text-2xl">
            {props.tittle}
          </h1>
          <p className="">  {props.desc}</p>
        </a>
  );

}

function Blog() {
  return (
    <>

      <div className="flex justify-between">
        <h1 className="font-inter text-[#12B0DF] font-bold text-2xl">
          Blog SLST
        </h1>
        <a href="#"className="font-inter text-[#12B0DF] text-2xnl hover:font-bold hover:underline">
          Xem tất cả Blog &#x2192;
        </a>
      </div>

      <h1 className="mt-7 font-inter font-bold text-3xl">
        Blog SLST về chủ đề học tập
      </h1>

      <h1 className="mt-4 text-[#5E6475] text-xl">
        Nơi chia sẻ kinh nghiệm tự học
      </h1>

      <div className="mt-5 grid grid-cols-3 gap-x-8">
        <ListBlog srcImg={"./Blog/BlogAlgorithm.png"} topic={"Thuật Toán"} tittle={"Tầm Quan Trọng Thuật Toán"}  desc={"Quá trình học thuật toán từ cấp ba đến đại học ? "} />
        <ListBlog srcImg={"./Blog/BlogWeb.png"} topic={"Website"} tittle={"Làm Dự Án Website Ra Sao ?"}  desc={"Tự học thiết kế website từ năm nhất như thế nào thì hiệu quả"} />
        <ListBlog srcImg={"./Blog/BlogMath.png"} topic={"Toán Học"} tittle={" Môn Toán Đại Cương Có Gì ?"}  desc={"Môn toán giúp ích như thế nào khi theo học ngành công nghệ thông tin ?"} />
      </div>

    </>
  );
}

export default Blog;
