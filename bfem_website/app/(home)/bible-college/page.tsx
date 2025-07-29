'use client'

import { Button } from '@/components/ui/button'

export default function BibleCollegePage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-white overflow-x-hidden">
      <div className="layout-container flex grow flex-col h-full">
        <section className="px-10 flex flex-1 justify-center py-5">
          <div className="max-w-[960px] w-full flex flex-col">
            <div className="rounded-xl overflow-hidden min-h-80 bg-white bg-cover bg-center"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCuNtz7gHyx8m6my4nMzBjJ7VJgTeOJ-6jVrjPKW46mAh4tMyY9viuDQ1SwPh_Ja-NvIefl0hvdPi2BGCfBIvADMI6uNl7oRfFOgJkT9XOnnodmUEMrE5xMCD6joFj1320cx0r2WVIiJU-qMLYo9LCrIJjLDzfFZOlvY2rqN6WVXONn-7-DpHZ6WVzdBHBdGPc6pe1muEWnT2MNLHS8JsAdWBh3vZzjmL1urfaBLdGFMIKq5hZo_cZ8ER6zkfgUcMF9igrB0KgWafo")`
              }}
            />
            <h2 className=" text-[28px] font-bold text-center pt-5 pb-3 text-primary">
              Evangelical School of Ministry
            </h2>
            <p className=" text-base text-center px-4 pb-3">
              Send us an email to apply for the training at our bible college. We will get back to you shortly
            </p>

            <form className="w-full flex flex-col items-center gap-4">
              {['Name', 'Email'].map((field) => (
                <div key={field} className="w-full max-w-[480px] px-4 py-3">
                  <label className="flex flex-col">
                    <p className=" text-base font-medium pb-2 text-primary">{field}</p>
                    <input
                      placeholder={`Your ${field}`}
                      className="h-14 rounded-xl p-4 text-base bg-[#f4f2f1] placeholder:text-[#827468]  outline-none"
                    />
                  </label>
                </div>
              ))}
              <div className="w-full max-w-[480px] px-4 py-3">
                <label className="flex flex-col">
                  <p className=" text-base font-medium pb-2 text-primary">Message</p>
                  <textarea
                    placeholder="Your Message"
                    className="min-h-36 rounded-xl p-4 text-base bg-[#f4f2f1] placeholder:text-[#827468]  outline-none"
                  />
                </label>
              </div>
              <div className="px-4 py-3">
                <Button
                  type="submit"
                  className="h-10 px-4 rounded-full  text-sm font-bold "
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </section>

        <footer className="flex justify-center">
          <div className="max-w-[960px] w-full text-center px-5 py-10">
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-[#827468] text-base">Privacy Policy</a>
              <a href="#" className="text-[#827468] text-base">Terms of Service</a>
            </div>
            <p className="text-[#827468] text-base mt-6">@2024 FaithConnect. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </main>
  )
}
