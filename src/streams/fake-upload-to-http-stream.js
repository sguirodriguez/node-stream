import { Readable } from "node:stream";
import { OneToHundredStream } from "./fundamentals.js";
 

const makeRequest = async () =>{
  console.log("log make request 1")
  const response = await fetch('http://localhost:3333', {
   method: 'POST',
   body: new OneToHundredStream(),
   duplex: 'half',
  })

  const handleResponse = await response.text()
  
  console.log("log make request 2", handleResponse)

  return handleResponse
}

makeRequest()

