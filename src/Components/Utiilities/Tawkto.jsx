import { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function TawkTo() {
    const tawkMessengerRef = useRef();

    const handleMinimize = () => {
        tawkMessengerRef.current.minimize();
    };

    return (
        <div className="App">
            <button onClick={handleMinimize}> Minimize the Chat </button>

            <TawkMessengerReact
                propertyId="5c4f037d51410568a108fd36"
                widgetId="default"
                ref={tawkMessengerRef}/>
        </div>
    );
}
export default TawkTo;