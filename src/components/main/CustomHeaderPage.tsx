type CustomHeaderPageProps = {
  coveUrl: string
  title: string
  description: string
  currentPage: string
}

export function CustomHeaderPage({
  coveUrl,
  title,
  currentPage,
  description
}: CustomHeaderPageProps) {
  return (
    <div className="relative w-full h-[40vh] flex items-center justify-center rounded-md max-w-s-900:h-[36vh] ">
      <img src={coveUrl} className={`w-full h-full absolute object-cover`} />

      {/* Content */}
      <div className="absolute z-[2] container w-full inset-0 flex items-center justify-center px-4">
        <div className="w-full flex justify-between items-center gap-6 max-w-[90%] max-w-s-900:flex-col max-w-s-900:pt-36 max-w-s-900:pb-20 max-w-s-">
          <div className="flex justify-center items-start flex-col gap-4   text-baseTextWhite text-center ">
            <h1 className="text-5xl font-bold max-w-s-520:text-3xl max-w-s-900:text-4xl ">
              {title}
            </h1>
            <p className="relative py-2 text-[0.85rem] text-start font-normal max-w-md max-w-s-420:text-base ">
              {/* <p className="relative pl-6 py-2 my-4 border-l-2 border-primary-200 text-2xl font-damion"> */}
              {description}
            </p>
          </div>

          <div className="px-8 py-3 bg-white flex justify-center items-center flex-row gap-3 font-semibold rounded-sm max-w-s-900:w-full max-w-s-900:max-w-md ">
            <span>Inicio</span>
            <span>|</span>
            <span className="text-primary-200">{currentPage}</span>
          </div>
        </div>
      </div>

      <div
        className={`absolute top-0 left-0 z-[1] w-full h-full bg-blue-950/80 pointer-events-none'}`}
      />
    </div>
  )
}
