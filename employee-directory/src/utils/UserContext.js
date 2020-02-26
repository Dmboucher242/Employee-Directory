import React from "react";

const UserContext = React.createContext({
    login: "",
    image: "",
    language: "",
    handleBtnClick: () => {}
});

export default UserContext;