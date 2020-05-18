import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Encounters() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Encounters!
    </div>
  );
}

Encounters.Title = 'Encounters'
