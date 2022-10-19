let response = await fetch(
    "http://192.168.1.9:3000/register",
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
      body: JSON.stringify(Student_Res),
    }
  )

  let responseJson = await response.json()