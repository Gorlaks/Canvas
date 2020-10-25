import React from "react";
import { Table as AntTable } from "antd";

const UsersTable = (props: {
  columns: Array<Record<string, any>>
  data: Array<Record<string, any>>
}) => {
  const { columns, data } = props;
  return (
    <div className="users__table">
			<AntTable columns={columns} dataSource={data} />
    </div>
  )
}

export default UsersTable;