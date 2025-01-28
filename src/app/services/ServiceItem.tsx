import { BsArrowDownRight } from "react-icons/bs";
import { Service } from "./ServiceData";
import Link from "next/link";

interface ServiceItemProps {
  service: Service;
}

const ServiceItems: React.FC<ServiceItemProps> = ({ service }) => {
  return (
    <div className="flex-1 flex flex-col justify-center gap-6 group">
      <div className="w-full flex justify-between items-center">
        <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
          {service.num}
        </div>
        <Link 
          href={service.href}
          className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
        >
          <BsArrowDownRight className="text-primary text-3xl" />
        </Link>
      </div>

      <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
        {service.title}
      </h2>
      <p>{service.description}</p>
      <div className="border-b border-white/20 w-full"></div>
    </div>
  )
}

export default ServiceItems;