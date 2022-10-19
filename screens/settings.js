//
import { useEffect, useState } from "react"
import { View, Text, Image, StyleSheet } from "react-native"

export default function SignUp() {
  const [dataJson, setdataJson] = useState("init")
  async function getMoviesFromApi() {
    try {
      //
      let response = await fetch(
        "https://v0.yiketianqi.com/api?unescape=1&version=v91&appid=43656176&appsecret=I42og6Lm&ext=&cityid=&city=",
        {
          method: "POST", // ，GET/POST/PUT/DELETE
          mode: "cors", // ，no-cors/*cors/same-origin
          cache: "no-cache", // ，*default/no-cache/reload/force-cache/only-if-cached
          credentials: "same-origin", // cookie，*same-origin/include/omit
          headers: {
            "Content-Type": "application/json", // body，'application/x-www-form-urlencoded'
          },
          redirect: "follow", // redirect，*follow/manual/error
          referrer: "no-referrer", // ，no-referrer, *client
          // body: JSON.stringify(data),
        }
      )
      let responseJson = await response.json()
      console.log("11111", responseJson)

      setTimeout(() => {
        setdataJson(responseJson.country)
      }, 1000)
      return responseJson.movies
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getMoviesFromApi()
  }, [])

  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          paddingTop: 300,
          paddingLeft: 100,
          color: "red",
        }}
      >
        Setting Page
        <Text>Data require：{dataJson}</Text>
      </Text>
    </View>
  )
}
