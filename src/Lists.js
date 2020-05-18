import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SearchList from './component/SearchList';

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

export default function Lists() {
  const [searchResults, setSearchResults] = useState([
    {
      displayName: 'Item A'
    },
    {
      displayName: 'Item B'
    },
    {
      displayName: 'Item C'
    },
    {
      displayName: 'Item D'
    },
    {
      displayName: 'Item E'
    },
    {
      displayName: 'Item F'
    },
    {
      displayName: 'Item G'
    },
    {
      displayName: 'Item H'
    },
    {
      displayName: 'Item I'
    },
    {
      displayName: 'Item J'
    },
    {
      displayName: 'Item K'
    },
    {
      displayName: 'Item L'
    },
    {
      displayName: 'Item M'
    },
    {
      displayName: 'Item N'
    },
    {
      displayName: 'Item O'
    },
    {
      displayName: 'Item P'
    },
    {
      displayName: 'Item Q'
    }
  ])

  const classes = useStyles();

  function handleQuery(q) {
    return [
      {
        displayName: 'Item 1'
      },
      {
        displayName: 'Item 2'
      }
    ]
  }

  return (
    <div className={classes.root}>
      <SearchList
        onQuery={handleQuery}
        items={searchResults}
      />
    </div>
  );
}

Lists.Title = 'Lists'
