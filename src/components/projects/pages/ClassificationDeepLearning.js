import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ClassificationWithDeepLearning() {
  return (
    <div className="container">

      <div class="row">
        <div class="col-md-9 offset-md-1">

        <h3 className="my-4"> <font color='#2874a6'> <center>Classification with Deep Learning</center></font></h3>

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
            <td>Booking Cancellations</td>
            <td>Binary</td>
            <td>Predict whether a reservation will be canceled or not.</td>
            <td>
                <center>
                    <a href="https://github.com/MNGARCIA085/Classification-with-Deep-Learning/blob/master/Binary%20Classification/TensorFlow/Booking%20Cancellations/Booking%20Cancellations.ipynb" target='blanck'> Click here </a>  
                </center> 
            </td>
                
          </tr>
          <tr>
            <td>Diabetes Prediction</td>
            <td>Binary</td>
            <td>Predict based on diagnostic measurements whether a patient has diabetes.</td>
            <td> 
                <center>
                <a href="https://github.com/MNGARCIA085/Classification-with-Deep-Learning/blob/master/Binary%20Classification/TensorFlow/Diabetes/Diabetes.ipynb" target='blanck'> Click here </a>  
                </center>
            </td>
          </tr>
          <tr>
            <td>Digit classification</td>
            <td>Multiclass</td>
            <td>Classify handwriiten digits from 0 to 9.</td>
            <td> 
                <center>
                    <a href="https://github.com/MNGARCIA085/Classification-with-Deep-Learning/blob/master/Multiclass%20Classification/TensorFlow/Digit%20Classification/Digit%20Classification.ipynb" target='blanck'> Click here</a>  
                </center>
            </td>
          </tr>

          <tr>
            <td>Iris classification</td>
            <td>Multiclass</td>
            <td>Design and implement a classification model that can accurately classify iris flowers into one of three species: Setosa, 
                Versicolor, or Virginica, based on their sepal and petal dimensions.</td>
            <td> 
                <center>
                    <a href="https://github.com/MNGARCIA085/Classification-with-Deep-Learning/blob/master/Multiclass%20Classification/TensorFlow/Iris%20flowers/Iris%20Flowes%20Classification.ipynb" target='blanck'> Click here</a>  
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

export default ClassificationWithDeepLearning;
