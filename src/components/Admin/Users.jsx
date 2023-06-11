import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import { API_URL } from "../../constants";
const columns = [
  { field: "id", headerName: "Mã ID", width: 70 },
  { field: "name", headerName: "Họ tên", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "phone", headerName: "Số điện thoại", width: 200 },
  { field: "address", headerName: "Địa chỉ", width: 200 },
  { field: "username", headerName: "Tên đăng nhập", width: 200 },
  {
    field: "role",
    headerName: "Quyền",
    width: 200,
  },
];

const Users = () => {
  const admin = useSelector((state) => state.admin);
  const [query, setQuery] = useState("");
  //get data from users with id, name, email, phone, address, username, role
  const rows = admin.users.map((user) => {
    return {
      id: user.maKh,
      name: user.hoTen,
      email: user.email,
      phone: user.soDt,
      address: user.diaChi,
      username: user.username,
      role: user.vaiTro,
    };
  });
  const [userFilter, setUserFilter] = useState([...rows]);

  useEffect(() => {
    setUserFilter(rows);
  }, [admin.loadingUser]);
  const handleFilterValue = (e) => {
    setQuery(e.target.value);
    const filter = rows.filter((user) => {
      return user.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setUserFilter(filter);
  };
  const handleDeleteUser = async () => {
    if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này?")) {
      const userId = selectedUsers[0].id; // Assuming only one user can be selected at a time
      try {
        const response = await axios.delete(`${API_URL}/api/v1/khach-hang/${userId}`);
        console.log("User deleted successfully:", response.data);
        // Perform any additional actions after deleting the user
      } catch (error) {
        console.error("Error deleting user:", error);
        // Handle error response from server
      }
      // delete from the rows so that it can be reflected in the UI
      const newRows = rows.filter((user) => user.id !== userId);
      setUserFilter(newRows);
      
    }
  };
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleSelectionChange = (selection) => {
    setSelectedUsers(rows.filter((user) => user.id === selection[0]));
  };
  return (
    <div className="basis-3/4">
      <h1 className="mb-5 text-2xl font-semibold">Người dùng</h1>
      <div className="flex items-center justify-between mb-5">
        <input
          className="px-5 py-3 border rounded-lg"
          type="text"
          name="search"
          placeholder="Tìm kiếm theo tên"
          value={query}
          onChange={handleFilterValue}
        />
        <button onClick={handleDeleteUser}><i className="fas fa-trash-alt text-xl"></i></button>
      </div>
      <div className="h-[400px] w-full bg-white">
        {admin.loadingUser ? (
          <Skeleton height={"300px"} />
        ) : (
          <DataGrid
            rows={userFilter}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            // get the selected rows
            onSelectionModelChange={handleSelectionChange}
          />
        )}
      </div>
    </div>
  );
};

export default Users;
