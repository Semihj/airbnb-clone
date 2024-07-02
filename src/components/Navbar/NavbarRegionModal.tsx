import { regions } from "../../utils/data";

export default function NavbarRegionModal() {
  return (
    <div className="absolute bottom-0 left-0 flex justify-start h-2 w-full p-10 lg:p-0 ">
      <div className="mt-[60px] w-[50%] bg-white h-max  rounded-lg grid-cols-3 grid region ">
        {regions?.map((region) => {
          return (
            <div className="p-2 cursor-pointer" key={region.id}>
              <img
                src={region.img}
                className="object-cover rounded-md"
                alt=""
              />
              <p>{region.name} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
