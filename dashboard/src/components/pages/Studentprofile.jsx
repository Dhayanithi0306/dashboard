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
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="grid grid-cols-2 gap-6 max-w-4xl bg-white shadow-md rounded-lg p-6">
        <div className="col-span-2 flex items-center gap-4">
          <img src="https://via.placeholder.com/100" alt="Student" className="w-24 h-24 rounded-full" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Student Profile</h2>
            <p className="text-gray-600">{student.name} ({student.id})</p>
            <p className="mt-2 text-gray-700">{student.course}</p>
            <p className="text-gray-700">Semester: {student.semester} - {student.status}</p>
            <p className="text-gray-700">Mentor: {student.mentor}</p>
            <p className="text-gray-700">Special Lab: {student.specialLab}</p>
            <p className="text-gray-700">Warden: {student.warden}</p>
          </div>
        </div>

       
      

        
      </div>
    </div>
  );
};

export default Studentprofile;
