import DatePicker from "../DatePicker";

export default function NavbarDatePicker({
  setDays,
  setCalendarData,
}: {
  setDays: any;
  setCalendarData: any;
}) {
  return (
    <div className=" absolute bottom-0 left-0    w-full   flex justify-center p-10 xl:p-0  h-2  ">
      <div className="mt-10 xl:mt-[60px] overflow-y-auto w-[60%] h-max mb-5 bg-white navbar-date-picker">
        <DatePicker
          setDays={setDays}
          setCalendarData={setCalendarData}
          months={2}
          scroll={false}
          direction={"horizontal"}
        />
      </div>
    </div>
  );
}
