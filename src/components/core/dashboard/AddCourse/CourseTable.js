import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";

function CourseTable({ Courses, SetCourses }) {
  const { Token } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [modal, setmodal] = useState(null);

  return (
    <div>
      <Table>
        <Thead>
          <Tr>
            <Th>Courses</Th>
            <Th>Duration</Th>
            <Th>Price</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
        {
            Courses?.length!==0 ?(
                <Tr>
                    <Td>
                        No Courses Found
                    </Td>
                </Tr>
            ):
            (
                Courses.map((Course)=>
                {
                    return <Tr key={Course?._id}>
                        <Td>
                            <img src={Course?.Thumbmail}
                            className="object-cover w-[220px] h-[150px] rounded-lg"></img>
                          <div className="flex ">
                          <div>{Course.Title}</div>
                          <div>
                            {Course.Description}
                          </div>
                          <div>
                            Created : 
                            {
                                Course.Satus=== Course?.Darft?(
                                    <p className=" text-pink-100"> Drafted</p>
                                ):<p className=" text-yellow-25"> Published</p>
                            }
                          </div>
                          </div>

                        </Td>
                    </Tr>
                    

                })

            )
           
        }



        </Tbody>
      </Table>
    </div>
  );
}

export default CourseTable;
