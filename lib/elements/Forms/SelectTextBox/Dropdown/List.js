// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import Item from './Item';
import * as colors from '../../../../styles/colors';

type Props = {
  data: Array<Object>,
  searchTerm: string,
  onSelection: Function,
  primaryKey: string,
  secondaryKey?: string,
  size: string,
};

type State = {
  showSuggestions: boolean,
};

export default class Suggestions extends Component <Props, State> {
  state = {
    showSuggestions: false,
  };

  componentWillMount() {
    if (this.props.renderAllSuggestions) {
      this.showSuggestion();
    } else if (this.props.searchTerm) {
      this.showSuggestion();
    } else {
      this.hideSuggestion();
    }
  }

  componentWillReceiveProps(nextProps: Object) {
    if (this.props.renderAllSuggestions) {
      this.showSuggestion();
    } else if (nextProps.searchTerm) {
      this.showSuggestion();
    } else {
      this.hideSuggestion();
    }
  }

  onUserSelection = (id: string, primary: string) => {
    this.hideSuggestion();
    this.props.onSelection(id, primary);
  };

  // Hide suggestion box when a user selects a word, and when there is no matched word
  hideSuggestion = () => {
    this.setState({
      showSuggestions: false,
    });
  };

  // Show suggestion when there is a matched word
  showSuggestion = () => {
    this.setState({
      showSuggestions: true,
    });
  };

  renderSuggestions = (item: Object) => {
    return (
      <Item
        key={item.id}
        id={item.id}
        onSelection={this.onUserSelection}
        primary={item[this.props.primaryKey]}
        secondary={item[this.props.secondaryKey]}
        size={this.props.size}
      />);
  };

  render() {
    const { data, primaryKey} = this.props;
    let { searchTerm } = this.props;
    searchTerm = searchTerm.toLowerCase();

    const dropDownSuggestions = data.filter((item) => {
      return _.startsWith(item[primaryKey].toLowerCase(), searchTerm, 0);
    });

    const showSuggestions = this.state.showSuggestions;

    return (
      <SuggestionWrapper height={'200px'}>
        { showSuggestions &&
          dropDownSuggestions.map(this.renderSuggestions)
        }
      </SuggestionWrapper>
    );
  }
}

const SuggestionWrapper = styled.div`
  width: 100%;
  margin-top: 4px;
  height: ${ props => props.height};
  overflow-y: scroll;
  border: solid 1px ${colors['smoke']};
  border-radius: 3px;
`;

SuggestionWrapper.defaultProps = {
  height: '200px'
}
