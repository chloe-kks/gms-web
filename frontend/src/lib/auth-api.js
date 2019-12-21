import axios from 'axios';
axios.defaults.credentials = 'include';

export const checkEmailExists = (email) => 
	axios.get("/api/auth/exists/email/" + email);
export const checkUseridExists = (userid) => 
	axios.get("/api/auth/exists/userid/" + userid);
export const localRegister = ({email, userid, password}) => 
	axios.post("/api/auth/register/local", { email, userid, password });
export const localLogin = ({email, password}) => 
	axios.post("/api/auth/login/local", { email, password });
export const checkStatus = () => 
	axios.get("/api/auth/check");
export const logout = () => 
	axios.post("/api/auth/logout");
