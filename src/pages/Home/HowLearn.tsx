const ListHowLearn=(props:{order:number,content:string})=>
{
  return (
      <div className="flex my-10">
      <div className=" bg-[#12B0DF] w-11 h-11 rounded-full flex justify-center items-center text-white font-bold text-3xl  outline outline-4 outline-offset-4 outline-[#12B0DF]">
        {props.order}
      </div>
      <h2 className="ml-6 mt-2 font-bold text-2xl">
       {props.content}
      </h2>
    </div>
  );
}

function HowLearn() {
  return (
    <div className="grid grid-cols-2">
      <img src="./HowLearn.png" alt="" className="" />
      <div className="bg-how-learn bg-contain pl-16 ">
        <h1 className="text-[#12B0DF]  font-inter font-bold text-4xl pt-16 ">
          Học Như Thế Nào ?
        </h1>

          <ListHowLearn order={1} content={"Xây dựng lộ trình học tập riêng biệt"}/>
          <ListHowLearn order={2} content={"Học bám xát tài liệu"}/>
          <ListHowLearn order={3} content={"Ôn lại kiến thức"}/>
          <ListHowLearn order={4} content={"Kiểm tra quá trình"}/>
       </div>
    </div>
  );
}

export default HowLearn;
