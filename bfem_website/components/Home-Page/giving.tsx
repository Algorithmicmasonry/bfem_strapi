import React from "react";

const Giving = () => {
  return (
    <div>
      <h2 className="text-[#171412] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Giving / Donation
      </h2>
      <div className="p-4">
        <p className="text-[#171412] text-base font-medium leading-normal">
          Bank Account Details:
        </p>
        <p className="text-[#827468] text-sm font-normal leading-normal">
          First Bank Plc: 2008200453, Bible Faith Evangelical Ministries{" "}
        </p>
        <p className="text-[#827468] text-sm font-normal leading-normal">
          GTB: 0033998542, OLANUSI TOLULOPE ABIODUN{" "}
        </p>
        <p className="text-[#171412] text-base font-medium leading-normal mt-4">
          Why We Give:
        </p>
        <ul className="list-disc list-inside text-[#827468] text-sm font-normal leading-normal">
          <li>To help the church meet its numerous financial obligations </li>
          <li>To make the church grow </li>
          <li>
            To demonstrate love and kindness and build stronger communities{" "}
          </li>
          <li>To support others and provide essential resources </li>
        </ul>
        <p className="text-[#827468] text-sm font-normal leading-normal mt-2">
          All giving/donations are voluntary.{" "}
        </p>
      </div>
    </div>
  );
};

export default Giving;
