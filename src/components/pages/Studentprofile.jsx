import React from "react";

const Studentprofile = () => {
  const student = {
    name: "DHAYANITHI C",
    id: "7376242AD148",
    semester: "I",
    status: "CONTINUING",
    course: "B.Tech. - ARTIFICIAL INTELLEGENCE & DATA SCIENCE",
    mentor: "SATHIYA B (CS11088)",
    specialLab: "FULL-STALK DEVELOPMENT",
    boarding: "-",
    warden: "Mr. PREMKUMAR G",
    attendance: {
      totalDays: 365,
      presentDays: 365,
      leave: 0,
      onDuty: 0,
      percentage: "100%",
      today: "PR | PR"
    },
    sgpa: [3, 4, 7, 1, 10, 8],
    cgpa: "NA",
    placement: 0,
    arrearCount: 0,
    rank: 10
  };

  return (
   <>
     
          <div className=" m-2" >
          <img src="data:image/png;base64,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"  className="w-24 h-24 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800">Student Profile</h2>
            <p className="text-gray-600">{student.name} ({student.id})</p>
            <p className="mt-2 text-gray-700">{student.course}</p>
            <p className="text-gray-700">Semester: {student.semester} - {student.status}</p>
            <p className="text-gray-700">Mentor: {student.mentor}</p>
            <p className="text-gray-700">Special Lab: {student.specialLab}</p>
            <p className="text-gray-700">Warden: {student.warden}</p>
          </div>
       
      
      </>
  );
};

export default Studentprofile;
