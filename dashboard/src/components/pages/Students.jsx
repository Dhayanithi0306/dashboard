import React from 'react'

export default function Students() {
  

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="grid grid-cols-2 gap-6 max-w-4xl bg-white shadow-md rounded-lg p-6">
       
        <div>
          <h3 className="text-lg font-semibold">Attendance Overview</h3>
          <p>Total Days: 365</p>
          <p>Present Days:365</p>
          <p>Leave: 0</p>
          <p>On Duty:0.5</p>
          <p>Percentage:100%</p>
          <p>Today:PR || PR</p>
        </div>

      </div>
    </div>
  )
}
