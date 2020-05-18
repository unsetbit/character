import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '10px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  nameInput: {
    width: '100%'
  },
  title: {
    flexGrow: 1,
  },
}));

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};

const CAPTURED_KEY_CODES = [
  9, // tab
  13, // enter
  27, // escape
  38, // up
  40 // down
];

export default function Characters() {
  const [searchedName, setSearchedName] = useState('')

  const classes = useStyles();

  function handleChange(e) {
    setSearchedName(e.target.value)
  }

  function handleKeyDown(e) {
    if (CAPTURED_KEY_CODES.includes(e.keyCode)) {
      e.preventDefault()
      switch(e.keyCode) {
        case 9:
          // tab pressed
        break;
        case 13:
          // enter pressed
        break;
        case 27:
          // escape pressed
        break;
        case 38:
          // up pressed
        break;
        case 40:
          // down pressed
        break;
        default:
          throw new Error('Handling a key that\'s not in captured codes');
        break;
      }
      // do something
    }
  }

  return (
    <div className={classes.root}>
      <TextField
        className={classes.nameInput}
        label="Name"
        autoFocus
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        InputProps={{
          endAdornment:(
          <InputAdornment position="end">
              <IconButton
                onMouseDown={handleMouseDownPassword}
                aria-label="toggle password visibility"
              >
                <SearchIcon/>
              </IconButton>
          </InputAdornment>
          )
        }}
      />
      {searchedName}
    </div>
  );
}

Characters.Title = 'Characters'
