import React from "react";

 const Approvalcard = props =>{
    return(
        <div className="ui-card">
            <div className="content">
                {props.children}
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui base green button">Accept</div>
                    <div className="ui base red button">Reject</div>
                </div>
            </div>
        </div>
    );
 } ;
 export default Approvalcard;