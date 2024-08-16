import { style } from 'motion';
import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-white min-h-screen">
      <div className="flex-1 flex flex-col justify-center items-start px-4 lg:px-10 py-8 lg:py-0">
        <div className='text-center lg:text-end lg:ml-52 lg:-mt-24 w-full lg:w-auto'>
          <div className="text-6xl lg:text-8xl font-bold font-hanoble">ABOUT</div>
          <div className="mt-3 text-6xl lg:text-8xl font-light mb-8 font-Bspring">US</div>
        </div>
        <p className="text-base lg:text-lg text-center lg:text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed amet sequi molestiae, excepturi delectus, esse maiores deleniti magnam repellendus sunt alias nulla voluptatem perferendis aperiam repudiandae. Eos assumenda officiis accusantium.
        </p>
        <br />
        <p className="text-base lg:text-lg text-center lg:text-left">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima consequuntur obcaecati assumenda porro maiores aut libero, modi sunt aliquam deserunt natus, quaerat repellendus voluptate tenetur rerum omnis architecto suscipit quod?
        </p>
        <br />
        <p className="text-base lg:text-lg text-center lg:text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi explicabo ipsa est omnis nemo, deleniti sapiente eum illum exercitationem inventore non asperiores nostrum illo, blanditiis perspiciatis itaque accusamus, atque dolore?
          
        </p>
      </div>

      <img src="/AboutUs/BLine.svg" alt="line" className='hidden lg:block mr-5' />

      <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start lg:space-x-4 mt-8 lg:mt-0'>
        <TeamMember1 bgColor="bg-yellow-500" />
        <TeamMember2 bgColor="bg-red-500" />
      </div>
    </div>
  );
};

const TeamMember1 = ({ bgColor }) => (
  <div className='flex flex-col space-y-0 lg:space-y-0'>
    <TeamMember bgColor={bgColor} name="ANAMIKA AGGARWAL" position="Frontend Developer" index='1' />
    <TeamMember bgColor={bgColor} name="ANUSHA TOMAR" position="AI ML Developer  " index='2' />

  </div>
);

const TeamMember2 = ({ bgColor }) => (
  <div className='flex flex-col space-y-0 justify-start lg:space-y-0'>
    <TeamMember bgColor={bgColor} name="AYESHA" position="UI UX Designer" index='3' />
    <TeamMember bgColor={bgColor} name="PRANITDEEP SINGH" position="Backend Developer" index='4' />

  </div>
);

const TeamMember = ({ bgColor, name, position, index }) => {
  const style3 = (index == 1 ) ? 'border-t-4,sm:border-t-0' : '';
  const style1 = (index == 1 || index == 2) ? 'hidden' : 'block';
  const style2 = (index == 3 || index == 4) ? 'md:block hidden' : '';
  return (
    <>
      <div className=' flex  overflow-hidden lg:flex-row items-center lg:items-start'>
        <img src="/AboutUs/w1.svg" alt="team member" className={` ${style1}  md:hidden block ${bgColor} h-[250px] lg:h-[319px] border-black border-x-4 border-b-4  lg:w-auto`} />
        <div className='mb-4 lg:mb-0 lg:mr-3 lg:mt-6 text-center lg:text-left'>
          <img src="/AboutUs/LinkedIn.svg" alt="linkedin" className='cursor-pointer mx-auto lg:mx-0' />
          <div className='py-2 font-medium'>{name}</div>
          <img src="/AboutUs/SLine.svg" alt="l" className='mx-auto lg:mx-0' />
          <div className='mt-2 font-semibold text-2xl font-Rspring'>{position}</div>
        </div>
        <img src="/AboutUs/w1.svg" alt="team member" className={`${bgColor} ${style3}  ${style2}   h-[250px] lg:h-[319px] border-black border-x-4 border-b-4 lg:w-auto`} />
      </div>
    </>
  )
};

export default AboutUs;