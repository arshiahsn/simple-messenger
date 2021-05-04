import React from "react"

const AllUsersContext = React.createContext({
  users: {
    list: null
  },
  setUsers: () => {},
  selectedUser: null,
  setSelectedUser: () => null,
  searchUsers: null,
  setSearchUsers: () => null
});


export default AllUsersContext;