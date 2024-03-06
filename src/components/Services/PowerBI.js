import React from 'react';
import powerBiImage from '../../Assets/img/design.jpeg'; // Import your image
import ActivityPage from './ActivityPage';

const PowerBI = () => {
    const data = {
        title: "Power BI",
        description: "Power BI is a powerful business analytics tool that enables users to visualize and share insights from their data. It helps project managers analyze project metrics, identify trends, and make data-driven decisions.",
        importance: [
            "Visualize project data and performance metrics",
            "Identify patterns, trends, and outliers in project data",
            "Generate interactive dashboards and reports",
            "Enable data-driven decision-making",
            "Facilitate collaboration and knowledge sharing",
            "Enhance project transparency and stakeholder engagement"
        ],
        benefits: [
            "Improved project visibility and performance monitoring",
            "Enhanced data analysis and insights generation",
            "Streamlined reporting and communication",
            "Increased efficiency and productivity",
            "Better-informed decision-making",
            "Greater agility and adaptability in project management"
        ]
    };

    return (
        <ActivityPage
            title={data.title}
            description={data.description}
            importance={data.importance}
            benefits={data.benefits}
            image={powerBiImage}
        />
    );
}

export default PowerBI;
