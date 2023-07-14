import "./CommunityrightCard.css"
import React from 'react';
import { ReactComponent as Githublink } from './githublinkcommunity.svg'; 
import { ReactComponent as Maillink } from './mailLink.svg'; 
import { ReactComponent as Linkedinlink } from './linkedinLink.svg';


function CommunityrightCard(props) {
  return (
    <div className="Community-right-card">
    <div className="Name-container-community-right">
  <div className='containerinsidenameCommunity-right'>
  <p className='CommunityNameright'>{props.name}</p>
        <div className='Communitylink-containerright'>
        <a href={props.githublink}><Githublink className='logoimagecommunity' alt="button.svg" /></a>
        <a href={props.maillink}><Maillink className='logoimagecommunity' alt="button.svg" /></a>
        <a href={props.linkedinlink}><Linkedinlink className='logoimagecommunity' alt="button.svg" /></a></div>
  </div>
   
    </div>
    <div className='ImageContainerCommunityRight'>
    <div className='ContainingImageCommunityright'>
    <img src={props.image} alt="image" class="imageCommunityright"/>
    </div>
    

        
    </div>
    </div>
  );
}

export default CommunityrightCard;