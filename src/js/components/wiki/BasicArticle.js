import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import ArticleHeader from './ArticleHeader';
import { getTitle, getDescription } from '../../helpers/wikiHelper';
import styles from '../../styles/wiki';

@withStyles(styles, { withTheme: true })
class BasicArticle extends Component {
  render() {
    const { path, toggleWikiDrawer, wikiDrawerOpen, markdown, classes } = this.props;

    const title = getTitle(markdown, path);
    const description = getDescription(markdown, path);

    return (
      <div>
        <ArticleHeader 
          title={title} 
          description={description} 
          toggle={toggleWikiDrawer}
          open={wikiDrawerOpen}
        />
        <Divider className={classes.sectionDivider}/>
        <Typography variant="body1" component="section">
          {this.props.children}
        </Typography>
      </div>
    );
  }
}

export default BasicArticle;
