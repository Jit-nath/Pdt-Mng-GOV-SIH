import { IoChevronBack, IoSettingsSharp } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
function Details({ projectName }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-between items-center m-5 cursor-pointer text-lg">
        <IoChevronBack className="mt-2" onClick={() => navigate(-1)} />
        <div className="flex gap-8 mr-3">
          <IoSettingsSharp className="cursor-pointer" />
          <LuLogOut className="cursor-pointer" />
        </div>
      </div>
      <h1 className="text-3xl text-center mt-3 mb-3">{projectName}</h1>
      <div className="m-auto p-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem hic ex
        quos sed quasi aperiam porro quas sapiente maxime, maiores eligendi
        ipsam asperiores, harum non et, quia aliquam corporis id.
      </div>
    </div>
  );
}

export default Details;
