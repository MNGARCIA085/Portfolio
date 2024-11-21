import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function RegressionWithDeepLearning() {
  return (
    <div className="container">

      <div class="row">
        <div class="col-md-9 offset-md-1">

        <h3 className="my-4"> <font color='#2874a6'> <center>Regression with Deep Learning</center></font></h3>

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
            <td>Salary Prediction</td>
            <td>Linear</td>
            <td>Prediction of the salary using just one feature.</td>
            <td>
                <center>
                    <a href="https://github.com/MNGARCIA085/Regression-with-deep-learning/blob/master/Linear%20Regression/TensorFlow/Salary%20Prediction/Salary%20Prediction%20-%20Simple%20Linear%20Regression.ipynb" target='blanck'> Click here </a>  
                </center> 
            </td>
                
          </tr>
          <tr>
            <td>Salary Prediction</td>
            <td>Linear, multiple predictors</td>
            <td>Prediction of the salary using several features.</td>
            <td> 
                <center>
                <a href="https://github.com/MNGARCIA085/Regression-with-deep-learning/blob/master/Linear%20Regression/TensorFlow/Salary%20Prediction/Salary%20Prediction%20-%20Linear%20Regression%20with%20multiple%20predictors.ipynb" target='blanck'> Click here </a>  
                </center>
            </td>
          </tr>
          <tr>
            <td>Yatch Hydrodinamics</td>
            <td>Non linear</td>
            <td>Prediction of residuary resistance of sailing yachts.</td>
            <td> 
                <center>
                    <a href="https://github.com/MNGARCIA085/Regression-with-deep-learning/blob/master/Non-linear%20regression/TensorFlow/Yatch%20Hydrodinamics/Yatch%20Hydrodinamics.ipynb" target='blanck'> Click here</a>  
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

export default RegressionWithDeepLearning;
