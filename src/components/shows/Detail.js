import React, {Fragment } from 'react';

export default ({match,shows:{show,score}})=>

<Fragment>
   <div className="row">
   <div className="col-6">
   <div className="show-details-part1">
   <h3>{show.name}</h3>
   <img src={show.image.medium} className="img-fluid"/><br/>
    <div className="mt-2" dangerouslySetInnerHTML={{__html: show.summary}} />
   </div>
   
   </div>
   <div className="col-6">
<div className="show-details-part2">
<div className="detail-item">
<div className="item-header">Score</div>
<div className="item-data">{score}</div>
</div>

<div className="detail-item">
<div className="item-header">Type</div>
<div className="item-data">{show.type}</div>
</div>

<div className="detail-item">
<div className="item-header">Language</div>
<div className="item-data">{show.language}</div>
</div>

<div className="detail-item">
<div className="item-header">Url</div>
<div className="item-data"><a href={show.url} target="_blank">{show.url}</a></div>
</div>


<div className="detail-item">
<div className="item-header">Genres</div>
<div className="item-data">
<ul>
{show.genres.map((genre, i) => {         
           return (<li key={i}>{genre}</li>) 
        })}
</ul>
</div>
</div>

<div className="detail-item">
<div className="item-header">Status</div>
<div className="item-data">{show.status}</div>
</div>


<div className="detail-item">
<div className="item-header">Runtime</div>
<div className="item-data">{show.runtime}</div>
</div>


<div className="detail-item">
<div className="item-header">Premiered</div>
<div className="item-data">{show.premiered}</div>
</div>


<div className="detail-item">
<div className="item-header">Rating</div>
<div className="item-data">Avarage:{show.rating.avarage}</div>
</div>

<div className="detail-item">
<div className="item-header">Weight</div>
<div className="item-data">Avarage:{show.weight}</div>
</div>

<div className="detail-item">
<div className="item-header">Web Channel</div>
<div className="item-data">{show.webChannel}</div>
</div>

<div className="detail-item">
<div className="item-header">Links</div>
<div className="item-data">Self:<a href={show._links.self.href} target="_blank">{show._links.self.href}</a></div>
<div className="item-data">Previous Episode:<a href={show._links.self.href} target="_blank">{show._links.self.href}</a></div>
</div> 
   </div></div></div>
</Fragment>