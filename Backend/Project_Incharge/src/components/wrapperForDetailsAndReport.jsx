import ReportSection from "./ReportSection";

function Wrapper() {
  return (
    <div
      className="bg-white shadow-lg rounded-lg border m-auto flex justify-center"
      style={{ minHeight: "70%", width: "90%" }}
    >
      <ReportSection />
    </div>
  );
}

export default Wrapper;
