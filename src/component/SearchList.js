import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

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

const handleMouseDown = (event) => {
  event.preventDefault();
};

const CAPTURED_KEY_CODES = [
  9, // tab
  13, // enter
  27, // escape
  38, // up
  40 // down
];

function listItem(item, ref) {
  console.log('ref', ref);
  return <ListItem
    button
    key={item.displayName}
    selected={ ref !== null }
  >
    <span ref={ref || null}></span>
    <ListItemText
      primary={ item.displayName }
    />
  </ListItem>
}

export default function SearchList(props) {
  const [searchedName, setSearchedName] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)
  const [highlighted, setHighlighted] = useState(null)

  const { onQuery, items } = props

  const ref = React.createRef()
  const containerRef = React.createRef()

  const classes = useStyles()

  function handleChange(e) {
    setSearchedName(e.target.value)
    onQuery(e.target.value)
  }

  function handleKeyDown(e) {
    if (CAPTURED_KEY_CODES.includes(e.keyCode)) {
      let highlightIndex = items.indexOf(highlighted);

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
          highlightIndex--;

          if (highlightIndex === -1) {
            highlightIndex = items.length - 1;
          }

          setHighlighted(items[highlightIndex]);
        break;
        case 40:
          // down pressed
          highlightIndex++;
          if (highlightIndex === items.length) {
            highlightIndex = 0;
          }

          setHighlighted(items[highlightIndex]);
        break;
        default:
          throw new Error('Handling a key that\'s not in captured codes');
        break;
      }
      // do something
    }
    console.log(highlighted);

    // ---
    setTimeout(() => {
      console.log('TIMEOUT!')
      try {
        console.log(ref)
        if (!ref.current) return;

        const elementTop = ref.current.getBoundingClientRect().top;
        const windowTop = window.scrollY;
        const windowBottom = window.innerHeight + windowTop;
        const containerTop = containerRef.current.offsetTop;

        const windowHasScrolled = window.scrollY > 10;

        const elementIsAboveContainerTop = elementTop < containerTop + 20;
        const elementIsBelowContainerBottom = elementTop > window.innerHeight;
        const elementIsOutsideOfContainer = elementIsAboveContainerTop || elementIsBelowContainerBottom;

        if (elementIsOutsideOfContainer) {
          let scrollDestination;

          if (elementIsAboveContainerTop) {
            if (elementTop > -1 * (window.innerHeight / 2)) {
              scrollDestination = window.scrollY - window.innerHeight / 2;
            } else {
              scrollDestination = elementTop;
            }
          } else {
            if (elementTop < window.innerHeight * 1.5) {
              scrollDestination = window.scrollY + window.innerHeight / 2;
            } else {
              scrollDestination = elementTop;
            }
          }

          window.scrollTo(0, scrollDestination);
          console.log('SCROLLED!')
        }
      } catch (e) {
        console.error(e)
      }
    }, 100)
    // ---

  }

  console.log(containerRef, ref)

  function isSelected(i) {
    return i === selectedItem
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
                onMouseDown={handleMouseDown}
              >
                <SearchIcon/>
              </IconButton>
          </InputAdornment>
          )
        }}
      />
      <a ref={containerRef}></a>
      <List component="nav">
        { items.map(item => listItem(item, item === highlighted ? ref : null))}
      </List>
    </div>
  );
}
