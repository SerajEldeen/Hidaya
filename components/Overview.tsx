import HeroOverview from "./HeroOverview";
import MyFeelingOverview from "./MyFeelingOverview";
import SuccessOverview from "./SuccessOverview";

function Overview() {
  return (
    <div className="font-bold  w-full px-4 sm:px-6 md:px-8 lg:px-10 mx-auto  ">
      <HeroOverview />
      <MyFeelingOverview />
      <SuccessOverview />
    </div>
  );
}

export default Overview;
