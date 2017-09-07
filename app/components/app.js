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
      hintText="This TextField is Required"
      floatingLabelText="Department"
    /><br />
    <TextField
      hintText="This is your full name"
      floatingLabelText="Name"
    /><br />
    <TextField
      hintText="Set a skill you want to share"
      floatingLabelText="Sharing Skill"
    /><br />
     <TextField
      hintText="which skill you need to study"
      floatingLabelText="Learning Skill"
    /><br />

  </div>
      </MuiThemeProvider>
    );
  }
}