// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import List from '../elements/Forms/SelectTextBox/Dropdown/List';
import SearchField from '../elements/Forms/SelectTextBox/Dropdown/SearchField';
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
  listHeight ?: string,
  renderAllSuggestions: boolean,
  fullWidth: boolean,
  focusColor: string,
  coloredLabel: boolean,
  hoverStyle: string,
};

type State = {
  searchTerm: string,
  selectedValue: string,
  showSearch: boolean,
}

export default class SearchBar extends Component <Props, State> {
  static defaultProps = {
    searchPlaceholder: "Select an option",
  };

  state = {
    searchTerm: '',
    selectedValue: '',
    showSearch: false,
  };

  componentDidMount = () => {
    window.addEventListener('click', this.closeSelectArea);
  }

  componentWillUnmount = () => {
    window.removeEventListener('click', this.closeSelectArea);
  }

  dropDownSelect: ?HTMLDivElement;

  closeSelectArea = (e: Object) => {
    if (this.dropDownSelect !== null && this.dropDownSelect !== undefined) {
      if (this.dropDownSelect.contains(e.target)) {
        return;
      }
    }
    this.setState({
      searchTerm: '',
      showSearch: false,
    });
  };

  handleChange = (e: Object) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  handleSelection = (id: string, primary: string) => {
    this.handleTextAreaSelect();
    this.props.onSelection(id);
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
    const { showSearch , selectedValue, searchTerm } = this.state;
    const { size, style, label, searchPlaceholder, data, primary, secondary, renderAllSuggestions, fullWidth, coloredLabel, focusColor, listHeight, hoverStyle } = this.props;

    const isValueSelected = this.state.selectedValue === '' ? false : true;

    return (
      <ListWrapper
        fullWidth={fullWidth}
        innerRef={(listwrapper) => {this.dropDownSelect = listwrapper;}}
        size={size}
        style={style}
      >
        <TextArea
          clearValue={this.clearSelectedValue}
          coloredLabel={coloredLabel}
          focusColor={focusColor}
          isOpen={showSearch}
          isValueSelected={isValueSelected}
          label={label}
          onTextAreaClick={this.handleTextAreaSelect}
          placeholder={searchPlaceholder}
          size={size}
          value={selectedValue}
        />
        { showSearch &&
          <SearchWrapper size={size}>
            <SearchField
              focus={showSearch}
              focusColor={focusColor}
              onFieldChange={this.handleChange}
              placeholder=""
              size={size}
            />
            <List
              data={data}
              hoverStyle={hoverStyle}
              listHeight={listHeight}
              onSelection={this.handleSelection}
              primaryKey={primary}
              renderAllSuggestions={renderAllSuggestions}
              searchTerm={searchTerm}
              secondaryKey={secondary}
              size={size}
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
  width: ${({ fullWidth }) => fullWidth ? '100%' : '256px'};
  display: inline-block;
`;

ListWrapper.defaultProps = {
  fullWidth: false,
};
