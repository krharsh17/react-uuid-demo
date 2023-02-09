import './App.css';
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import uuid from 'react-uuid'

export default function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [id, setId] = useState("")

  const onGenerateButtonClick = () => {
    // Call the relevant uuidFrom.. method here

    // uuidFromUuidV4()
    // uuidFromReactUUID()
    // uuidFromCrypto()
    // uuidFromCode()
  }

  const uuidFromUuidV4 = () => {
    const newUuid = uuidv4()
    setId(newUuid)
  }

  const uuidFromReactUUID = () => {
    const newUuid = uuid()
    setId(newUuid)
  }

  const uuidFromCrypto = () => {
    const newUuid = crypto.randomUUID()
    setId(newUuid)
  }

  const uuidFromCode = () => {
    const newUuid = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
    setId(newUuid)
  }

  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <div>Create your profile</div>
      </div>
      <div className={"inputContainer"}>
        <input
          value={name}
          placeholder="Enter your full name"
          onChange={ev => setName(ev.target.value)}
          className={"inputBox"} />
        <br />
        
      </div>

      <div className={"inputContainer"}>
        <input
          value={email}
          placeholder="Enter your email"
          onChange={ev => setEmail(ev.target.value)}
          className={"inputBox"} />
        <br />
        
      </div>

      <div className={"buttonContainer"}>
        <input
          type={"button"}
          disabled={!(name !== "" && email !== "")}
          value={"Generate UUID"}
          onClick={onGenerateButtonClick}
          className={"inputBox"} />
        <br />
        
      </div>

      <div className={"inputContainer"}>
        <input
          value={id}
          placeholder="UUID"
          disabled={true}
          onChange={ev => setId(ev.target.value)}
          className={"inputBox"} />
        <br />
        
      </div>
      
    </div>
  )
}