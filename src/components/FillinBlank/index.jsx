import { FormControl, FormLabel, TextField } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAnswer } from "../../store/action/questionList";
import { debounce } from "lodash";
class FillinBlank extends Component {
  handleChange = debounce((event) => {
    this.props.dispatch(
      fetchAnswer({
        QuestionId: event.target.id,
        answer: {
          content: event.target.name,
          exact:
            event.target.name.toLowerCase() === event.target.value.toLowerCase()
              ? true
              : false,
        },
      })
    );
  }, 1000);
  render() {
    const { content, answers, id } = this.props.item2;
    return (
      <div>
        <FormControl component="fieldset" style={{ marginTop: 20 }}>
          <FormLabel
            style={{
              marginBottom: 10,
              color: "#000000",
              fontWeight: "bold",
              lineHeight: 1.5,
            }}
            component="legend"
          >
            Câu hỏi {id} : {content}
          </FormLabel>
          <form style={{ marginBottom: 10 }} noValidate autoComplete="off">
            <TextField
              id={id}
              label="Nhập đáp án"
              variant="outlined"
              name={answers[0].content}
              onChange={this.handleChange}
              style={{ width: 400 }}
            />
          </form>
        </FormControl>
      </div>
    );
  }
}
export default connect()(FillinBlank);
