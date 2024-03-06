import React from 'react';
import msProjectImage from '../../Assets/img/design.jpeg'; // Import your image
import ActivityPage from './ActivityPage';

const MsProject = () => {
    const data = {
        title: "Microsoft Project",
        description: "Microsoft Project is a popular project management software that offers tools for planning, scheduling, and resource management. It helps project managers create project plans, track progress, and collaborate with team members effectively.",
        importance: [
            "Create detailed project schedules and plans",
            "Allocate resources efficiently",
            "Track tasks, milestones, and dependencies",
            "Monitor project progress and performance",
            "Facilitate collaboration and communication among project teams",
            "Generate reports and analyze project data"
        ],
        benefits: [
            "Improved project planning and scheduling capabilities",
            "Enhanced resource allocation and utilization",
            "Better tracking and management of project tasks and timelines",
            "Increased collaboration and communication among project stakeholders",
            "Greater visibility into project progress and performance",
            "Empowerment of project managers with tools for decision-making"
        ]
    };

    return (
        <ActivityPage
            title={data.title}
            description={data.description}
            importance={data.importance}
            benefits={data.benefits}
            image={msProjectImage}
        />
    );
}

export default MsProject;
