import React, { Component } from "react";
import NavHorizontal from "../Navbar/Horizontal/NavHorizontal";
import "survey-react/survey.css"
import * as SurveyForm from "survey-react"
export default class Survey extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    onCompleteComponent = () => {
        this.setState({
            isCompleted : true
        });
    }
  render() {
   var json =  {
        "completedHtml": "Thank you for submitting survey.",
        "pages": [
         {
          "name": "page1",
          "elements": [
           {
            "type": "boolean",
            "name": "question5",
            "title": "Are you satisfied with this site ?",
            "isRequired": true
           },
           {
            "type": "dropdown",
            "name": "question4",
            "title": "Select any option.",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "Bad"
             },
             {
              "value": "item2",
              "text": "Average"
             },
             {
              "value": "item3",
              "text": "Good"
             },
             {
              "value": "item4",
              "text": "Very Good"
             }
            ]
           },
           {
            "type": "checkbox",
            "name": "question2",
            "title": "Which option want to add in sites ?",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "Image"
             },
             {
              "value": "item2",
              "text": "Amount"
             },
             {
              "value": "item3",
              "text": "Name"
             }
            ]
           },
           {
            "type": "radiogroup",
            "name": "question3",
            "title": "select any one category",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "Food"
             },
             {
              "value": "item3",
              "text": "Travel"
             }
            ]
           },
           {
            "type": "text",
            "name": "question1",
            "title": "Add comments : ",
            "isRequired": true
           }
          ]
         }
        ]
       }
       var surveyrender = !this.state.isCompleted ? (
           <SurveyForm.Survey 
                json = {json}
                showCompletedPage={false}
                onComplete = {this.onCompleteComponent}
           />
           
       ) : null

       var onSurveyCompletion = this.state.isCompleted ? (
           <div><h1>Thanks for completing survey !</h1></div>
       ) : null
    return (
      <div>
        <NavHorizontal />
        <div className="container p-5">
        
        {surveyrender}
        {onSurveyCompletion}
        </div>
      </div>
    );
  }
}
