// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import List from '../elements/Forms/SelectTextBox/Suggestions/List';
import SearchField from '../elements/Forms/SelectTextBox/Suggestions/SearchField';
import TextArea from '../elements/Forms/SelectTextBox/SelectTextArea';

import * as colors from '../styles/colors';
import { dropdownSizes } from '../styles/Forms/sizes';

type Props = {
  data: Array<Object>,
  onSelection: Function,
  searchPlaceholder?: string,
  primary: string,
  secondary?: string,
  size: string,
  style: string,
  label?: string,
  renderAllSuggestions: boolean,
  height: any,
};

type State = {
  searchTerm: string,
  selectedValue: string,
  showSearch: boolean,
}

export default class SearchBar extends Component <Props, State> {
  state = {
    searchTerm: '',
    selectedValue: '',
    showSearch: false,
  };

  static defaultProps = {
    searchPlaceholder: "Select an option",
  };

  dropDownSelect: ?HTMLDivElement;

  componentWillMount = () => {
    window.addEventListener('click', this.closeSelectArea);
  }

  closeSelectArea = (e: Object) => {
    if (this.dropDownSelect !== null && this.dropDownSelect !== undefined) {
      if (this.dropDownSelect.contains(e.target)) {
       return;
     }
    }

    this.setState({
      searchTerm: '',
      showSearch: false,
    })
  }

  handleChange = (e: Object) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  handleSelection = (id: string, primary: string) => {
    this.handleTextAreaSelect();
    // this.props.onSelection(id);
    this.setState({
      selectedValue: primary,
      searchTerm: '',
    });
  };

  handleTextAreaSelect = () => {
    this.setState({
      showSearch: !this.state.showSearch,
      searchTerm: '',
    });
  }

  formatPixelSize = (size: any) => {
    if (typeof(size) === 'number') {
      return size + 'px';
    } else if (typeof(size) === 'string') {
      return size;
    }
  }

  clearSelectedValue = () => {
    this.setState({
      selectedValue: "",
    });
  }

  render() {
    const renderSuggestions = this.props.data.length > 0;
    const { showSearch , selectedValue} = this.state;
    const height = this.formatPixelSize(this.props.height);
    const isValueSelected = this.state.selectedValue === '' ? false : true;

    return (
      <ListWrapper
        style={this.props.style}
        innerRef={(listwrapper) => {this.dropDownSelect = listwrapper}}
        size={this.props.size}
        >
        <TextArea
          label={this.props.label}
          value={selectedValue}
          onTextAreaClick={this.handleTextAreaSelect}
          placeholder={this.props.searchPlaceholder}
          isOpen={this.state.showSearch}
          size={this.props.size}
          isValueSelected={isValueSelected}
          clearValue={this.clearSelectedValue}
          />
        { showSearch &&
          <SearchWrapper size={this.props.size}>
            <SearchField
              focus={this.state.showSearch}
              placeholder=""
              onFieldChange={this.handleChange}
              size={this.props.size}
            />
            <List
              onSelection={this.handleSelection}
              searchTerm={this.state.searchTerm}
              data={this.props.data}
              primaryKey={this.props.primary}
              secondaryKey={this.props.secondary}
              renderAllSuggestions={this.props.renderAllSuggestions}
              size={this.props.size}
            />
        </SearchWrapper>
      }
      </ListWrapper>
    );
  }
}

const SearchWrapper = styled.div`
  border-radius: 3px;
  border: solid 1px ${colors['smoke']};
  padding: 8px;
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  z-index: 1000;
  background-color: ${colors['snow']};
  margin-top: 15px;
`;

const ListWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: ${({ size }) => dropdownSizes[size]['max-width']};
  min-width: ${({ size }) => dropdownSizes[size]['min-width']};
`;
