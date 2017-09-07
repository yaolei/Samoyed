import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {grey600} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
const muiTheme = getMuiTheme({
    palette: {
      textColor: grey600,
    },
    appBar: {
      height: 50,
      color: '#757575',
    },
});

export default class Home extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
        $('#leftDrawerDiv').show();
        $('.mainPage').show();
      // when jump from admin page need to reset index style
        var leftNavWidth = $('.leftNavHeight').width();
            $('#root2').css('margin-left', leftNavWidth + 2);
            $('#root3').hide();
    }

    render() {
        return(
            <MuiThemeProvider muiTheme={muiTheme} >
        	      <AppBar title="Alpaca" style={{height: 'calc(100% - 64px)'}} />
            </MuiThemeProvider>
        );
    }
}