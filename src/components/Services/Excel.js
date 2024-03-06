import React from 'react';
import excelImage from '../../Assets/img/design.jpeg'; // Import your image
import ActivityPage from './ActivityPage';

const Excel = () => {
    const data = {
        title: "Excel",
        description: "Excel is a versatile tool that offers various features for data analysis, visualization, and project planning. It helps project managers organize and manipulate data efficiently, track project progress, and perform complex calculations.",
        importance: [
            "Organize and manipulate project data effectively",
            "Track project progress and milestones",
            "Create dynamic Gantt charts and project timelines",
            "Analyze project budget and resource allocation",
            "Perform complex calculations and scenario analysis",
            "Generate insightful reports and visualizations"
        ],
        benefits: [
            "Increased efficiency in data management and analysis",
            "Improved accuracy in project tracking and reporting",
            "Enhanced communication and collaboration among project stakeholders",
            "Flexibility to customize project management solutions according to specific needs",
            "Cost-effectiveness compared to specialized project management software",
            "Empowerment of project managers with powerful tools for decision-making"
        ]
    };

    return (
        <ActivityPage
            title={data.title}
            description={data.description}
            importance={data.importance}
            benefits={data.benefits}
            image={excelImage}
        />
    );
}

export default Excel;
