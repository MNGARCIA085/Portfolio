import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function NLP() {
  return (
    <div className="container">

      <div class="row">
        <div class="col-md-9 offset-md-1">

        <h3 className="my-4"> <font color='#2874a6'> <center>NLP</center></font></h3>

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
            <td>Sentiment Analysis - COVID</td>
            <td>Given a set of tweets, analyze whether the sentiment is positive, negative, or neutral</td>
            <td>
                <center>
                    <a href="https://github.com/MNGARCIA085/NLP/blob/master/Sentiment%20Analysis%20-%20COVID/Sentiment%20Analysis.ipynb" target='blanck'> Click here </a>  
                </center> 
            </td>
                
          </tr>
          <tr>
            <td>SkimLit</td>
            <td>Build an NLP model to make reading medical abstracts easier.</td>
            <td> 
                <center>
                <a href="https://github.com/MNGARCIA085/NLP/blob/master/SkimLit/SkimLit.ipynb" target='blanck'> Click here </a>  
                </center>
            </td>
          </tr>
          <tr>
            <td>Hate Speech Detection</td>
            <td>Classify text as hateful or non-hateful based on linguistic features.</td>
            <td> 
                <center>
                    <a href="https://github.com/MNGARCIA085/NLP/blob/master/Hate%20Speech%20Detection/Hate%20Speech%20Detection.ipynb" target='blanck'> Click here</a>  
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

export default NLP;
