import React from "react";

const Events = () => {
  return (
    <div className="mt-[20px]">
      <h2 className="text-primary text-[25px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Upcoming Events
      </h2>
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFfzt7SIYGc4aDKKk4wRyPhhcJXeQZ_KvxVnbYx8gO-05TSdZ1zOGF_8y8OdaXFmHkC7G29IJLEU10HVg9PImxZXNRdJXP5kqjgdwXUuZ9vTabaTzy6K7bpSQxH8xZLaryplhi1fT7QjJInjgom4l_XnpcAhteDDuFlHg0ZXSKBWvI-STvN9HfpiFOTMkDt-KIfKIWT8UZJKUAOK_p9ge_20OA54KnDx0AeHavPkNfLBA5CfNyLyL11z4PTlLOW7Rf3aKcvznBiQM")',
              }}
            ></div>
            <div>
              <p className="text-[#171412] text-base font-medium leading-normal">
                Sunday Service
              </p>
              <p className="text-[#827468] text-sm font-normal leading-normal">
                10am – 11:30am{" "}
              </p>
            </div>
          </div>
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFfzt7SIYGc4aDKKk4wRyPhhcJXeQZ_KvxVnbYx8gO-05TSdZ1zOGF_8y8OdaXFmHkC7G29IJLEU10HVg9PImxZXNRdJXP5kqjgdwXUuZ9vTabaTzy6K7bpSQxH8xZLaryplhi1fT7QjJInjgom4l_XnpcAhteDDuFlHg0ZXSKBWvI-STvN9HfpiFOTMkDt-KIfKIWT8UZJKUAOK_p9ge_20OA54KnDx0AeHavPkNfLBA5CfNyLyL11z4PTlLOW7Rf3aKcvznBiQM")',
              }}
            ></div>
            <div>
              <p className="text-[#171412] text-base font-medium leading-normal">
                Intensive Bible Lecture
              </p>
              <p className="text-[#827468] text-sm font-normal leading-normal">
                Every Wednesday – 5pm-7pm{" "}
              </p>
            </div>
          </div>
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFfzt7SIYGc4aDKKk4wRyPhhcJXeQZ_KvxVnbYx8gO-05TSdZ1zOGF_8y8OdaXFmHkC7G29IJLEU10HVg9PImxZXNRdJXP5kqjgdwXUuZ9vTabaTzy6K7bpSQxH8xZLaryplhi1fT7QjJInjgom4l_XnpcAhteDDuFlHg0ZXSKBWvI-STvN9HfpiFOTMkDt-KIfKIWT8UZJKUAOK_p9ge_20OA54KnDx0AeHavPkNfLBA5CfNyLyL11z4PTlLOW7Rf3aKcvznBiQM")',
              }}
            ></div>
            <div>
              <p className="text-[#171412] text-base font-medium leading-normal">
                Trinity Nights
              </p>
              <p className="text-[#827468] text-sm font-normal leading-normal">
                1st -3rd of Every month – 10pm – 2am{" "}
              </p>
            </div>
          </div>
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFfzt7SIYGc4aDKKk4wRyPhhcJXeQZ_KvxVnbYx8gO-05TSdZ1zOGF_8y8OdaXFmHkC7G29IJLEU10HVg9PImxZXNRdJXP5kqjgdwXUuZ9vTabaTzy6K7bpSQxH8xZLaryplhi1fT7QjJInjgom4l_XnpcAhteDDuFlHg0ZXSKBWvI-STvN9HfpiFOTMkDt-KIfKIWT8UZJKUAOK_p9ge_20OA54KnDx0AeHavPkNfLBA5CfNyLyL11z4PTlLOW7Rf3aKcvznBiQM")',
              }}
            ></div>
            <div>
              <p className="text-[#171412] text-base font-medium leading-normal">
                My Victory is Sure
              </p>
              <p className="text-[#827468] text-sm font-normal leading-normal">
                2nd Saturday of every month - 9am – 12 noon{" "}
              </p>
            </div>
          </div>
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFfzt7SIYGc4aDKKk4wRyPhhcJXeQZ_KvxVnbYx8gO-05TSdZ1zOGF_8y8OdaXFmHkC7G29IJLEU10HVg9PImxZXNRdJXP5kqjgdwXUuZ9vTabaTzy6K7bpSQxH8xZLaryplhi1fT7QjJInjgom4l_XnpcAhteDDuFlHg0ZXSKBWvI-STvN9HfpiFOTMkDt-KIfKIWT8UZJKUAOK_p9ge_20OA54KnDx0AeHavPkNfLBA5CfNyLyL11z4PTlLOW7Rf3aKcvznBiQM")',
              }}
            ></div>
            <div>
              <p className="text-[#171412] text-base font-medium leading-normal">
                Power of the Gospel
              </p>
              <p className="text-[#827468] text-sm font-normal leading-normal">
                15th – 17th of every month - 5pm-7pm{" "}
              </p>
            </div>
          </div>
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFfzt7SIYGc4aDKKk4wRyPhhcJXeQZ_KvxVnbYx8gO-05TSdZ1zOGF_8y8OdaXFmHkC7G29IJLEU10HVg9PImxZXNRdJXP5kqjgdwXUuZ9vTabaTzy6K7bpSQxH8xZLaryplhi1fT7QjJInjgom4l_XnpcAhteDDuFlHg0ZXSKBWvI-STvN9HfpiFOTMkDt-KIfKIWT8UZJKUAOK_p9ge_20OA54KnDx0AeHavPkNfLBA5CfNyLyL11z4PTlLOW7Rf3aKcvznBiQM")',
              }}
            ></div>
            <div>
              <p className="text-[#171412] text-base font-medium leading-normal">
                Annual Convention
              </p>
              <p className="text-[#827468] text-sm font-normal leading-normal">
                1st week of November yearly{" "}
              </p>
            </div>
          </div>
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFfzt7SIYGc4aDKKk4wRyPhhcJXeQZ_KvxVnbYx8gO-05TSdZ1zOGF_8y8OdaXFmHkC7G29IJLEU10HVg9PImxZXNRdJXP5kqjgdwXUuZ9vTabaTzy6K7bpSQxH8xZLaryplhi1fT7QjJInjgom4l_XnpcAhteDDuFlHg0ZXSKBWvI-STvN9HfpiFOTMkDt-KIfKIWT8UZJKUAOK_p9ge_20OA54KnDx0AeHavPkNfLBA5CfNyLyL11z4PTlLOW7Rf3aKcvznBiQM")',
              }}
            ></div>
            <div>
              <p className="text-[#171412] text-base font-medium leading-normal">
                Glorious Gospel Ministers International
              </p>
              <p className="text-[#827468] text-sm font-normal leading-normal">
                Mid – February yearly{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
