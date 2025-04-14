import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link href="/signup">Go to SignUp page</Link>
      <br />
      <Link href="/login">Go to Login page</Link>
    </div>
  );
}
