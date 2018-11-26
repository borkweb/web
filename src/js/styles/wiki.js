const styles = theme => ({
  '@global': {
    h1: theme.typography.h1,
    h2: theme.typography.h2,
    h3: theme.typography.h3,
    h4: theme.typography.h4,
    h5: theme.typography.h5,
    h6: theme.typography.h6,
  }, 
  headerWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  articleHeader: {
    flex: 1,
    order: 1
  },
  headerIcon: {
    order: 2
  },
  articleGridRoot: {
    flexGrow: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  articleGridPaper: {
    minHeight: 52,
    padding: 5,
  },
  articleGridCopy: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  plainLink: {
    textDecoration: 'none',
  },
  sectionDivider: {
    marginTop: 10,
    marginBottom: 10,
  },
  sectionHeader: {
    marginTop: 10,
    marginBottom: 10,
  },
  breadcrumbs: {
    display: 'flex',
    listStyle: 'none',
    padding: 0
  },
  tableOfContents: {
    '@global': {
      'ol': {
        listStyleType: 'none',
        counterReset: 'item',
        margin: 0,
        padding: 0,
      },
      'ol > li': {
        display: 'table',
        counterIncrement: 'item',
        lineHeight: '1.4em',
      },
      'ol > li:before': {
        content: 'counters(item, ".") ". "',
        display: 'table-cell',
        paddingRight: '0.6em',
      },
      'li ol > li': {
        margin: 0,
      },
      'li ol > li:before': {
        content: 'counters(item, ".") " "',
      }
    }
  },
  tocPaper: {
    padding: 10,
    display: 'inline-block'
  },
  tocHeaderOpen: {
    textAlign: 'center',
  },
  tocHide: {
    background: 'none!important',
    color: 'inherit',
    border: 'none',
    padding: '0!important',
    font: 'inherit',
    cursor: 'pointer',
  },
  textSection: {
    whiteSpace: 'pre-wrap',
  },
  createIcon: {
    marginLeft: 15,
  },
  hide: {
    display: 'none',
  },
});

export default styles;
