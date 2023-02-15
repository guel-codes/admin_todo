import axios from "axios";

export default async function handler(req, res) {
  await axios
    .get("http://localhost:3002/admin/api/resources/todos/actions/list")

    .then((response) => {
      return res.status(200).json(response.data.records);
    })
    .catch((error) => {
      console.log(error);
    });
}