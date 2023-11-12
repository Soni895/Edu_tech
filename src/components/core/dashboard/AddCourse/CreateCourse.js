import React from 'react';
import Rendersteps from './Rendersteps';

const Createcourse = () => {
  return (
    <div className='text-white'>
      <div>
        <div>
          <h1>Add Courses</h1>
        </div>
        <div>
          <Rendersteps/>
        </div>
      </div>
      <div>
        <p>Code upload tips</p>
        <ul className='flex flex-col gap-10 pl-20  list-disc text-pink-300  '>
          <li>Set the Course Price option or make it free.</li>
          <li>Standard size for the course thumbnail is 1024x576.</li>
          <li>Video section controls the course overview video.</li>
          <li>Course Builder is where you create & organize a course.</li>
          <li>Add Topics in the Course Builder section to create lessons, quizzes, and assignments.</li>
          <li>Information from the Additional Data section shows up on the course single page.</li>
          <li>Make Announcements to notify any important</li>
          <li>Notes to all enrolled students at once.</li>
        </ul>
      </div>
    </div>
  );
};

export default Createcourse;
