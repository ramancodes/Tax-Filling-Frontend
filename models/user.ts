import moment from "moment-timezone";

export const userDetailsModel = (userObj: any = {}) => {
  return {
    id: userObj?.id ? userObj?.id : "N/A",
    email: userObj?.user?.email ? userObj?.user?.email : "N/A",
    username: userObj?.user?.username ? userObj?.user?.username : 'N/A',
    role: userObj?.user?.role ? userObj?.user?.role : 'N/A',
    firstName: userObj?.firstName ? userObj?.firstName : "N/A",
    middleName: userObj?.middleName ? userObj?.middleName : "N/A",
    lastName: userObj?.lastName ? userObj?.lastName : "N/A",
    gender: userObj?.gender ? userObj?.gender : "N/A",
    dob: userObj?.dob
    ? moment
        .tz(userObj.dob, moment.tz.guess())
        .format("YYYY-MM-DD")
    : "N/A",
    phoneNo: userObj?.phoneNo ?? "N/A",
    address: userObj?.address ? userObj?.address : "N/A",
    occupation: userObj?.occupation ? userObj?.occupation : "N/A",
    website: userObj?.website ? userObj?.website : "N/A",
    createdAt: userObj?.user?.createdAt
    ? moment
        .tz(userObj.user.createdAt, moment.tz.guess())
        .format("YYYY-MM-DD, HH:mm")
    : "N/A",
    UserId: userObj?.userId ? userObj?.userId : "N/A",
  };
};
