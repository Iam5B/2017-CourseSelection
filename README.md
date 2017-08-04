# 2017-CourseSelection
* To begin with, you should open your course selection website, press F12 (take chrome as an example) and switch to the 'Network', and enter the page '按课程号快速选课', find the file whose name contains 'tableId=6093'. It will supply the message you may need in the next step.
* To use this script, simply modify some part of the code
  * The address in the method   
      > $.post();
  * The json data in the method
      > $.post();
  * The address in the method
      > myXHR.open();
  
  and copy it to the console. Then you can call the function 
  
    >query(course,yourid,timeout)
  
  the 'course' should be string type.
  
* The result will be saved in an array called 'result'.
* A fatal problem: the result will come out only when the requests are all responded, that is to say, one or more slow request will effect the whole efficiency.
