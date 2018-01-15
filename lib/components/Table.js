// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { uniqueId, sortBy } from 'lodash';

import * as colors from '../styles/colors';
import TableRow from '../elements/Table/Row';
import TableItem from '../elements/Table/RowItem';
import HeaderItem from '../elements/Table/HeaderItem';

type Props = {
  columns: Array<Object>,
  data: Array<Object>,
  defaultFilterColumn: string,
  defaultFilterDirection: number,
  displayTableBorder: boolean,
  displayRowBorder: boolean,
  onRowClick?: Function,
  tableStyle: Object,
}

type State = {
  filterColumn: string,
  filterDirection: number,
  data: Array<Object>,
}

const initialList = (data: Array<Object>, column: string, direction: number) => {
  if (column === '') {
    return data;
  }

  return direction === 1 ?
    sortBy(data, [column]) :
    sortBy(data, [column]).reverse();
};

export default class Table extends Component<Props, State> {

  static defaultProps = {
    defaultFilterColumn: '',
    defaultFilterDirection: 0,
    tableStyle: {},
    displayTableBorder: false,
    displayRowBorder: true,
  };

  state = {
    filterColumn: this.props.defaultFilterColumn,
    filterDirection: this.props.defaultFilterDirection,
    data: initialList(
      this.props.data,
      this.props.defaultFilterColumn,
      this.props.defaultFilterDirection
    ),
  };

  componentWillReceiveProps(nextProps: Props) {
    this.setState({
      filterColumn: this.props.defaultFilterColumn,
      filterDirection: this.props.defaultFilterDirection,
      data: initialList(
        nextProps.data,
        nextProps.defaultFilterColumn,
        nextProps.defaultFilterDirection
      ),
    });
  }

  handleToggleHeader = (e: Object) => {
    const selectedColumn: string = e.target.getAttribute('value');
    const { filterDirection, data, filterColumn } = this.state;

    let direction: number;
    let sortedData = sortBy(data, [selectedColumn]);

    if (selectedColumn !== filterColumn || filterDirection === 0) {
      direction = 1;
    } else if (filterDirection === -1) {
      direction = 1;
    } else if (filterDirection === 1) {
      sortedData.reverse();
      direction = -1;
    }

    this.setState({
      filterColumn: selectedColumn,
      filterDirection: direction,
      data: sortedData,
    });
  };

  renderHeaders = (headers: Array<Object>, selectedColumn: string) => {
    return (headers.map((item) => {
      const keyId = uniqueId();
      let { filterDirection } = this.state;

      if (selectedColumn !== item.attribute) {
        filterDirection = 0;
      }

      return (
        <HeaderItem
          attribute={item.attribute}
          direction={filterDirection}
          key={keyId}
          onToggle={this.handleToggleHeader}
          value={item.header}
          width={item.width}
        />);
    }));
  };

  renderTable = (tableData: Array<Object>, tableColumns: Array<Object>, rowBorder: boolean, onRowClick: Function) => {
    return (
      tableData.map((data) => this.renderTableRow(data, tableColumns, rowBorder, onRowClick))
    );
  };

  renderTableData = (data: Object, value: string) => {
    const keyId = uniqueId('table_data');
    return (
      <TableItem
        key={keyId}
        width={data.width}
      >
        {value}
      </TableItem>
    );
  }

  renderTableRow = (data: Object, tableColumns: Array<Object>, rowBorder:      boolean, onRowClick: Function) => {
    const keyId = uniqueId('table_row');

    let rowClick;

    if (onRowClick !== undefined) {
      rowClick = () => onRowClick(data);
    } else {
      rowClick = undefined;
    }

    return (
      <TableRow
        displayBorder={rowBorder}
        key={keyId}
        onClick={rowClick}
      >
        {tableColumns.map((item) => this.renderTableData(item, data[item.attribute]))}
      </TableRow>
    );
  }

  render() {
    const {
      tableStyle,
      columns,
      displayRowBorder,
      displayTableBorder,
      onRowClick,
    } = this.props;

    const {
      filterColumn,
      data,
    } = this.state;

    return (
      <TableContainer
        displayBorder={displayTableBorder}
        style={tableStyle}
      >
        <TableRow>
          {this.renderHeaders(columns, filterColumn)}
        </TableRow>
        {this.renderTable(data, columns, displayRowBorder, onRowClick)}
      </TableContainer>
    );
  }
}

function showBorder({ displayBorder }) {
  if (displayBorder) {
    return `solid 1px ${colors['darkSmoke']}`;
  }
  return 'none';
}

const TableContainer = styled.div`
  max-width: ${({ maxWidth }) => maxWidth + 'px'};
  min-width: ${({ minWidth }) => minWidth + 'px'};
  width: 100%;
  border: ${ showBorder };
  display: block;
  overflow: auto;
`;

TableContainer.defaultProps = {
  maxWidth: 1040,
  minWidth: 320,
  displayBorder: false,
};
