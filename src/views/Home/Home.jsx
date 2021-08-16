import React, { Component } from "react";
import FillinBlank from "../../components/FillinBlank";
import MultipleChoice from "../../components/MultipleChoice";
import { fetchQuestion } from "../../store/action/questionList";
import { connect } from "react-redux";
import { Button, Container, Grid, Typography } from "@material-ui/core";

class Home extends Component {
  handleClick = (event) => {
    event.preventDefault();
    let result = 0;
    this.props.resultList.filter((question) => {
      if (question.answer.exact === true) {
        result++;
      }
    });
    alert(`Bạn đã đúng: ${result} / 8`);
  };
  render() {
    let multipleChoice = this.props.questionList.filter(
      (question) => question.questionType === 1
    );
    let fillinBlank = this.props.questionList.filter(
      (question) => question.questionType === 2
    );
    return (
      <div>
        <Typography
          variant="h3"
          component="h1"
          color="primary"
          style={{ textAlign: "center", marginBottom: 15 }}
        >
          Danh sách câu hỏi
        </Typography>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {multipleChoice.map((item, index) => {
              return (
                <Grid item xs={6} sm={6} md={6}>
                  <MultipleChoice key={index} item={item} />
                </Grid>
              );
            })}
            {fillinBlank.map((item, index) => {
              return (
                <Grid item xs={6} sm={6} md={6}>
                  <FillinBlank key={index} item2={item} />
                </Grid>
              );
            })}
          </Grid>
          <Button
            fullWidth={true}
            textAlign="center"
            variant="contained"
            color="primary"
            onClick={this.handleClick}
          >
            Nộp bài
          </Button>
        </Container>
      </div>
    );
  }
  async componentDidMount() {
    this.props.dispatch(fetchQuestion);
  }
}
const mapStateToProps = (state) => {
  return {
    questionList: state.question.questionList,
    resultList: state.question.resultList,
  };
};
export default connect(mapStateToProps)(Home);
