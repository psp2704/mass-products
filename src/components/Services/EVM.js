import React from 'react';
import evmImage from '../../Assets/img/design.jpeg'; // Import your image
import ActivityPage from './ActivityPage';

const EVM = () => {
    const data = {
        title: "Earned Value Management (EVM)",
        description: "Earned Value Management (EVM) is a project management technique used to measure project performance objectively by integrating project scope, schedule, and cost data.",
        importance: [
            "Provide a holistic view of project performance",
            "Identify variances from the baseline plan",
            "Facilitate early detection of project issues",
            "Enable proactive decision-making to keep projects on track",
            "Enhance communication with stakeholders",
            "Improve overall project management effectiveness"
        ],
        benefits: [
            "Objective measurement of project performance",
            "Early identification of project variances and deviations",
            "Improved forecasting and risk management",
            "Enhanced project control and decision-making",
            "Increased stakeholder confidence and transparency",
            "Higher chances of project success and on-time delivery"
        ]
    };

    return (
        <ActivityPage
            title={data.title}
            description={data.description}
            importance={data.importance}
            benefits={data.benefits}
            image={evmImage}
        />
    );
}

export default EVM;
