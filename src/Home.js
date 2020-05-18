import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PublicIcon from '@material-ui/icons/Public';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  icon: {
    color: 'inherit'
  },
  title: {
    flexGrow: 1,
  },
}));

function emoticon(emoji) {
  return <span style={{ fontSize: '150%' }}>{ emoji }</span>
}

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav">
       <ListItem button onClick={() => location.hash='/Characters'}>
         <ListItemIcon className={classes.icon}>
          { emoticon('🎅') }
         </ListItemIcon>
         <ListItemText primary="Characters" />
       </ListItem>
       <ListItem button onClick={() => location.hash='/Places'}>
         <ListItemIcon className={classes.icon}>
         { emoticon('🗺') }
         </ListItemIcon>
         <ListItemText primary="Places" />
       </ListItem>
       <ListItem button onClick={() => location.hash='/Items'}>
         <ListItemIcon className={classes.icon}>
         { emoticon('🔮') }
         </ListItemIcon>
         <ListItemText primary="Items" />
       </ListItem>
       <ListItem button onClick={() => location.hash='/Hazards'}>
         <ListItemIcon className={classes.icon}>
         { emoticon('☠️') }
         </ListItemIcon>
         <ListItemText primary="Hazards" />
       </ListItem>
       <ListItem button onClick={() => location.hash='/Encounters'}>
         <ListItemIcon className={classes.icon}>
         { emoticon('⚔️') }
         </ListItemIcon>
         <ListItemText primary="Encounters" />
       </ListItem>
     </List>
    </div>
  );
}

Home.Title = 'Home'
