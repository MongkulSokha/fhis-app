"use client";

import React, { useEffect, useState } from "react";

const welcome = () => {
  return (
    <div>
      <div className="px-20 md:px-20 xl:px-50 flex p-20 flex-col text-center items-center ">
        <p className="text-4xl font-semibold pb-5">Welcome to</p>
        <p className="text-4xl font-bold">FORESTHILL INTERNATIONAL SCHOOL</p>
        <div className="flex items-center h-1 bg-red-900 mt-10 w-65"></div>
        <p className="text-xl sm:text-2xl pt-9 ">
          Activities of students taking the September Monthly Test for National
          Program in the Academic Year 2022-2023 at Forest Hill International
          School
        </p>
      </div>
    </div>
  );
};

export default welcome;
