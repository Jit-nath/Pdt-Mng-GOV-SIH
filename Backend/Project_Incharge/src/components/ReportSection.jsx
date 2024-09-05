import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
function ReportSection() {
  function buttonStyler() {
    return "h-20 w-2/3 max-w-[500px]  m-auto rounded bg-blue-300 border flex flex-col items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors duration-300";
  }
  const navigate = useNavigate();
  return (
    <div
      className="bg-white shadow-lg rounded-lg border m-auto"
      style={{ height: "80%", width: "95%" }}
    >
      <IoIosArrowBack
        className="text-lg m-5 cursor-pointer"
        onClick={() => navigate(-1)}
      />
      <div className="flex flex-col justify-center gap-10 mt-32">
        <div className={buttonStyler()}>Submit Quarterly Report</div>
        <div className={buttonStyler()}>View Passed Filles Record</div>
      </div>
    </div>
  );
}

export default ReportSection;
