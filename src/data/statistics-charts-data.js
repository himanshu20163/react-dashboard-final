import { chartsConfig } from "@/configs";

const websiteViewsChart = {
  type: "bar",  
  height: 350,
  series: [
    {
      name: "Views",  
      data: [13.69, 35.2, 6.78, 70.43, 17.48, 23, 22.07,46.45,7.84,31.22],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#38761d",
    plotOptions: {
      bar: {
        columnWidth: "86%",
        borderRadius: 5,
      },
    },
    xaxis: {
      categories: ["13.69", "35.2", "6.78", "70.43", "17.48", "23"," 22.07","46.45","7.84","31.22"],
    },
    title: {
      text: "Distribution of Disposal Fees",
      align: "center",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
  },
};

const wasteCollectedChart = {
  type: "bar",
  height: 400,
  series: [
    {
      name: "Waste Collected",
      data: [197.44, 191.74, 311.89, 285.8, 244.61, 272.61, 248.12],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#356854"],
    plotOptions: {
      bar: {
        columnWidth: "70%",
        borderRadius: 5,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Battery Disposal",
        "Donation Recycling",
        "Laptop Recycling",
        "Miscellaneous",
        "Mobile Phone Recycling",
        "Printer Recycling",
        "TV Recycling",
      ],
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      title: {
        text: "Volume (kg)",
      },
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    title: {
      text: "Total Volume of Waste Collected",
      align: "center",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    grid: {
      borderColor: "#e0e0e0",
    },
  },
};

const completedTaskChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#388e3c"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
};

const toxicSubstancesChart = {
  type: "pie",
  height: 420, // Adjust as needed
  series: [11, 12.3, 14.5, 16.7, 15.6, 15.4, 14.5],
  options: {
    labels: [
      "Battery Disposal",
      "Desktop Recycling",
      "Laptop Recycling",
      "Miscellaneous",
      "Mobile Phone Recycling",
      "Printer Recycling",
      "TV Recycling",
    ],
    colors: ["#274e13", "#38761d", "#709c5b", "#4da710", "#b2e8a0", "#93c47d", "#6aa84f"],
    legend: {
      position: "bottom",
      fontSize: "14px",
      labels: {
        colors: "#000", // Set legend text color
      },
    },
    chart: {
      width: "600px", // Increase width to accommodate legend
    },
    title: {
      text: "Percentage of Toxic Substances Safely Disposed",
      align: "center",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
  },
};

const EmissionReductionChart  = {
  height: 350, // Adjust as needed
  series:[
    {
      name: 'Greenhouse Gas Emissions Reduced (kg CO2e)',
      data: [807.16, 789.8, 687.13, 996.27, 327.5], // Replace with actual data if different
    },
    {
      name: 'Carbon Emissions Reduced (kg)',
      data: [1103.78, 809.25, 961.83, 1225.98, 460.4], // Replace with actual data if different
    },
  ],
    options:{
      chart: {
        type: 'line',
      },
      title: {
        text: 'Reduction in CO2 and Greenhouse Gas Emissions Across Weeks',
        align: 'center',
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
        },
      },
      xaxis: {
        categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
        title: {
          text: 'Weeks',
        },
      },
      yaxis: {
        min: 0,
        max: 1300, // Adjust if necessary
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      colors: ['#6AA84F', '#38761D'], // Green shades for the lines
      legend: {
        position: 'top',
        horizontalAlign: 'center',
      },
    }
}

const jobCompletionTrendChart = {
  type: "area",
  height: 350,
  series: [
    {
      name: "Completion Percentage",
      data: [20, 20, 22, 28,10],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: true,
      },
    },
    fill: {
      type: "solid",

      colors: ["#90EE90"], // Light green color
    },
    xaxis: {
      categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
    },
    yaxis: {
      title: {
        text: "Completion (%)",
      },
    },
    title: {
      text: "Weekly Job Completion Trend",
      align: "center",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    colors: ["#4caf50"],
  },
};

const wasteCategoryChart = {
  type: "donut",
  height: 420,
  series: [64, 21, 15],
  options: {
    labels: ["Large", "Medium", "Small"],
    colors: ["#4caf50", "#8bc34a", "#cddc39"],
    legend: {
      position: "bottom",
    },
    title: {
      text: "Percentage of Waste Category Distribution",
      align: "center",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
  },
};

const wasteVolumeChart = {
  type: "bar",
  height: 350,
  series: [
    {
      name: "Small",
      data: [24.72, 40.84, 43.09, 43.02],
    },
    {
      name: "Medium",
      data: [218.21, 183.84, 270.25, 340.89,170.94],
    },
    {
      name: "Large",
      data: [107.97, 165.38, 57.67, 85.39],
    },
  ],
  options: {
    chart: {
      stacked: true,
    },
    xaxis: {
      categories: ["Week 1", "Week 2", "Week 3", "Week 4","Week 5"],
    },
    yaxis: {
      title: {
        text: "Volume (kg)",
      },
    },
    title: {
      text: "Total Volume of Waste by Category Across Weeks",
      align: "center",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    colors: ["#38761d", "#93c47d", "#d9ead3"],
  },
};

const energyConservedChart = {
  type: "bar",  
  height: 350,
  series: [
    {
      name: "Views",  
      data: [397.6,172.01, 520.2, 635.82, 326.36, 1008.59, 167.99],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#38761d",
    plotOptions: {
      bar: {
        horizontal: true, // Enable horizontal bar
        columnWidth: "86%",
        borderRadius: 5,
      },
    },
    xaxis: {
      categories: ["Battery Disposal", "Desktop Recycling", "Laptop Recycling", "Miscellaneous", "Mobile Phone Recycling", "Printer Recycling","TV Recycling"],
    },
    title: {
      text: "Energy Conserved by each Service type in Week 4",
      align: "center",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
  },
};

export const statisticsChartsData = [
  {
    color: "white",

    footer: "campaign sent 2 days ago",
    chart: wasteCollectedChart,
  },
  {
    color: "white",
    title: "Daily Sales",
    description: "15% increase in today sales",
    footer: "updated 4 min ago",
    chart: websiteViewsChart,
  },
  {
    color: "white",
    title: "Completed Tasks",
    description: "Last Campaign Performance",
    footer: "just updated",
    chart: wasteVolumeChart,
  },
  {
    color: "white",
    title: "Completed Tasks",
    description: "Last Campaign Performance",
    footer: "just updated",
    chart: toxicSubstancesChart,
  },
  {
    color: "white",
    title: "Completed Tasks",
    description: "Last Campaign Performance",
    footer: "just updated",
    chart: wasteCategoryChart,
  },
  {
    color: "white",
    title: "Completed Tasks",
    description: "Last Campaign Performance",
    footer: "just updated",
    chart: energyConservedChart,
  },
  {
    color: "white",
    chart: jobCompletionTrendChart,
  },
  {
    color: "white",
    chart: EmissionReductionChart,
  }
];

export default statisticsChartsData;
