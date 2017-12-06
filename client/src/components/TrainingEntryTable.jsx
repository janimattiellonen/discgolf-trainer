import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Table, Thead, Th, Tr, Td } from 'reactable';

export default function TrainingEntryTable({ selectedType, entries }) {
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Id</Th>
                </Tr>    
            </Thead>

            <Tr>
                <Td>123456</Td>
            </Tr>
        </Table>
    )
}

TrainingEntryTable.propTypes = {
    trainingEntries: ImmutablePropTypes.list.isRequired,
};