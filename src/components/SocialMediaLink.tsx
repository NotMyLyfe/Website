import React from "react";
import "../scss/social_media_link.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface SocialMediaLinkProps {
    link: string;
    icon: IconProp;
    text: string;
}

function SocialMediaLink(props : SocialMediaLinkProps) : React.ReactElement{
    return (
        <a href={props.link}>
            <FontAwesomeIcon icon={props.icon} />
            <p>{props.text}</p>
        </a>
    );
}

export default SocialMediaLink;