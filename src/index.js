import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Paper from '@material-ui/core/Paper'
import Textfield from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import MomentUtils from 'material-ui-pickers/utils/moment-utils'
import DatePicker from 'material-ui-pickers/DatePicker'

const styles = (theme) =>{
    return {
        container: {
            width:'500px',
            margin:'0 auto',
            padding: theme.spacing.unit *2
        },
        textField: {
            marginBottom: theme.spacing.unit * 2
        }
    }
}
    
class App extends Component {
   render() {
       const classes = this.props.classes
       return(
           <MuiPickersUtilsProvider utils={MomentUtils}>
            <Paper className={classes.container}>
            <Typography
                variant='display1'
                color='primary'
            >
                Registro de la Comunidad
            </Typography>
                <Textfield
                    name='firstName'
                    label='Nombre'
                    fullWidth
                    className={classes.textField}
                />
                <Textfield
                    name='Lastname'
                    label='Apellido'
                    fullWidth
                    className={classes.textField}
                />
                <Textfield
                    name='Cellphone'
                    label='Celular'
                    fullWidth
                    className={classes.textField}
                />
                <Textfield
                    name='E-mail'
                    label='Correo'
                    fullWidth
                    className={classes.textField}
                />
                <Textfield
                    name='Fb'
                    label='Facebook'
                    fullWidth
                    className={classes.textField}
                />
                <DatePicker
                    name='Bdate'
                    label='Fecha N'
                    fullWidth
                    className={classes.textField}
                />
                <Textfield
                    name='Other'
                    label='Interes'
                    fullWidth
                    className={classes.textField}
                    select
        >
            <MenuItem>Javascript</MenuItem>
            <MenuItem>Firebase</MenuItem>
            <MenuItem>Html</MenuItem>
        </Textfield>
        <Button variant="contained" color="primary" className={classes.button}>
        Guardar
      </Button>
      </Paper>
      </MuiPickersUtilsProvider>
    )
   }
}
App = withStyles(styles)(App)
ReactDOM.render(
    <App />,
    document.getElementById('root')
)