import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/wiki';

@withStyles(styles, { withTheme: true })
class ArticleGrid extends Component {
  render() {
    const { frontMatter } = this.props;
    return (
    );
  }
}

export default ArticleGrid;
