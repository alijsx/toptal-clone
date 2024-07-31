import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Talk to One of Our Industry Experts',
    description: 'An expert on our team will work with you to understand your goals, technical needs, and team dynamics.',
  },
  {
    number: '2',
    title: 'Work With Hand-Selected Talent',
    description: 'Within days, we\'ll introduce you to the right talent for your project. Average time to match is under 24 hours.',
  },
  {
    number: '3',
    title: 'The Right Fit, Guaranteed',
    description: 'Work with your new team member on a trial basis (pay only if satisfied), ensuring you hire the right people for the job.',
  },
];

const HiringProcess = () => {
  return (
    <section className=" md:py-12 bg-white mx-auto mt-20 max-w-[1216px] px-4 xl:px-0">
      <div className="text-center mb-12">
        <h2 className="font-[500] mb-4 p-0 text-[40px] md:text-[44px] xl:text-[52px] leading-[56px] xl:leading-[64px] text-black">Hiring Made Easy</h2>
      </div>
      <div className="flex flex-col md:flex-row md:items-start md:space-x-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center mb-8 md:mb-0 md:flex-col">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 text-[18px] md:text-[32px] flex items-center justify-center  rounded-full  text-[#204ecf]  border-[#204ecf] border p-4 md:p-8 mb-2">
                {step.number}
              </div>
            
          
            </div>
            <div className="ml-4 md:ml-0 text-start md:text-center md:mt-10">
              <h3 className=" text-gray-900 text-[14px]   md:text-[18px] md:leading-[28px] font-semibold ">{step.title}</h3>
              <p className="text-gray-400 text-[14px] leading-[24px] mt-1 md:mt-4">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HiringProcess;
