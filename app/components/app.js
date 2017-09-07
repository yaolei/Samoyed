import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {grey600} from 'material-ui/styles/colors';
const muiTheme = getMuiTheme({
    palette: {
      textColor: grey600,
    },
    style: {
      width:200,
    },
});


export default class app extends React.Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme} >
<div>
    <TextField
      hintText="This is Required Field"
      floatingLabelText="Department"
    /><br />
    <TextField
      hintText="Your Full Name"
      floatingLabelText="Name"
    /><br />
    <TextField
      hintText="Your Mobile Name"
      floatingLabelText="Mobile Num"
    /><br />
    <TextField
      hintText="This is Required Field"
      floatingLabelText="Sharing Skill"
    /><br />
    <TextField
      hintText="This is Required Field"
      floatingLabelText="Learning Skill"
    /><br />
    <TextField
      hintText="Floating Label Text"
      floatingLabelText="Employee Serial"
    />
  </div>
      </MuiThemeProvider>
    );
  }
}