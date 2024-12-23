import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "gray",
    icon: BanknotesIcon,
    title: "Average Disposal Fee",
    value: "27.06",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "gray",
    icon: UsersIcon,
    title: "Number of Jobs Fulfilled",
    value: "100",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  
];

export default statisticsCardsData;
