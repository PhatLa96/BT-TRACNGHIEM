import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React, { Component, Fragment } from "react";
import { fetchAnswer } from "../../store/action/questionList";
import { connect } from "react-redux";

class MultipleChoice extends Component {
  handleChange = (id, answer) => {
    return this.props.dispatch(
      fetchAnswer({
        QuestionId: id,
        answer: {
          content: answer.content,
          exact: answer.exact,
        },
      })
    );
  };

  render() {
    const { content, answers, id } = this.props.item;
    return (
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend" style={{color:"#000000",fontWeight:"bold" }}>
            Câu hỏi {id} : {content}
          </FormLabel>
          <RadioGroup aria-label="gender" name={content} >
            {answers.map((answers) => {
              return (
                <Fragment>
                  <FormControlLabel
                    onChange={() => this.handleChange(id, answers)}
                    value={answers.content}
                    control={<Radio />}
                    label={answers.content}
                  />
                </Fragment>
              );  
            })}
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}
export default connect()(MultipleChoice);
