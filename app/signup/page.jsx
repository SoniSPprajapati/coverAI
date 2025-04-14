import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-100 px-4">
      <div className="w-full max-w-4xl bg-base-200 border border-base-300 rounded-box shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 w-full h-64 md:h-auto relative">
          <img
            src="https://techeconomy.ng/wp-content/uploads/2023/10/Nigerian-AI-Startup-CoverAI-Acquired-by-New-Yorks-Writesea-in-Five-Figure-Deal-.jpg"
            alt="coverAI"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="md:w-1/2 w-full p-8">
          <h3 className="text-2xl font-bold mb-2">Sign up</h3>
          <Link
            href="/login"
            className="text-sm text-blue-500 underline mb-4 inline-block"
          >
            Go to Login
          </Link>

          <form className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">User name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="User name"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full"
                placeholder="Password"
              />
            </div>

            <button className="btn btn-neutral w-full mt-2">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
