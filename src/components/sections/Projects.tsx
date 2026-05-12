import React from 'react';
import { Section } from '@/interfaces';
import '@styles/projects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Project {
    name: string;
    description: string;
    tags: string[];
    github?: string;
    inProgress?: boolean;
}

const projects: Project[] = [
    {
        name: 'Protein Secondary Structure Prediction (SecondCount)',
        description:
            'A machine learning model that predicts Q8 secondary structure classes (8-class) from primary amino acid sequence alone — no handcrafted structural features.',
        tags: ['Python', 'Machine Learning', 'Bioinformatics'],
        github: 'https://github.com/NotMyLyfe/SecondCount',
    },
    {
        name: 'Rust PostgreSQL Replica (afterglow)',
        description:
            'A distributed PostgreSQL system targeting cross-provider read-after-write consistency via replica management. Currently building toward an MVP with replica support.',
        tags: ['Rust', 'PostgreSQL', 'Distributed Systems'],
        github: 'https://github.com/NotMyLyfe/afterglow',
        inProgress: true,
    },
];

function Projects(_props: Section.SectionProps): React.ReactElement {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="projects-grid">
                {projects.map((project, i) => (
                    <div className="project-card" key={i}>
                        <div className="project-card-header">
                            <h3>{project.name}</h3>
                            {project.inProgress && <span className="badge in-progress">In Progress</span>}
                        </div>
                        <p>{project.description}</p>
                        <div className="project-tags">
                            {project.tags.map((tag, j) => (
                                <span className="tag" key={j}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        {project.github && (
                            <a
                                className="project-github"
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`GitHub for ${project.name}`}
                            >
                                <FontAwesomeIcon icon={faGithub as IconProp} />
                                <span>View on GitHub</span>
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
