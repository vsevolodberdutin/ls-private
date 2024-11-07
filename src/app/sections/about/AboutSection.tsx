import React from 'react'
import * as about from '@/data/about.json'
import Image from 'next/image'

const AboutSection = () => (
  <section className="flex min-h-screen flex-col items-center">
    <aside className=" border-l-4 border-orange-700 bg-orange-200 p-4 rounded-xl relative">
      <div className=" rounded-full bg-white p-2 w-fit absolute -top-[25px] -left-[30px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <strong id="solution-code" className="sc-3b6be973-5 inZaZm">
        {about.subtitle1}
      </strong>
      <button className="transform translate-y-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </aside>

    <div className="w-screen h-fit flex flex-col items-center">
      <div className="flex flex-col w-[50vw]">
        <div className="overflow-x-auto">
          <table className="table-auto min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">{about.subtitle1}</th>
              </tr>
            </thead>
            <tbody>
              {about.education.map((item) => (
                <tr>
                  <td className="border px-4 py-2">{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col w-[50vw]">
        <div className="overflow-x-auto">
          <table className="table-auto min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">{about.subtitle2}</th>
              </tr>
            </thead>
            <tbody>
              {about.articles.map((item) => (
                <tr>
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">{item.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex w-[80vw]">
        {about.companies.map((item) => (
          <div
            className=" px-4 py-2 flex items-center grid-flow-dense "
            key={item.name}
          >
            <Image
              src={`/about/${item.data}_logo.png`}
              alt={item.data}
              width={50}
              height={50}
              className="rounded-full bg-white hover:scale-150"
            />
            {/* {item.name} */}
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default AboutSection
