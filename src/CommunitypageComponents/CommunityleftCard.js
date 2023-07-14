import React from 'react';
import './CommunityleftCard.css';
import { ReactComponent as Githublink } from './githublinkcommunity.svg'; 
import { ReactComponent as Maillink } from './mailLink.svg'; 
import { ReactComponent as Linkedinlink } from './linkedinLink.svg';


function CommunityleftCard(props) {
  return (
    <div className="Community-left-card">
    <div className="Name-container-community-left">
    
  <p className='CommunityName'>{props.name}</p>
        <div className='Communitylink-container'>
        <a href={props.githublink}><Githublink className='logoimagecommunity' alt="button.svg" /></a>
        <a href={props.maillink}><Maillink className='logoimagecommunity' alt="button.svg" /></a>
        <a href={props.linkedinlink}><Linkedinlink className='logoimagecommunity' alt="button.svg" /></a></div>
        
   
    </div>
    <div className='ImageContainerCommunityLeft'>
    <div className='ContainingImageCommunity'>
    <img src={props.image} alt="image" class="imageCommunity" />
    </div>  
    </div>
    </div>
  );
}

export default CommunityleftCard;
