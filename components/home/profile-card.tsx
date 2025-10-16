import React from "react";

import { Image } from "antd";

const ProfileCard = () => {
  return (
    <div className="flex flex-col items-center font-sans bg-white w-fit rounded-3xl mx-10 my-5 transition duration-300 ease-in-out hover:scale-105">
      <div className="w-43 h-40 rounded-full overflow-hidden">
        <Image
          preview={false}
          src="/profile.svg"
          alt="Mrs. Swe Swe Aung"
          width={170}
          height={250}
          className="object-cover w-full h-full"
        />
      </div>
      <p className="text-base font-bold text-gray-900">Mrs. Swe Swe Aung</p>
      <p className="text-xs font-semibold text-gray-700">School Principal</p>
      <p className="text-[0.6rem] pb-4 text-gray-900">
        principal.this@foresthillschool.edu.th
      </p>
    </div>
  );
};

export default ProfileCard;
