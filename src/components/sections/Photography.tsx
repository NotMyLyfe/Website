import React from 'react';
import { Section } from '@/interfaces';
import '@styles/photography.scss';

import osap1 from '@pics/osap_protest/DSC01833.jpg';
import osap2 from '@pics/osap_protest/DSC01975-2.jpg';
import osap3 from '@pics/osap_protest/DSC02114.jpg';
import osap4 from '@pics/osap_protest/DSC02115.jpg';

import lake22_1 from '@pics/pnw_s25/lake_22/DSC02443.jpg';
import lake22_2 from '@pics/pnw_s25/lake_22/DSC02461.jpg';
import lake22_3 from '@pics/pnw_s25/lake_22/DSC02464.jpg';
import lake22_4 from '@pics/pnw_s25/lake_22/DSC02591.jpg';
import lake22_5 from '@pics/pnw_s25/lake_22/DSC02714.jpg';

import olympic_1 from '@pics/pnw_s25/olympic/DSC03148-HDR.jpg';
import olympic_2 from '@pics/pnw_s25/olympic/DSC03172.jpg';
import olympic_3 from '@pics/pnw_s25/olympic/DSC03195.jpg';
import olympic_4 from '@pics/pnw_s25/olympic/DSC03712.jpg';
import olympic_5 from '@pics/pnw_s25/olympic/DSC03800.jpg';
import olympic_6 from '@pics/pnw_s25/olympic/DSC03865.jpg';
import olympic_7 from '@pics/pnw_s25/olympic/DSC04801.jpg';
import olympic_8 from '@pics/pnw_s25/olympic/DSC04922.jpg';
import olympic_9 from '@pics/pnw_s25/olympic/DSC05107.jpg';

import rainier_1 from '@pics/pnw_s25/rainier/DSC05770.jpg';
import rainier_2 from '@pics/pnw_s25/rainier/DSC05863.jpg';
import rainier_3 from '@pics/pnw_s25/rainier/DSC05934.jpg';
import rainier_4 from '@pics/pnw_s25/rainier/DSC06012.jpg';
import rainier_5 from '@pics/pnw_s25/rainier/DSC06024.jpg';
import rainier_6 from '@pics/pnw_s25/rainier/DSC06044-HDR.jpg';
import rainier_7 from '@pics/pnw_s25/rainier/DSC06052.jpg';

import cascades_1 from '@pics/pnw_s25/cascades/DSC06149-HDR.jpg';
import cascades_2 from '@pics/pnw_s25/cascades/DSC06205-HDR.jpg';
import cascades_3 from '@pics/pnw_s25/cascades/DSC06261-HDR.jpg';
import cascades_4 from '@pics/pnw_s25/cascades/DSC06276-HDR.jpg';

import crater_1 from '@pics/pnw_s25/crater_lake/DSC06557-HDR.jpg';
import crater_2 from '@pics/pnw_s25/crater_lake/DSC06568-HDR.jpg';
import crater_3 from '@pics/pnw_s25/crater_lake/DSC06639-HDR.jpg';
import crater_4 from '@pics/pnw_s25/crater_lake/DSC06777-HDR.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faChevronUp, faChevronDown, faCamera } from '@fortawesome/free-solid-svg-icons';
import className from '@helpers/className';

interface PhotoEvent {
    name: string;
    date: string;
    location?: string;
    gear?: string;
    description: string;
    photos: string[];
}

const photoEvents: PhotoEvent[] = [
    {
        name: 'Pacific Northwest',
        date: 'May 2025 - Aug 2025',
        location: 'Washington & Oregon',
        gear: 'Sony ZV-E10 · 18-105mm f/4 G',
        description:
            'Trails and parks across the Pacific Northwest, shot during my summer in Seattle — Lake 22, Olympic National Park, Mount Rainier, the Cascades, and Crater Lake. First time hiking in my life, and I loved every minute of it.',
        photos: [
            lake22_1,
            lake22_2,
            lake22_3,
            lake22_4,
            lake22_5,
            olympic_1,
            olympic_2,
            olympic_3,
            olympic_4,
            olympic_5,
            olympic_6,
            olympic_7,
            olympic_8,
            olympic_9,
            rainier_1,
            rainier_2,
            rainier_3,
            rainier_4,
            rainier_5,
            rainier_6,
            rainier_7,
            cascades_1,
            cascades_2,
            cascades_3,
            cascades_4,
            crater_1,
            crater_2,
            crater_3,
            crater_4,
        ],
    },
    {
        name: 'OSAP Protests',
        date: 'March 6, 2026',
        location: 'University of Waterloo',
        gear: 'Sony α7M5 · 70-200mm f/2.8 GM II',
        description:
            'Press coverage of student protests against proposed OSAP changes. These photos are journalistic — I document what I see and take no political position on the subjects covered.',
        photos: [osap1, osap2, osap3, osap4],
    },
];

type HDir = 'left' | 'right';
type VDir = 'up' | 'down';

function Photography(_props: Section.SectionProps): React.ReactElement {
    const [currentEvent, setCurrentEvent] = React.useState(0);
    const [currentPhoto, setCurrentPhoto] = React.useState(0);
    const [eventExiting, setEventExiting] = React.useState(false);
    const [eventDir, setEventDir] = React.useState<HDir>('right');
    const [photoExiting, setPhotoExiting] = React.useState(false);
    const [photoDir, setPhotoDir] = React.useState<VDir>('down');

    React.useEffect(() => {
        photoEvents.forEach((e) => {
            e.photos.forEach((src) => {
                const img = new Image();
                img.src = src;
            });
        });
    }, []);

    const goToEvent = (index: number, dir: HDir) => {
        if (eventExiting || index === currentEvent) return;
        setEventDir(dir);
        setEventExiting(true);
        setTimeout(() => {
            setCurrentEvent(index);
            setCurrentPhoto(0);
            setEventExiting(false);
        }, 300);
    };

    const goToPhoto = (index: number, dir: VDir) => {
        if (photoExiting) return;
        setPhotoDir(dir);
        setPhotoExiting(true);
        setTimeout(() => {
            setCurrentPhoto(index);
            setPhotoExiting(false);
        }, 300);
    };

    const prevEvent = () => goToEvent((currentEvent - 1 + photoEvents.length) % photoEvents.length, 'left');
    const nextEvent = () => goToEvent((currentEvent + 1) % photoEvents.length, 'right');

    const event = photoEvents[currentEvent];
    const photoCount = event.photos.length;

    const prevPhoto = () => goToPhoto((currentPhoto - 1 + photoCount) % photoCount, 'up');
    const nextPhoto = () => goToPhoto((currentPhoto + 1) % photoCount, 'down');

    return (
        <div className="photography">
            <div className="photography-layout">
                {/* ── Left: large photo with up/down nav ── */}
                <div className="photography-photo">
                    {photoCount > 1 && (
                        <button className="photo-nav up" onClick={prevPhoto} aria-label="Previous photo">
                            <FontAwesomeIcon icon={faChevronUp} />
                        </button>
                    )}
                    <div className="photo-display">
                        {photoCount > 0 ? (
                            event.photos.map((src, i) => (
                                <img
                                    key={i}
                                    className={className({
                                        'photo-img': true,
                                        active: i === currentPhoto && !photoExiting && !eventExiting,
                                        exiting: i === currentPhoto && (photoExiting || eventExiting),
                                        up: i === currentPhoto && photoExiting && photoDir === 'up',
                                        down: i === currentPhoto && photoExiting && photoDir === 'down',
                                    })}
                                    src={src}
                                    alt={`${event.name} ${i + 1}`}
                                />
                            ))
                        ) : (
                            <div className="photos-placeholder">
                                <FontAwesomeIcon icon={faCamera} />
                                <p>Photos coming soon</p>
                            </div>
                        )}
                    </div>
                    {photoCount > 1 && (
                        <button className="photo-nav down" onClick={nextPhoto} aria-label="Next photo">
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                    )}
                </div>

                {/* ── Right: event info with left/right nav ── */}
                <div
                    className={className({
                        'photography-info': true,
                        exiting: eventExiting,
                        left: eventExiting && eventDir === 'left',
                        right: eventExiting && eventDir === 'right',
                    })}
                >
                    <div className="event-content">
                        <h2>{event.name}</h2>
                        <span className="event-date">
                            {event.date}
                            {event.location && <> &middot; {event.location}</>}
                        </span>
                        <p>{event.description}</p>
                        {event.gear && <span className="event-gear">{event.gear}</span>}
                        {photoCount > 1 && (
                            <span className="photo-counter">
                                {currentPhoto + 1} / {photoCount}
                            </span>
                        )}
                    </div>
                    <div className="event-nav">
                        <button onClick={prevEvent} aria-label="Previous category">
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <span className="event-counter">
                            {currentEvent + 1} / {photoEvents.length}
                        </span>
                        <button onClick={nextEvent} aria-label="Next category">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Photography;
