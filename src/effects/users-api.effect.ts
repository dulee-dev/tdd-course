export const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<boolean> => {
  const url = `http://localhost:4000/users?email=${email}&password=${password}`;

  const response = await fetch(url);
  const result = await response.json();
  const ok = result.length > 0;
  return ok;
};
