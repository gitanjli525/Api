import { useState } from "react";

let v1,
  v2 = 0;

let name, password;

async function loginUser(data) {
  await fetch(
    "https://per-clean-2tss9.ondigitalocean.app/api/store/loginStore/",
    {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        storeName: data.name,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}

function Form() {
  const onChangeName = (event) => {
    console.log(event.target.value);
    v1 = event.target.value.length;
    name = event.target.value;
  };
  const onChangePass = (event) => {
    console.log(event.target.value);
    v2 = event.target.value.length;
    password = event.target.value;
  };

  const onClick = (event) => {
    console.log(event.target.value);

    event.preventDefault();

    setCheck(() => {
      if (v1 < 5 || v2 < 7) {
        return { display: "inline" };
      } else {
        loginUser({ name, password });
        return { display: "none" };
      }
    });
  };

  const [check, setCheck] = useState({ displapy: "none" });

  return (
    <>
      <form>
        <label>Name:</label>
        <input
          type="text"
          size="70"
          onChange={onChangeName}
          placeholder="enter more than 5 characters"
        ></input>
        <br />
        <label>Password:</label>
        <input
          type="text"
          size="70"
          onChange={onChangePass}
          placeholder="enter more than 7 characters"
        ></input>
        <br />
        <button onClick={onClick}>Submit</button>
        {check.display === "inline" && (
          <div>
            <h2>Error!!!</h2>
          </div>
        )}
        <p>
          PLease enter more than 5 characters in name and more than 7 characters
          in password
        </p>
      </form>
    </>
  );
}

export default Form;
