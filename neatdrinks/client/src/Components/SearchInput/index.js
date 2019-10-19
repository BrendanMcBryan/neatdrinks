import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginBottom: 50,
      width: 500,
    },
    dense: {
      marginTop: 19,
    }
  }));

export default function SearchInput() {
    const classes = useStyles();
    return(
    <TextField
    id="input-with-placeholder"
    fullWidth
    label="search by cocktail name"
    placeholder="Pina colada, tequila sunrise, etc"
    className={classes.textField}
    margin="normal"
    />
    )
}
