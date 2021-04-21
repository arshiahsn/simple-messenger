import React from "react"

const UserContext = React.createContext({
  object: {
    user: null,
    token: null
  },
  setObject: () => {}
});


export default UserContext;