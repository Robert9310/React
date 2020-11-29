import  './newComponent.css';
import React from 'react';

class NewComponent extends React.Component{

        render() {
            return (
                <div className="newComponent">
                    <ul>
                        <li>nuevo</li>
                        <li>elemento</li>
                        <li>e.g...sad</li>
                    </ul>
                </div>
            )
        }
}

export default NewComponent;
