import React from 'react';

export default function Connect2() {
  return (
    <div>
        <h1>On your computer, look at your available wifi networks and look for <b>vitalhub</b>. If it is there, connect to vitalhub. The password is <b>hubadmin</b>.
        </h1>
        <p> Make sure to log out of the portal on your computer if you are already logged in.
        </p>
        <p> Next on your computer, go to <a href="http://192.168.10.1.com" target="_blank"
        >http://192.168.10.1.com</a> and wait for it to load.
        </p>
        <p>Once it has been loaded, you should be taken to a configuration screen. The is screen will allow you to setup the wifi connection that the hub will use.
        </p>
        <p>Pick from the list of available wifi networks on the site, and click Connect. If the network require a password, it will ask you for that in the prompt.</p>

        <p>During the connection process, you may be disconnected from the hub. If that happens, wait about a minute and then connect to the vitalhub again.</p>

        <p> Once the cnnection is finished, your should see a Connection Successful popup or you will see text at the top of the screen: "Currently connect to: ". If you see this, then you are good. If you are still not connected or received an error, chec the password and try again.
        </p>

        <p>Once the hub is connected to your network, then you can switch back to your normal wifi connection.
        </p>

        <p>The hub will detect your watch. You are now ready to use your VitalBand!
        </p>
        
    </div>
       
   );
}
