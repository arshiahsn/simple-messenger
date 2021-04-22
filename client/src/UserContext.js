import React from "react"

const UserContext = React.createContext({
  object: {
    user: null
  },
  setObject: () => {}
});


export default UserContext;