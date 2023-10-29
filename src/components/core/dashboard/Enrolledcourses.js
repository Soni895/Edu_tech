import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import {getuserenrollcourses} from "../../../services/operations/ProfileAPI"
import ProgressBar from '@ramonak/react-progress-bar';

function Enrolledcourses() {

    const {Token}=useSelector((state)=>state.Auth);
    const [Enrollcourses,setenrollcourses]=useState(
      [  {
        Thumbmail:"hi",
        Description:"darshan soni",
        title:"darshan",
        progresspercentage:20,

    }]
    );

const getenrollcourses= async()=>
{
    try {
        const response= await getuserenrollcourses(Token);
        console.log(response);
        setenrollcourses(response);


        
    } catch (error) {
        console.log("failed");
        console.log(error);
        
    }
}

useEffect(()=>
{
    
    // getenrollcourses();

},[])
console.log(Enrollcourses);
    console.log(Enrollcourses.length);
  return (
    <div>
    
    <div>Enrolledcourses</div>
    {
       ! Enrollcourses?(<div>
            loading...
        </div>):(
            
            !Enrollcourses?(<p>
                you have not enrolled any courses yet
            </p>):(
                <div>

                <div>
                    <p>
                        Course Name
                    </p>
                    <p>
                        Duration
                    </p>
                    <p>
                        Progress
                    </p>
                </div>
              
                    {
                        Enrollcourses.map((course,index)=>
                    {  
                        console.log(course);

                       return ( <div key={index} className='text-white'>
                        <div>
                            <img src={course?.Thumbmail} alt='thumbmail'></img>
                            <div>
                                <p>{course.title}</p>
                                <p>{course.Description} </p>
                            </div>
                        </div>

                        <div>
                            {
                                course.Duration
                            }
                        </div>
                        <div>
                        <p>Progress:{course.progresspercentage||0}%</p>
                        <ProgressBar className='text-white' completed={course.progresspercentage||0}
                        height='8px'
                        isLabelVisible={true}

                        ></ProgressBar>

                        </div>
                   

                        </div>
                       )

                    })

                    }
               
                   
                



                </div>
            )
            
        )

    }
    </div>
  )
}

export default Enrolledcourses