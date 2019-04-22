import React from 'react';

const columnList = [
{
    title: 'Company Name',
    dataIndex: 'name',
    key: 'name'
}, {
    title: 'Description',
    dataIndex: 'description',
    key: 'description'
}, {
    title: 'Location',
    dataIndex: 'location',
    key: 'location'
}, {
    title: 'Acquisition Status',
    dataIndex: 'status',
    key: 'status'
}, {
    title: 'Key Contacts',
    dataIndex: 'contacts',
    key: 'contacts'
}, {
    title: 'Financial Performance',
    dataIndex: 'finances',
    key: 'finances'
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <div>
            <a>Edit</a>
            <a>Delete</a>
        </div>
    )
}];

const TargetList = ({ companies }) => (
    <div className="TargetList">
        <table columns={columnList} data= {companies}  />
    </div>
);

export default TargetList;