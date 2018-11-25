import React, {Fragment } from 'react';
import {Link,Route} from 'react-router-dom';
import Details from './Detail';

export default ({match:{url},shows})=>

<Fragment>
<h2>Batman Tv Shows</h2>
<hr/>
<div className="row">
<div className="col-4">
<ul className="show-list">
        {shows.map(item=>
            <li key={item.show.id}>
                <Link to={`${url}/${item.show.id}`}>{item.show.name}</Link>
            </li>
            )}
    </ul>
</div>
<div className="col-8">
<Route path={`${url}/:showId`} render={props=><Details {...props} shows={shows.find(item=>item.show.id==props.match.params.showId)}/>}/>
</div>
</div>
    
    
</Fragment>
