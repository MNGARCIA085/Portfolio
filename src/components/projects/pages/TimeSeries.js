import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TimeSeries() {
  return (
    <div className="container">

      <div class="row">
        <div class="col-md-9 offset-md-1">

        <h3 className="my-4"> <font color='#2874a6'> <center>Time Series with Deep Learning</center></font></h3>

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
            <td>Electrical Production</td>
            <td>Univariate</td>
            <td>Predict the electrical production.</td>
            <td>
                <center>
                    <a href="https://github.com/MNGARCIA085/Time-Series-with-Deep-Leaning/blob/master/Univariate/Electrical%20%20Production/Electrical%20Production.ipynb" target='blanck'> Click here </a>  
                </center> 
            </td>
                
          </tr>
          <tr>
            <td>Bitcoin Prediction</td>
            <td>Univariate</td>
            <td>Predict the price of the bitcoin.</td>
            <td> 
                <center>
                <a href="https://github.com/MNGARCIA085/Time-Series-with-Deep-Leaning/blob/master/Univariate/Electrical%20%20Production/Electrical%20Production.ipynb" target='blanck'> Click here </a>  
                </center>
            </td>
          </tr>
          <tr>
            <td>Bitcoin Prediction</td>
            <td>Multivariate</td>
            <td>Predict the price of the bitcoin.</td>
            <td> 
                <center>
                    <a href="https://github.com/MNGARCIA085/Time-Series-with-Deep-Leaning/blob/master/Multivariate/Bitcoin%20Prediction/Bitcoin_Prediction.ipynb" target='blanck'> Click here</a>  
                </center>
            </td>
          </tr>

          <tr>
            <td>Air Quality Prediction</td>
            <td>Multivariate</td>
            <td>Predict the air quality.</td>
            <td> 
                <center>
                    <a href="https://github.com/MNGARCIA085/Time-Series-with-Deep-Leaning/blob/master/Multivariate/Air%20Quality/Air_Quality.ipynb" target='blanck'> Click here</a>  
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

export default TimeSeries;
