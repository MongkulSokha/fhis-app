import React from "react";

import { Image } from "antd";

const ProfileCard = () => {
  return (
    <div className="flex flex-col items-center font-sans bg-white w-fit rounded-3xl mx-10">
      <div className="w-55 h-55 rounded-full overflow-hidden">
        <Image
          preview={false}
          src="/profile.svg"
          alt="Mrs. Swe Swe Aung"
          width={220}
          height={290}
          className="object-cover w-full h-full"
        />
      </div>
      <p className="text-lg font-bold text-gray-900">Mrs. Swe Swe Aung</p>
      <p className="text-sm font-semibold text-gray-700">School Principal</p>
      <p className="text-xs pb-4 text-gray-900">
        principal.this@foresthillschool.edu.th
      </p>
    </div>
  );
};

export default ProfileCard;
