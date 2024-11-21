import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MachineLearning() {
  return (
    <div className="container">

      <div class="row">
        <div class="col-md-9 offset-md-1">

        <h3 className="my-4"> <font color='#2874a6'> <center>Machine Learning</center></font></h3>

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
            <td>Breast Cancer Detection</td>
            <td>Supervised Learning</td>
            <td>Predict the probability of cancer being malignant or benign given a set of features.</td>
            <td>
                <center>
                    <a href="https://github.com/MNGARCIA085/Machine-Learning/blob/master/Supervised%20Learning/Breast%20cancer/Breast%20Cancer%20Prediction.ipynb" target='blanck'> Click here </a>  
                </center> 
            </td>
                
          </tr>
          <tr>
            <td>Vehicle Market Segmentation</td>
            <td>Unsupervised Learning</td>
            <td>Find the most distinctive clusters of vehicles.</td>
            <td> 
                <center>
                <a href="https://github.com/MNGARCIA085/Machine-Learning/blob/master/Unsupervised%20Learning/Clustering%20Analysis%20for%20Vehicle%20Market%20Segmentation/Vehicle%20Market%20Segmentation.ipynb" target='blanck'> Click here </a>  
                </center>
            </td>
          </tr>
          <tr>
            <td>Customer Segmentation</td>
            <td>Unsupervised Learning</td>
            <td>Analye customer data to group individuals based on shared characteristics.</td>
            <td> 
                <center>
                    <a href="https://github.com/MNGARCIA085/Machine-Learning/blob/master/Unsupervised%20Learning/Customer%20Segmentation/Customer%20segmentation%20with%20K-means.ipynb" target='blanck'> Click here</a>  
                </center>
            </td>
          </tr>

          <tr>
            <td>Weather Station Clustering</td>
            <td>Unsupervised Learning</td>
            <td>Weather Station Clustering with DBSCAN.</td>
            <td> 
                <center>
                    <a href="https://github.com/MNGARCIA085/Machine-Learning/blob/master/Unsupervised%20Learning/Weather%20Station%20Clustering/Weather%20Station%20Clustering%20with%20DBScan.ipynb" target='blanck'> Click here</a>  
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

export default MachineLearning;
