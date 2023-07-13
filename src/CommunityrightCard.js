import "./CommunityrightCard.css"
import React from 'react';

import { ReactComponent as Githublink } from './githublinkcommunity.svg'; 
import { ReactComponent as Maillink } from './mailLink.svg'; 
import { ReactComponent as Linkedinlink } from './linkedinLink.svg';
import TemplateImage  from './madhur_jain.png'; 

function CommunityrightCard() {
  return (
    <div className="Community-right-card">
    <div className="Name-container-community-right">
  <div className='try-right'>
  <p className='CommunityName'>Madhur jain</p>
        <div className='Communitylink-container'>
        <a href='#'><Githublink className='logoimagecommunity' alt="button.svg" /></a>
        <a href='#'><Maillink className='logoimagecommunity' alt="button.svg" /></a>
        <a href='#'><Linkedinlink className='logoimagecommunity' alt="button.svg" /></a></div>
  </div>
   
    </div>
    <div className='ImageContainerCommunityRight'>
    <div className='ContainingImageCommunity'>
    <img src={require('./madhur_jain.png')} alt="image" class="imageCommunity"/>
    </div>
    

        
    </div>
    </div>
  );
}

export default CommunityrightCard;