type LoginDataType = {
  sessionid: number;
  userid: number;
  locationid: number;
  clientid: number;
  roleid: number;
  message: string;
};
export type LoginResponseType = {
  data: LoginDataType;
  statusCode: number;
  message: string;
};
