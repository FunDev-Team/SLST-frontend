import {UsableItem} from "../../components/UsableItem";

function WorkCan() {

  return (
    <div className="mt-20 ">
      <h1 className="text-center font-inter font-bold text-3xl">
        Chúng Tôi Có Thể Làm Gì ?
      </h1>
      <h2 className="text-center font-inter text-[#12B0DF] font-bold mt-5">
        Website SLST có gì thú vị ?
      </h2>
      <h3 className="text-center font-inter text-[#5E6475] px-96 mt-4 ">
        Chúng tôi là nhóm những sinh viên ngành công nghệ thông tin đến từ HCMUS và CTU, mục tiêu phát triển dự án giúp cộng đồng sinh viên phát triển
        hơn, đây là sản phẩm đầu tiên của chúng tôi
      </h3>

      <div className="mx-24 grid grid-cols-4 gap-24  mt-14">
        <UsableItem tittle={"Tài Liệu Chất Lượng"} icon={"LogoDoc"} />

        <UsableItem tittle={"Câu Hỏi Chọn Lọc"} icon={"LogoQuestion"} />

        <UsableItem tittle={"Cập Nhật Liên Tục"} icon={"LogoUpdate"} />
          
        <UsableItem tittle={"Đối Tượng Sinh Viên"} icon={"LogoObject"} />
      </div>
    </div>
  );
}

export default WorkCan;
