import ActionButtons from "@/components/ActionButtons";
import Card from "@/components/Card";
import Header from "@/components/Header";
import Limit from "@/components/Limit";
import Savings from "@/components/Savings";
import Statistics from "@/components/Statistics";
import Activity from "@/components/Activity";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white p-4 sm:p-6">
      <Header />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
        {/* Account Details Card */}
        <div className="md:col-span-2 lg:col-span-4">
          <Card />
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
          <Savings />
        </div>

        {/* Statistics Card */}
        <div className="md:col-span-1 lg:col-span-4">
          <Statistics />
        </div>

        {/* Recent Activity Card */}
        <div className="md:col-span-1 lg:col-span-4">
          <Activity />
        </div>
      </div>
    </div>
  );
}
