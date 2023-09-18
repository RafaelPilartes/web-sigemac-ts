import { ArrowRight } from 'lucide-react'

export function baseSelect() {
  return (
    <>
      {/* Select Empty */}
      <div className="relative flex flex-col">
        <div className="relative z-0">
          <input
            type="text"
            aria-label="inputtext"
            name="inputtext"
            id="input44"
            className="w-full h-14 block leading-5 relative py-2 px-4 rounded bg-neutral-10 dark:bg-neutral-900 border focus:border-2 border-gray-500 overflow-x-auto focus:outline-none focus:border-primary-200 focus:ring-0 dark:text-gray-200 dark:border-gray-400 dark:focus:border-primary-200 peer"
            placeholder=" "
            value=""
          />

          <label
            htmlFor="input44"
            className="absolute bg-white tracking-[.03125em] text-gray-500 dark:text-gray-400 bg-neutral-10 dark:bg-neutral-900 duration-300 transform px-1 -translate-y-7 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-primary-200 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:bg-neutral-10 dark:peer-focus:bg-neutral-900 peer-focus:px-1 peer-invalid:text-error-200 dark:peer-invalid:text-error-200"
          >
            Last name
          </label>
        </div>
        <div className="hidden pt-1 px-4 text-xs tracking-[0.4px]">
          Supporting text
        </div>
      </div>
      {/* Select Icon */}
      <div className="relative flex flex-col">
        <div className="relative z-0">
          <div className="absolute left-4 top-4 z-10">
            <ArrowRight />
          </div>

          <input
            type="search"
            aria-label="inputtext"
            name="inputtext"
            id="input55"
            className="w-full h-14 block leading-5 relative py-2 pl-14 pr-4 rounded bg-neutral-10 dark:bg-neutral-900 border focus:border-2 border-gray-500 overflow-x-auto focus:outline-none focus:border-primary-200 focus:ring-0 dark:text-gray-200 dark:border-gray-400 dark:focus:border-primary-200 peer"
            placeholder=" "
            value=""
          />

          <label
            htmlFor="input55"
            className="absolute bg-white tracking-[.03125em] text-gray-500 dark:text-gray-400 bg-neutral-10 dark:bg-neutral-900 duration-300 transform px-1 -translate-y-7 scale-75 top-4 z-10 origin-[0] left-12 peer-focus:left-12 peer-focus:text-primary-200 dark:peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:bg-neutral-10 dark:peer-focus:bg-neutral-900 peer-focus:px-1 peer-invalid:text-error-200 dark:peer-invalid:text-error-200"
          >
            Search
          </label>
        </div>
        <div className="hidden pt-1 px-4 text-xs tracking-[0.4px]">
          Supporting text
        </div>
      </div>
    </>
  )
}
