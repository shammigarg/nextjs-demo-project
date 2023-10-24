import AuthForm from '../components/AuthForm';
import { json, redirect } from 'react-router-dom';


function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({request}) {

  const data = await request.formData();

  const searchParams = new URL(request.url).searchParams;

  const mode = searchParams.get('mode') || "login";


  const authData = {
    email: data.get("email"),
    password: data.get("password")
  }
  if (mode !== "login" && mode !== "signup") {
    throw json(
      { message: "Please enter valid mode" },
      { status: 422 })
  }

  const response = await fetch('http://localhost:8080/' + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(authData)

  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json(
      { message: " Could not authenicate user." }, { status: 500 })
  }

  const resData = await response.json()
  const token = resData.token;
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("token", token);
  localStorage.setItem('expiration', expiration.toISOString())

  return redirect('/');

}