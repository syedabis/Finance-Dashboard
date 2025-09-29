import ActionButtons from "@/components/ActionButtons";
import AccountOverview from "@/components/AccountOverview";
import Header from "@/components/Header";
import Limit from "@/components/Limit";
import ChequeStatusSummary from "@/components/ChequeStatusSummary";
import Statistics from "@/components/ChequeStatistics";
import ChequeActivity from "@/components/Activity";
import Footer from "@/components/Footer";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 p-4 sm:p-6">
        <Header />

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
            <Statistics />
          </div>

          {/* Recent Activity Card */}
          <div className="md:col-span-1 lg:col-span-4">
            <ChequeActivity />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
