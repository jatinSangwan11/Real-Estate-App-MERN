// situation when there is no error in the system but we wanted to throw an error
export const errorHandler= (statusCode, message)=>{
  const error = new Error();
  error.statusCode= statusCode
  error.message= message
  return error;
}