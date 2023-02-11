export default function IntroLines() {
  return (
    <>
      <p className="col-span-2 col-start-4 text-center max-sm:text-sm">
        Coding
      </p>
      <p className="col-span-2 col-start-6 text-center max-sm:text-sm">
        Architecture
      </p>
      <p className="col-span-2 col-start-8 text-center max-sm:text-sm">
        3D printing
      </p>
      <p className="col-span-2 col-start-10 text-center max-sm:text-sm">
        Woodworking
      </p>
      {/* balls */}
      <div className="col-span-2 col-start-4 row-start-2 flex justify-center">
        <div className="box h-3 w-3 rounded-full border-2 border-red-500" />
      </div>
      <div className="col-span-2 col-start-6 row-start-2 flex justify-center">
        <div className="h-3 w-3 rounded-full border-2 border-yellow-500" />
      </div>
      <div className="col-span-2 col-start-8 row-start-2 flex justify-center">
        <div className="h-3 w-3 rounded-full border-2 border-green-500" />
      </div>
      <div className="col-span-2 col-start-10 row-start-2 flex justify-center">
        <div className="h-3 w-3 rounded-full border-2 border-blue-500" />
      </div>
      {/* verticals */}
      <div className="col-start-4 translate-x-[1px] rounded-br-xl border-r-2 border-b-2 border-red-500" />
      <div className="col-start-6 row-span-3 translate-x-[1px]  border-r-2 border-yellow-500" />
      <div className="col-start-9 row-span-2 translate-x-[-1px] rounded-bl-xl border-l-2 border-b-2 border-green-500" />
      <div className="col-start-11 translate-x-[-1px] rounded-bl-xl border-l-2 border-b-2 border-blue-500" />
      {/* rest */}
      <div className="col-span-2 col-start-2 translate-x-[1px] translate-y-[-2px] rounded-tl-xl border-t-2 border-l-2 border-red-500" />
      <div className="col-start-2 row-span-6 row-start-5 translate-x-[1px] translate-y-[-2px] rounded-bl-xl border-b-2 border-l-2 border-red-500" />
      <div className="col-span-3 col-start-12 row-span-3 row-start-4 translate-x-[-1px] translate-y-[-2px] rounded-tr-2xl border-t-2 border-r-2 border-blue-500" />
      <div className="col-span-2 col-start-13 row-span-6 row-start-7 translate-x-[-1px] translate-y-[-2px] rounded-br-xl border-b-2 border-r-2 border-blue-500" />
      <div className="col-span-4 col-start-10 row-start-5 translate-x-[-1px] translate-y-[-2px] rounded-tr-xl border-t-2 border-r-2 border-green-500" />
      <div className="col-span-1 col-start-13 row-span-3 row-start-6 translate-x-[-1px] translate-y-[-2px] rounded-br-xl border-b-2 border-r-2 border-green-500" />
    </>
  );
}
