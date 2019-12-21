import axios from 'axios';

export const createMember = ({userid, firstname, lastname, gender, stat}) => axios.post("/api/Accounts/create", {userid, firstname, lastname, gender, stat});

export const getInitialMember = () => axios.get("/api/Accounts/list");
export const getRecentMember = () => axios.get('/api/Accounts/list');

export const updateMember = ({_id, member: { userid, firstname, lastname, gender, stat }}) => axios.patch('/api/Accounts/update/' + _id, {userid, firstname, lastname, gender, stat, _id});

export const deleteMember = (id) => axios.delete("/api/Accounts/remove/" + id);


