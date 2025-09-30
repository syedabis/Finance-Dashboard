import ActionButtons from "@/components/ActionButtons";
import AccountOverview from "@/components/AccountOverview";
import Header from "@/components/Header";
import Limit from "@/components/Limit";
import ChequeStatusSummary from "@/components/ChequeStatusSummary";
import KeyMetrics from "@/components/KeyMetrics";
import ChequeActivity from "@/components/Activity";
import Footer from "@/components/Footer";
import { currentUser } from "@clerk/nextjs/server";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default async function Dashboard() {
  const user = await currentUser();
  const userRole = (user?.publicMetadata as any)?.role;
  const isAdmin = userRole === "admin";

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 p-4 sm:p-6">
        <Header />

        <SignedOut>
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Please Sign In</h2>
              <p className="text-gray-600">You need to be signed in to access the dashboard.</p>
            </div>
          </div>
        </SignedOut>

        <SignedIn>
          {isAdmin ? (
            <>
              {/* Main Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
                {/* Account Details Card */}
                <div className="md:col-span-2 lg:col-span-4">
                  <AccountOverview />
                </div>

                {/* Action Buttons */}
                <div className="md:col-span-1 lg:col-span-4">
                  <ActionButtons />
                </div>

                {/* Daily Limit Card */}
                <div className="md:col-span-1 lg:col-span-4">
                  <Limit />
                </div>

                {/* Saving Plans Card */}
                <div className="md:col-span-1 lg:col-span-4">
                  <ChequeStatusSummary />
                </div>

                {/* Statistics Card */}
                <div className="md:col-span-1 lg:col-span-4">
                  <KeyMetrics />
                </div>

                {/* Recent Activity Card */}
                <div className="md:col-span-1 lg:col-span-4">
                  <ChequeActivity />
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md mx-auto text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-red-800 mb-2">Access Denied</h2>
                <p className="text-red-600 mb-4">
                  You do not have permission to access this dashboard. Admin role required.
                </p>
                <p className="text-sm text-red-500">
                  Contact your administrator if you believe this is an error.
                </p>
              </div>
            </div>
          )}
        </SignedIn>
      </div>
      
      <Footer />
    </div>
  );
}
