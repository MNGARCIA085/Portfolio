import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ComputerVision() {
  return (
    <div className="container">

      <div class="row">
        <div class="col-md-9 offset-md-1">

        <h3 className="my-4"> <font color='#2874a6'> <center>Computer Vision</center></font></h3>

              <hr></hr>

              <div className="container mt-5">
      
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col"> <center> Name </center> </th>
            <th scope="col"> <center> Type </center></th>
            <th scope="col"> <center> Description </center></th>
            <th scope="col"> <center> Link </center></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sport Celebrities Classification</td>
            <td>Image Classification</td>
            <td>Identify if a given picture belongs to a specific sports celebrity.</td>
            <td>
                <center>
                    <a href="https://github.com/MNGARCIA085/Computer-Vision-with-Deep-Learning/blob/master/Sports%20Celebrities/Sports%20Celebrities%20Classification.ipynb" target='blanck'> Click here </a>  
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

export default ComputerVision;
