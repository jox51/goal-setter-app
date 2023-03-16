import axios from "axios"

const url =
  "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote"

const config = {
  headers: {
    "X-RapidAPI-Key": "1240f4bf06msh22e9d539d535101p1b1ff3jsn337bd1967b6d",
    "X-RapidAPI-Host":
      "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com"
  },
  params: { token: "ipworld.info" }
}

export async function getapi() {
  const response = await axios(url, config)
  var data = await response.data
  return data
}
