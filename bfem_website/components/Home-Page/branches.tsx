import React from "react";

const Branches = () => {
  return (
    <div>
      <h2 className="text-[#171412] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Our Branches
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl h-[400px]"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDuVjMdQdzwtbwpeW0zqRI5QrPiSmkxcudkkShqjEdzVx84t71B0fMmO5C6s2UsryRLpVcR6iqRQaK-3fkOVt5MuHIEKBJ7GRNyO4MIPzVwqdaXi4kRzsoH5F8uTc51tBZkfGoIVU4lH8jIjyXREWQAkVmcGgfezQhlFcVm6pgxCu4GvbUmL4-RMqnYww2v8HXev0esBlnFAM1V8rPErP_jeiwm2DSKkmQYa_iaXFcj068TB3Z9cg0pFkqQves2dUuZ5w-McPW4vFU")',
            }}
          ></div>
          <div>
            <p className="text-[#171412] text-base font-medium leading-normal">
              BIBLE FAITH EVANGELICAL MINISTRIES (BFEM)
            </p>{" "}
            {/*  */}
            <p className="text-[#827468] text-sm font-normal leading-normal">
              First Gate Army Barrack, Behind Fa-fun Event Centre, Ondo Road,
              Akure, NIGERIA.{" "}
            </p>
          </div>
        </div>
        {/* You can add more branch entries here if needed, following the same structure */}
      </div>
    </div>
  );
};

export default Branches;
