import { cookies } from "next/headers";

type Payload = {
  userName: string;
  password: string;
  name: string;
};

type ResponseData = {
  type: string;
  payload: Payload;
};

type User = {
  name: string;
  userName: string;
  password: string;
};

const users: User[] = [];

export async function POST(request: Request) {
  const data: ResponseData = await request.json();
  const username = data.payload.userName;
  const password = data.payload.password;
  const cookieStore = cookies();
  if (data.type === "Login") {
    const user = users.find((ele) => ele.userName === username);
    if (!user)
      return Response.json({ message: "user not found" }, { status: 401 });
    if (user.password !== password)
      return Response.json({ message: "user password wrong" }, { status: 401 });
  } else if (data.type === "Register") {
    users.push({
      userName: username,
      password,
      name: data.payload.name,
    });
  } else {
    return Response.json({ message: "wrong method" }, { status: 401 });
  }
  cookieStore.set({
    name: "token",
    value: "your_jwt_token_here",
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24,
  });
  return Response.json(
    { message: "Login successful" },
    {
      status: 200,
    }
  );
}
