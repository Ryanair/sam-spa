exports.lambdaHandler = async (event) => {
  const { Records: [{ cf: { request } }] } = event;
  request.uri = '/index.html';
  return request;
};
