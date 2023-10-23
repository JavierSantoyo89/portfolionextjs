"use client";
import Image from "next/image";
import "./Card.css";

interface CarData {
  name: string;
  type?: string;
  created: string;
  image?: string;
  species?: string;
}
interface Origin {
  name: string;
}

interface Props {
  data: CarData;
}

const imageWidth = 400;
const imageHeight = 200;

function Card({ data }: Props) {
  let formattedType = data.type;
  formattedType ||= "no type";
  return (

    <div className="relative flex  flex-col justify-center overflow-hidden bg-gray-50 m-5 " >
  
      {!!data.image && (
        
        <div className="group relative m-0 flex h-72  rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">

        <div className="z-10  overflow-hidden rounded-xl border opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
          <Image
            className="w-full"
            src={data.image}
            width={imageWidth}
            height={imageHeight}
            alt="character"
          />
        </div>
          
          <div className="absolute bottom-0  z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:text-fuchsia-400 group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 ">
            <p className="font-serif text-1xl font-bold text-transparent  group-hover:text-black " > Name: {data.name}</p>
            <p className="text-sm font-light  text-transparent group-hover:text-black "> type: {formattedType}</p>
            <p className="text-sm font-light text-transparent group-hover:text-black "> Creater: {data.created}</p>
            <p className="text-sm font-light text-transparent group-hover:text-black "> Type: {data.species}</p>
          </div>
        </div>
        
        )}
    </div>

  );
}

export default Card;
