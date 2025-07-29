import React from 'react'

const Sermon = () => {
  return (
    <div className="my-[20px]">
       <h2 className="text-[#171412] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Latest Sermons
            </h2>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-col gap-1 flex-[2_2_0px]">
                  <p className="text-[#827468] text-sm font-normal leading-normal">
                    Sermon Series
                  </p>
                  <p className="text-[#171412] text-base font-bold leading-tight">
                    Finding Strength in Adversity
                  </p>
                  <p className="text-[#827468] text-sm font-normal leading-normal">
                    Pastor Emily Carter explores how to maintain faith and
                    resilience during challenging times.
                  </p>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQQRV3nBd_sZZ2XnnTQ2Qdm_PLNqfPmXeaEoRufcn0qF3cO8JHwwO1WabyQoGFINCY_dCLSUu990ITDG2s_x5HYszAwfFcaCLIXNYHYDZQWkpDO3OM0ePKHwIQnnk0IOwfx1iW-wJKEdcYUYQzGu1X6w3qft7TzFSCSnuHIIZdzTNYkTK9HZSxKLZ7ocPq-dJucooFTCc8cMGcdvcz2bld-iiQr80A08MRJIk27O3YAY_nXdhhgddrNxHLcBBDF0476kkCI9cNAp4")',
                  }}
                ></div>
              </div>
            </div>
    </div>
  )
}

export default Sermon