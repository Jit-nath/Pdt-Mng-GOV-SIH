function ReportSection() {
  function buttonStyler() {
    return "h-20 w-2/3 m-auto rounded bg-blue-300 border flex flex-col items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors duration-300";
  }

  return (
    <div className="h-full flex flex-col items-center justify-center p-4">
      <div className={buttonStyler()}>Create Report</div>
      <div className={buttonStyler()}>View Project Details</div>
      <div className={buttonStyler()}>Admin Chat</div>
    </div>
  );
}

export default ReportSection;
