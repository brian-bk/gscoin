import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ className, children }, props) => (
  <table className={`table ${className ? className : ''}`} {...props}>
    {children}
  </table>
);

Table.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Table;
