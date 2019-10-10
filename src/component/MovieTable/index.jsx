import React from 'react';
import { Table } from 'semantic-ui-react';
import CustomInput from '../CustomInput';
import FilterDropdown from '../FilterDropdown';
import TableContent from '../TableContent';
import './MovieTable.scss';

const MovieTable = ({triggerModal}) => (
<div className="table-container">
  <table className="table">
    <thead className="">
      <tr className="">
        <th className="">Title</th>
        <th className="">Year</th>
        <th className="">Runtime</th>
        <th className="">Revenue</th>
        <th className="">Rating</th>
        <th className="">Genre</th>
      </tr>
    </thead>
    <tbody className="">
      <tr className="">
        <td className=""><CustomInput /></td>
        <td colSpan='4' className=""></td>
        <td className=""><FilterDropdown /></td>
      </tr>
      <tr className="table-body" onClick={triggerModal}>
        <td className="">Jamie</td>
        <td className="">Approved</td>
        <td className="">Approved</td>
        <td className="">Approved</td>
        <td className="">Approved</td>
        <td className="">Requires call</td>
      </tr>
      <tr className="table-body">
        <td className="">Jamie</td>
        <td className="">Approved</td>
        <td className="">Approved</td>
        <td className="">Approved</td>
        <td className="">Approved</td>
        <td className="">Requires call</td>
      </tr>
      <tr className="table-body">
        <td className="">Jamie</td>
        <td className="">Approved</td>
        <td className="">Approved</td>
        <td className="">Approved</td>
        <td className="">Approved</td>
        <td className="">Requires call</td>
      </tr>
    </tbody>
  </table>
</div>
)

export default MovieTable;
