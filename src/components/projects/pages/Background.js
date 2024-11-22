import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Background() {
  return (
    <div className="container">

      <div class="row">
        <div class="col-md-9 offset-md-1">

        <h3 className="my-4"> <font color='#2874a6'> <center>AI Background</center></font></h3>

              <hr></hr>

              <div className="container mt-5">
      
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col"> <center> Name </center> </th>
            <th scope="col"> <center> Description </center></th>
            <th scope="col"> <center> Link </center></th>
          </tr>
        </thead>
        <tbody>
          

          <tr>
            <td>Data Preprocessing</td>
            <td>Data Preprocessing with Pandas and ScikitLearn.</td>
            <td>
                <center>
                    <a href="https://github.com/MNGARCIA085/AI-background/blob/master/Data%20Analysis%20with%20Pandas%20and%20ScikitLearn/Data%20Preprocessing.ipynb" target='blanck'> Click here </a>  
                </center> 
            </td>   
          </tr>

          <tr>
            <td>Functional Programming</td>
            <td>Fundamentals of functional programming.</td>
            <td>
                <center>
                    <a href="https://github.com/MNGARCIA085/AI-background/blob/master/Functional%20Programming/Functional%20Programming.ipynb" target='blanck'> Click here </a>  
                </center> 
            </td>   
          </tr>

          <tr>
            <td>Numpy</td>
            <td>Fundamentals of Numpy.</td>
            <td>
                <center>
                    <a href="https://github.com/MNGARCIA085/AI-background/blob/master/Numpy/Numpy.ipynb" target='blanck'> Click here </a>  
                </center> 
            </td>   
          </tr>

          <tr>
            <td>OOP</td>
            <td>Fundamentals of Object Oriented Programming.</td>
            <td>
                <center>
                    <a href="https://github.com/MNGARCIA085/AI-background/blob/master/OOP/Object%20Oriented%20Programming.ipynb" target='blanck'> Click here </a>  
                </center> 
            </td>   
          </tr>
          
         

        </tbody>
      </table>
    </div>

             


        </div>
      </div>
    </div>
  );
}

export default Background;
