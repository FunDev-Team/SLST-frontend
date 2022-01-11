import LogoDocument from "./Logo/LogoDocument";
import LogoMember from "./Logo/LogoMember";
import LogoUser from "./Logo/LogoUser";

function Infomation() {
  return (
    <div>
      {/* information that group and project */}
      <div className="flex flex-col mx-auto mt-10">
        <div className="mx-auto text-center">
          <h3 className="font-bold text-2xl text-sky-500">Về Nhóm Chúng Tôi</h3>
          <h2 className="font-bold text-[30px] my-7">
            Thông Tin Nhóm Và Dự Án
          </h2>
          <p className="font-bold text-xl opacity-75">
            Dự án có sự tham gia của 3 thành viên
          </p>
        </div>
        <div
          className="flex justify-around mx-[180px] text-justify mt-10 
                    font-medium text-xl opacity-70"
        >
          <p className="flex-1 mx-9 leading-8 min-w-[220px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            imperdiet sem et urna sodales, at elementum ante porttitor.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Sed non feugiat tortor.
          </p>
          <p className="flex-1 mx-9 leading-8 min-w-[220px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            imperdiet sem et urna sodales, at elementum ante porttitor.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Sed non feugiat tortor.
          </p>
        </div>
      </div>

      {/* information that users of SLST */}
      <div>
        <div className="mx-auto text-center mt-40">
          <h2 className="font-bold text-[30px] my-7">Thông Tin Sử Dụng SLST</h2>
          <p className="font-bold text-xl opacity-75">
            Website tiến đến sự tiện lợi và tối ưu hóa trải nghiệm người dùng
          </p>
        </div>

        <div
          className="grid grid-cols-3 my-14 px-60
                    text-xl font-bold cursor-default"
        >
          <div className="col-span-1 mx-auto text-center">
            <div className="inline-block">
              <LogoUser />
            </div>
            <h3 className="my-8">+99</h3>
            <h3 className="text-[#12B0DF]">Users</h3>
          </div>

          <div className="col-span-1 mx-auto text-center">
            <div className="inline-block">
              <LogoDocument />
            </div>
            <h3 className="my-7">+10</h3>
            <h3 className="text-[#12B0DF]">Tài Liệu</h3>
          </div>

          <div className="col-span-1 mx-auto text-center">
            <div className="inline-block">
              <LogoMember />
            </div>
            <h3 className="my-8">3</h3>
            <h3 className="text-[#12B0DF]">Thành Viên</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Infomation;
