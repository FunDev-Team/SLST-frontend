interface Props 
{ 
  order: number; 
  content: string 
}

const ListHowLearn = (props: Props ) => {
  return (
    <div className="flex my-10">
      <div className=" bg-[#12B0DF] w-11 h-11 rounded-full flex justify-center items-center text-white font-bold text-3xl  outline outline-4 outline-offset-4 outline-[#12B0DF]">
        {props.order}
      </div>
      <h2 className="ml-6 mt-2 font-bold text-2xl">{props.content}</h2>
    </div>
  );
};

function HowLearn() {
  const LISTHOWLEARN = [
    { content: "Xây dựng lộ trình học tập riêng biệt" },
    { content: "Học bám xát tài liệu" },
    { content: "Ôn lại kiến thức" },
    { content: "Kiểm tra quá trình" },
  ];
  return (
    <div className="grid grid-cols-2">
      <img src={require("../../assets/images/imageLearn.png")} alt="image-learn" />
      <div className="bg-slate-200 bg-contain pl-16 ">
        <h1 className="text-[#12B0DF]  font-inter font-bold text-4xl pt-16 ">
          Học Như Thế Nào ?
        </h1>
        {
          LISTHOWLEARN && LISTHOWLEARN.map((value, index) => {
              return <ListHowLearn order={index + 1} content={value.content} />;
            })        
        }
      </div>
    </div>
  );
}

export default HowLearn;
