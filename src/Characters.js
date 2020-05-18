import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import SearchList from './component/SearchList';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '10px'
  }
}));

export default function Characters() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SearchList />
    </div>
  );
}

Characters.Title = 'Characters'
