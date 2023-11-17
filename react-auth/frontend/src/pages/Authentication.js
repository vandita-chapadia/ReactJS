import AuthForm from "../components/AuthForm";
import { json, redirect } from "react-router-dom";
function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;
export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || 'login';
  console.log("mode",mode)

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported mode." }, { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const resp = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  console.log("resp",resp)

  if (resp.status === 422 || resp.status === 401) {
    return resp;
  }

  if (!resp.ok) {
    throw json({ message: "Could not authenticate user." }, { status: 500 });
  }


  const resData = await resp.json();
  const token = resData.token;

  localStorage.setItem('token',token)
  const expiration= new Date ();
  expiration.setHours(expiration.getHours()+1)
  localStorage.setItem('expiration',expiration.toISOString())

  return redirect("/");
}
