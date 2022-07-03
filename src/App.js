import axios from "axios";
import React from "react";

const API_endpoint = `https://api.openweathermap.org/data/2.5/onecall?`
const API_key = `6a81e65b81c4fe907f5efc1c785ff400`

function App() {
  const [latitude, setLatitude] = React.useState()
  const [longitude, setLongitude] = React.useState()

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
    })

    const finalAPIendpoint = `${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${API_key}`

    axios.get(finalAPIendpoint)
    .then((response) => {
      console.log(response.data)
    })
  }, [latitude, longitude])

  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
