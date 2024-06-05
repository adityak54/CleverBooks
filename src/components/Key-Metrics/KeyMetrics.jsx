import './KeyMetrics.css'
import { programsData } from '../../data/programsData.jsx'

const KeyMetrics = () => {
  return (
    <div className='flex flex-col gap-4 py-40 px-4'>
      <div className="programs-header text-center text-black text-3xl font-bold">
        <span className='stroke-text'>Four key questions answered by CleverBooks</span>
      </div>
      <div className="
      sm:flex sm:flex-col sm:gap-4 sm:py-8
      lg:flex lg:flex-row lg:px-4 lg:gap-4
      md:flex-col  md:py-10  md:gap-10
      flex flex-col gap-5
      ">
        {programsData.map((program) => {
          return (
            <div key={program.key} className="category rounded-2xl flex flex-col bg-yellow-50 p-4 gap-2 justify-between hover:bg-planCard hover:cursor-pointer text-black max-w-full">
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default KeyMetrics
