import React from 'react'
import ViewItem from '../components/ViewList/ViewItem';
function ViewList() {
  
  return (
    <div className="flex justify-center items-center gap-11 flex-wrap">
        <ViewItem name = "Apple"/>
        <ViewItem name = "Netflix"/>
        <ViewItem name = "SBU"/>
        <ViewItem name = "Applied Visions"/>
    </div>
  );
}

export default ViewList;