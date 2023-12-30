import type sectionList from './sectionList';
import type sectionProps from './sectionProps';

declare namespace Section {
    type SectionList = sectionList;
    type SectionProps = sectionProps;
}

export type { Section };
