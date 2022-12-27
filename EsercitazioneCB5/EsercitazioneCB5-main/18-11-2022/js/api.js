const GET = async (URL) => {
  const response = await fetch(URL);
  return await response.json();
};
const getId = async (URL) => {
  let max = 1;
  const response = GET(URL);
  console.log("response" + response);
  const resp = response.this((res) => res.id);
  console.log("resp" + resp);
  const arrId = parseInt(Object.values(resp));
  max = Math.max(arrId);
  return max;
};

const POST = async (URL, body) => {
  return await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

const DELETE = async (URL, id) => {
  return await fetch(`${URL}/${id}`, {
    method: "DELETE",
  });
};

const PATCH = async (URL, id, body) => {
  return await fetch(`${URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export { GET, POST, DELETE, getId, PATCH };
