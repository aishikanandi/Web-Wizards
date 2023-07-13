import React from 'react';
import './CommunityleftCard.css';
import { ReactComponent as Githublink } from './githublinkcommunity.svg'; 
import { ReactComponent as Maillink } from './mailLink.svg'; 
import { ReactComponent as Linkedinlink } from './linkedinLink.svg';
import TemplateImage  from './madhur_jain.png'; 

function CommunityleftCard() {
  return (
    <div className="Community-left-card">
    <div className="Name-container-community-left">
  <p className='CommunityName'>Madhur jain</p>
        <div className='Communitylink-container'>
        <a href='#'><Githublink className='logoimagecommunity' alt="button.svg" /></a>
        <a href='#'><Maillink className='logoimagecommunity' alt="button.svg" /></a>
        <a href='#'><Linkedinlink className='logoimagecommunity' alt="button.svg" /></a></div>
   
    </div>
    <div className='ImageContainerCommunityLeft'>
    <div className='ContainingImageCommunity'>
    <img src={TemplateImage} alt="image" class="imageCommunity" />
    </div>  
    </div>
    </div>
  );
}

export default CommunityleftCard;
