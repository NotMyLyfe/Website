import React from 'react';
import { Section } from '@/interfaces';
import '@styles/experience.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import className from '@helpers/className';

interface SubRole {
    role: string;
    dates: string;
}

interface ExperienceEntry {
    company: string;
    role: string;
    dates: string;
    bullets: string[];
    subRoles?: SubRole[];
}

const workExperience: ExperienceEntry[] = [
    {
        company: 'Cloudflare — R2',
        role: 'Software Engineering Intern',
        dates: 'May 2026 – Present',
        bullets: [
            'Building tooling to improve system observability and performance in Rust.',
        ],
    },
    {
        company: 'Cerebras Systems',
        role: 'Inference Platform Intern',
        dates: 'Sep 2025 – Dec 2025',
        bullets: [
            'Worked on job scheduling infrastructure for the inference platform.',
            'Built tooling for large-scale data ingestion with bounded memory usage.',
        ],
    },
    {
        company: 'Amazon Web Services — DynamoDB, Transactional Services',
        role: 'Software Development Engineer Intern',
        dates: 'May 2025 – Sep 2025',
        bullets: [
            'Built incident response tooling to help diagnose and recover from production issues.',
            'Worked on telemetry infrastructure for monitoring distributed systems across regions.',
        ],
    },
    {
        company: 'University of Waterloo',
        role: 'Undergraduate Research Assistant — Bioinformatics',
        dates: 'Jan 2025 – May 2025',
        bullets: [
            'Optimized computational methods for genome inference, improving both speed and memory efficiency.',
            'Applied calibration techniques to improve the reliability of DNA classification predictions.',
        ],
    },
    {
        company: 'Sandvine',
        role: 'Software Engineering Intern',
        dates: 'May 2024 – Aug 2024',
        bullets: [
            'Investigated and fixed a scoring bug in the traffic analysis pipeline.',
            'Analyzed large-scale QoS traffic data from multiple broadband providers to surface performance insights for engineering and product teams.',
            'Automated data polling, aggregation, and anomaly detection to reduce retrieval latency.',
        ],
    },
    {
        company: 'Doctalk',
        role: 'Software Engineering Intern',
        dates: 'Sep 2023 – Apr 2024',
        bullets: [
            'Migrated workflow data between storage backends to improve query performance and reduce storage costs.',
            'Built a state machine for medical workflows, enabling new providers to be onboarded without code changes.',
            'Authored responsive email templates with broad client compatibility.',
        ],
    },
];

const volunteerExperience: ExperienceEntry[] = [
    {
        company: 'University of Waterloo Computer Science Club',
        role: 'President / Vice President',
        dates: 'Jan 2024 – Present',
        subRoles: [
            { role: 'Vice President', dates: 'Jan 2024 – Apr 2024' },
            { role: 'President', dates: 'May 2024 – Sep 2024' },
            { role: 'Executive Advisor', dates: 'May 2025 – Present' },
        ],
        bullets: [
            'Relaunched weekly tech talks and social events, growing term participation across the CS student community.',
        ],
    },
    {
        company: 'University of Waterloo Mathematics Society',
        role: 'Photographer',
        dates: 'Sep 2022 – Apr 2026',
        bullets: [
            'Photographed MathSoc events, capturing community moments across the faculty.',
        ],
    },
    {
        company: 'Hack the 6ix',
        role: 'Web Executive / Web Advisor',
        dates: 'Jan 2023 – Present',
        subRoles: [
            { role: 'Web Executive', dates: 'Jan 2023 – Aug 2024' },
            { role: 'Web Advisor', dates: 'Sep 2024 – Present' },
        ],
        bullets: ["Contribute to web development and DevOps for one of Toronto's largest hackathons."],
    },
];

function ExperienceCard({ entry }: { entry: ExperienceEntry }): React.ReactElement {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <div
            className={className({ 'experience-card': true, expanded })}
            onClick={() => setExpanded((e) => !e)}
        >
            <div className="experience-header">
                <div className="experience-header-text">
                    <h3>{entry.company}</h3>
                    {entry.subRoles ? (
                        <div className="sub-roles">
                            {entry.subRoles.map((sub, j) => (
                                <div className="sub-role" key={j}>
                                    <span className="sub-role-title">{sub.role}</span>
                                    <span className="sub-role-dates">{sub.dates}</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <h4>{entry.role}</h4>
                    )}
                </div>
                <div className="experience-header-right">
                    <span className="experience-dates">{entry.dates}</span>
                    {entry.bullets.length > 0 && (
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className={className({ chevron: true, expanded })}
                        />
                    )}
                </div>
            </div>
            {entry.bullets.length > 0 && (
                <div className="card-body">
                    <div className="card-body-inner">
                        <ul>
                            {entry.bullets.map((bullet, j) => (
                                <li key={j}>{bullet}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

function Experience(_props: Section.SectionProps): React.ReactElement {
    return (
        <div className="experience">
            <div className="experience-group">
                <h1>Work Experience</h1>
                <div className="experience-list">
                    {workExperience.map((entry, i) => (
                        <ExperienceCard key={i} entry={entry} />
                    ))}
                </div>
            </div>
            <div className="experience-group">
                <h1>Volunteer &amp; Leadership</h1>
                <div className="experience-list">
                    {volunteerExperience.map((entry, i) => (
                        <ExperienceCard key={i} entry={entry} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;
