'use client';

import { InfoItem } from "./Type";

const ContactInfo: React.FC<{ info: InfoItem[] }> = ({ info }) => {
  return (
    <div className="flex-1 flex items-center xl:justify-end">
      <ul className="flex flex-col gap-10">
        {info.map((item, idx) => (
          <li key={idx} className="flex items-center gap-6">
            <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
              <div className="text-[28px]">{item.icon}</div>
            </div>
            <div className="flex-1">
              <p className="text-white/60">{item.title}</p>
              <h3 className="text-xl">{item.description}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactInfo;